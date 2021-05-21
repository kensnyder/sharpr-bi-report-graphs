import { select } from 'd3-selection';
import 'd3-transition';
import { pack, hierarchy } from 'd3-hierarchy';
import ToolTip from 'd3-tip';
import { getColor } from './helpers/getColor.js';
import { numberFormat } from './helpers/numberFormat.js';
import { getFontCss } from './helpers/getFontCss.js';
import { clearChart } from './helpers/clearChart.js';
import './tooltipStyles.js';

const css = `
${getFontCss(['roboto-100', 'roboto-400'])}
.sh-chart-bubbles text {
  font-family: Roboto, sans-serif;
	fill: white;
	pointer-events: none;
}
.sh-chart-bubbles .bubble-label {
  text-align: center;
  font-family: Roboto, Arial;
  font-weight: 400;
  line-height: 1.2;
  user-select: none;
}
.sh-chart-bubbles .bubble-value {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  user-select: none;
}
`;

const hasSvgRotationBug = /.+ Version\/.+ Safari\/.+/.test(navigator.userAgent);

export function bubbles({
  data,
  width,
  onClick,
  withinElement,
  animationDuration = 500,
  animationOffset = 40
}) {
  // options
  const rotateDeg = hasSvgRotationBug ? 0 : -8;
  // setup
  const values = data.map((d) => d.value);
  const min = Math.min.apply(null, values);
  const max = Math.max.apply(null, values);
  data.forEach((d, i) => {
    // specify the color of each bubble
    d.color = getColor(i, data.length);
    // make sure bubbles don't get too small visually
    // by giving them a minimum value
    d.actualCount = d.value;
    if (d.value < max / 40) {
      d.value = max / 40;
    }
  });
  // get font sizers
  const getFontSizeLabel = handleFontSizeBetween(12, 25);
  const getFontSizeAmount = handleFontSizeBetween(10, 16);
  // clear any existing chart
  clearChart(withinElement);
  // setup and render
  const svg = createSvg();
  const root = setupHierarchy(svg);
  const bubbles = renderBubbles(svg, root);
  setupToolTips(bubbles);
  renderLabels(bubbles);
  truncateLongLabels();

  // functions only beyond this point
  function createSvg() {
    const svg = select(withinElement)
      .append('svg')
      .attr('width', width)
      .attr('height', width)
      .attr('class', 'sh-chart-bubbles');
    svg.append('style').text(css);
    return svg;
  }
  function setupHierarchy(svg) {
    const bubble = pack().size([width, width]).padding(0);
    const root = hierarchy({ children: data }).sum((d) => d.value);
    bubble(root);
    return root;
  }
  function renderBubbles(svg, root) {
    const bubbles = svg
      .selectAll('.bubble-container')
      .data(root.children)
      .enter()
      .append('g')
      .attr('class', 'bubble-container')
      .attr('transform', (d) => `translate(${d.x} ${d.y})`);
    bubbles
      .append('circle')
      .attr('class', 'bubble')
      .attr('r', (node) => node.r)
      .style('fill', (node) => node.data.color)
      // handling click
      .on('click', (node, i) => onClick(node.data, i))
      // pre-animation styles
      .style('opacity', 0)
      .style('transform', 'scale(0.80)')
      // animation setup
      .transition()
      .duration(animationDuration)
      .delay((node, i) => animationOffset * i)
      // post-animation styles
      .style('opacity', 1)
      .style('transform', 'scale(1)');
    return bubbles;
  }
  function setupToolTips(bubbles) {
    // create new tooltip manager
    const tip = new ToolTip();
    tip
      .attr('class', 'sh-chart-tip-outer')
      .offset([-38, 0])
      .html((node, i) => {
        const color = getColor(i, values.length);
        return `
					<div class="sh-chart-tip" style="background-color: ${color}">
						${node.data.label} (${numberFormat(node.data.actualCount)})
					</div>
					<div class="sh-chart-stem" style="border-color: ${color} transparent transparent transparent"></div>
				`;
      });
    // apply tooltips to bubbles
    bubbles.on('mouseover', tip.show).on('mouseout', tip.hide).call(tip);
    return tip;
  }
  function renderLabels(bubbles) {
    bubbles
      .append('text')
      .attr('class', 'bubble-label')
      .attr('dy', '0')
      .style('text-anchor', 'middle')
      .style('font-size', getFontSizeLabel)
      .text((node) => node.data.label)
      // pre-animation styles
      .style('opacity', 0)
      .style('transform', `rotate(${rotateDeg}deg)`)
      // animation setup
      .transition()
      .duration(animationDuration)
      .delay((node, i) => animationOffset * i)
      // post-animation styles
      .style('opacity', 1)
      .style('transform', 'rotate(0)');
    bubbles
      .append('text')
      .attr('class', 'bubble-amount')
      .attr('dy', '1.2em')
      .style('text-anchor', 'middle')
      .style('font-weight', '100')
      .style('font-size', getFontSizeAmount)
      .text((node) => numberFormat(node.data.actualCount))
      // pre-animation styles
      .style('opacity', 0)
      .style('transform', `rotate(${rotateDeg}deg)`)
      // animation setup
      .transition()
      .duration(animationDuration)
      .delay((node, i) => animationOffset * i)
      // post-animation styles
      .style('opacity', 1)
      .style('transform', 'rotate(0)');
  }
  function truncateLongLabels() {
    const container = svg.node();
    const labels = container.querySelectorAll('.bubble-label');
    [...labels].forEach((label) => {
      const text = label.textContent;
      const ratio = circleLabelRatio(label);
      if (ratio < 0.94) {
        // require that we have at least 6 characters
        const keepChars = Math.floor(ratio * (text.length + 1)) - 1;
        if (keepChars >= 6) {
          label.textContent = text.slice(0, keepChars) + '...';
          if (keepChars >= 8 && circleLabelRatio(label) < 0.94) {
            label.textContent = text.slice(0, keepChars - 2) + '...';
          }
        } else {
          label.textContent = '';
        }
      }
    });
    const amounts = container.querySelectorAll('.bubble-amount');
    [...amounts].forEach((amount) => {
      const label = amount.previousSibling;
      if (label.textContent === '') {
        amount.textContent = '';
      }
    });
  }
  function circleLabelRatio(label) {
    const circle = label.previousSibling;
    const circleWidth = circle.getBoundingClientRect().width;
    const labelWidth = label.getBoundingClientRect().width;
    // 3% padding each side nets 0.94
    return (circleWidth * 0.94) / labelWidth;
  }
  function handleFontSizeBetween(minPx, maxPx) {
    return function (d) {
      const pxRange = maxPx - minPx;
      const dataRange = max - min;
      const ratio = pxRange / dataRange;
      const size = Math.min(maxPx, Math.round(d.value * ratio) + minPx);
      return `${size}px`;
    };
  }
}
