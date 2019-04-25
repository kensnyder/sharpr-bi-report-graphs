import { select } from 'd3-selection';
import 'd3-transition';
import { pack, hierarchy } from 'd3-hierarchy';
import ToolTip from 'd3-tip';
import { getColor } from './helpers/getColor.js';
import { numberFormat } from './helpers/numberFormat.js';

const css = `
@import url(https://fonts.googleapis.com/css?family=Roboto:100,400);
text {
  font-family: Roboto, sans-serif;
	fill: white;
	pointer-events: none;
}
`;

export function bubbles({
  data,
  width,
  onClick,
  withinElement,
  animationDuration = 500,
  animationOffset = 40
}) {
  // make sure bubbles don't get too small visually
  // by giving them a minimum value
  const values = data.map(d => d.value);
  const min = Math.min.apply(null, values);
  const max = Math.max.apply(null, values);
  data.forEach(d => {
    d.actualCount = d.value;
    if (d.value < max / 40) {
      console.log(d.label, d.value, max);
      d.value = max / 40;
    }
  });
  // setup and render
  const svg = createSvg();
  const root = setupHierarchy(svg);
  const bubbles = renderBubbles(svg, root);
  setupToolTips(bubbles);
  renderLabels(bubbles);
  autosizeLabels();

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
    const bubble = pack()
      .size([width, width])
      .padding(0);
    const root = hierarchy({ children: data }).sum(d => d.value);
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
      .attr('transform', d => `translate(${d.x} ${d.y})`);
    bubbles
      .append('circle')
      .attr('class', 'bubble')
      .attr('r', node => node.r)
      .style('fill', (node, i) => getColor(i, data.length))
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
      .attr('class', 'sh-chart-bubbles-tip-outer')
      .offset([-38, 0])
      .html((node, i) => {
        const color = getColor(i, values.length);
        return `
					<div class="sh-chart-bubbles-tip" style="background-color: ${color}">
						${node.data.label} (${numberFormat(node.data.actualCount)})
					</div>
					<div class="sh-chart-bubbles-stem" style="border-color: ${color} transparent transparent transparent"></div>
				`;
      });
    // apply tooltips to bubbles
    bubbles
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .call(tip);
    return tip;
  }
  function renderLabels(bubbles) {
    bubbles
      .append('text')
      .attr('class', 'bubble-label')
      .attr('dy', '0')
      .style('text-anchor', 'middle')
      .style('font-size', getFontSizeLabel)
      .text(node => node.data.label)
      // pre-animation styles
      .style('opacity', 0)
      .style('transform', 'rotate(-8deg)')
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
      .text(node => numberFormat(node.data.actualCount))
      // pre-animation styles
      .style('opacity', 0)
      .style('transform', 'rotate(-8deg)')
      // animation setup
      .transition()
      .duration(animationDuration)
      .delay((node, i) => animationOffset * i)
      // post-animation styles
      .style('opacity', 1)
      .style('transform', 'rotate(0)');
  }
  function autosizeLabels() {
    const container = svg.node();
    const labels = container.querySelectorAll('.bubble-label');
    [...labels].forEach(label => {
      const currSize = parseFloat(label.style.fontSize);
      if (circleLabelRatio(label) < 1) {
        trySmallerFont(label, currSize - 1);
      }
    });
    const amounts = container.querySelectorAll('.bubble-amount');
    [...amounts].forEach(amount => {
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
  function trySmallerFont(label, px) {
    label.style.fontSize = px + 'px';
    const ratio = circleLabelRatio(label);
    const text = label.textContent;
    if (ratio > 1) {
      return;
    }
    // we could cut off a bit and still be the same size
    if (ratio * text.length > px * 0.5) {
      const keepChars = Math.floor(ratio * text.length);
      if (text.length - keepChars > 2) {
        label.textContent = text.slice(0, keepChars) + '...';
        return;
      }
    }
    if (px <= 12) {
      // smallest that we go!
      label.textContent = '';
      return;
    }
    trySmallerFont(label, px - 2);
  }
  function getFontSizeLabel(d) {
    const minPx = 12;
    const maxPx = 25;
    const pxRange = maxPx - minPx;
    const dataRange = max - min;
    const ratio = pxRange / dataRange;
    const size = Math.min(maxPx, Math.round(d.value * ratio) + minPx);
    return `${size}px`;
  }
  function getFontSizeAmount(d) {
    const minPx = 10;
    const maxPx = 16;
    const pxRange = maxPx - minPx;
    const dataRange = max - min;
    const ratio = pxRange / dataRange;
    const size = Math.min(maxPx, Math.round(d.value * ratio) + minPx);
    return `${size}px`;
  }
}
