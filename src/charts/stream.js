import { select } from 'd3-selection';
import 'd3-transition';
import { stack, stackOffsetWiggle, curveBasis, area } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import areaLabel from 'd3-area-label/src/area-label.js';
import ToolTip from 'd3-tip';
import { numberFormat } from './helpers/numberFormat.js';
import { getFontCss } from './helpers/getFontCss.js';
import { clearChart } from './helpers/clearChart.js';
import { getColor } from './helpers/getColor.js';
import './tooltipStyles.js';

const css = `
${getFontCss(['roboto-100', 'roboto-400'])}
.sh-chart-stream text {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.sh-chart-stream .area-label {
  fill: rgba(255,255,255,0.75);
  pointer-events: none;
}
.sh-chart-stream .chart-x-axis-line,
.sh-chart-stream .chart-tick {
  fill: #595959;
}
`;

export function stream({
  width,
  height,
  series,
  withinElement,
  animationDuration = 500,
  animationOffset = 40
}) {
  // setup constants
  const dataLabelWidth = 50;
  const sidePadding = dataLabelWidth / 2;
  const xInterval = (width - dataLabelWidth) / (series.dates.length - 1);
  const xAxisHeight = 20;
  // render
  clearChart(withinElement);
  const svg = createSvg();
  const data = formatSeriesData(series);
  const mouseAt = setupMouseAt();
  renderData();
  addXAxisTicks();
  addXAxisLine();
  addXAxisLabels();
  setupTooltips();

  // functions only beyond this point
  function formatSeriesData(series) {
    const data = [];
    data.keys = [];
    data.colors = [];
    series.items.forEach((item) => {
      item.values.forEach((value, i) => {
        if (!data[i]) {
          data[i] = { time: i };
        }
        data[i][item.label] = value;
      });
      data.keys.push(item.label);
    });
    return data;
  }

  function createSvg() {
    const svg = select(withinElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'sh-chart-stream');
    svg.append('style').text(css);
    return svg;
  }

  function setupMouseAt() {
    const mouseAt = {
      index: null,
      element: null,
      enter: function (d, i) {
        mouseAt.index = i;
        mouseAt.element = this;
      },
      leave: function () {
        mouseAt.index = null;
        mouseAt.element = null;
      }
    };
    return mouseAt;
  }

  function renderData() {
    const streamStack = stack().offset(stackOffsetWiggle);
    const xValue = (d) => d.time;
    const xScale = scaleLinear();
    const yScale = scaleLinear();

    const streamArea = area()
      .x((d) => xScale(xValue(d.data)))
      .y0((d) => yScale(d[0]))
      .y1((d) => yScale(d[1]))
      .curve(curveBasis);

    streamStack.keys(data.keys);
    const stacked = streamStack(data);
    xScale
      .domain([0, data.length - 1])
      .range([sidePadding, width - sidePadding]);

    const areaDelay = (d, i) => {
      const stepsFromMiddle = Math.abs(data.keys.length / 2 - i);
      return Math.floor(stepsFromMiddle) * animationOffset;
    };
    const labelDelay = (d, i) => {
      return areaDelay(d, i) + (animationOffset * data.keys.length) / 2;
    };

    yScale
      .domain([
        Math.min.apply(
          Math,
          stacked[0].map((d) => d[0])
        ),
        Math.max.apply(
          Math,
          stacked[stacked.length - 1].map((d) => d[1])
        )
      ])
      .range([height - xAxisHeight, 0]);

    // stacked areas
    const paths = svg.selectAll('path').data(stacked);
    paths
      .enter()
      .append('path')
      .on('mouseenter', mouseAt.enter)
      .merge(paths)
      .on('mouseleave', mouseAt.leave)
      .attr('fill', (d, i) => getColor(i, data.keys.length + 1))
      .attr('stroke', (d, i) => getColor(i, data.keys.length + 1))
      .attr('stroke-width', 0.5)
      .attr('d', streamArea)
      .style('transform-origin', '50% 50%')
      // animate these props
      .style('opacity', 0)
      .style('transform', 'scaleY(0)')
      // animation setup
      .transition()
      .duration(animationDuration)
      .delay(areaDelay)
      // post-animation styles
      .style('opacity', 1)
      .style('transform', 'scaleY(1)');

    // area labels
    const labels = svg.selectAll('.area-label').data(stacked);
    labels
      .enter()
      .append('text')
      .attr('class', 'area-label')
      .merge(labels)
      .text((d) => d.key)
      .attr('transform', areaLabel(streamArea))
      // animate these props
      .style('opacity', 0)
      // animation setup
      .transition()
      .delay(labelDelay)
      // post-animation styles
      .style('opacity', 1);
  }

  function addXAxisLabels() {
    // date labels
    const maybeDateLabel = (d, i) => {
      if (series.dates.length > width / dataLabelWidth && i % 2) {
        return '';
      }
      return d;
    };
    const dates = svg.selectAll('.date-label').data(series.dates);
    dates
      .enter()
      .append('text')
      .attr('class', 'chart-axis-label chart-x-axis-label')
      .attr('x', (d, i) => i * xInterval + sidePadding)
      .attr('y', height)
      .attr('text-anchor', 'middle')
      .text(maybeDateLabel);
  }

  function addXAxisTicks() {
    // tick marks for date labels
    const ticks = svg.selectAll('.date-tick').data(series.dates);
    ticks
      .enter()
      .append('rect')
      .attr('class', 'chart-tick')
      .attr('x', (d, i) => i * xInterval + sidePadding)
      .attr('y', height - xAxisHeight)
      .attr('width', 1)
      .attr('height', 7);
  }
  function addXAxisLine() {
    // line above labels
    svg
      .append('rect')
      .attr('class', 'chart-axis-line chart-x-axis-line')
      .attr('x', sidePadding)
      .attr('y', height - xAxisHeight)
      .attr('width', width - dataLabelWidth)
      .attr('height', 1);
  }
  function setupTooltips() {
    const tip = new ToolTip();
    svg.call(tip);
    tip.attr('class', 'sh-chart-tip-outer').html(({ label, date, amount }) => {
      const color = getColor(mouseAt.index, data.keys.length + 1);
      return `
          <div class="sh-chart-tip" style="background-color: ${color}">
           <span class="sh-chart-tip-date">${date}:</span>
           <span style="sh-chart-tip-amount">${label} (${numberFormat(
        amount
      )})</span>
          </div>
          <div class="sh-chart-stem" style="border-color: ${color} transparent transparent transparent"></div>
        `;
    });

    svg.node().addEventListener('mousemove', (evt) => {
      const item = series.items[mouseAt.index];
      const x = evt.offsetX;
      if (!item) {
        // too far up or down: hide tooltip
        tip.hide();
        return;
      }
      if (x < sidePadding || x > width - sidePadding) {
        // too far left or right: hide tooltop
        tip.hide();
        return;
      }
      const label = item.label;
      const idx = Math.round((x - sidePadding) / xInterval);
      const date = series.dates[idx];
      const amount = series.items[mouseAt.index].values[idx];
      tip.offset([0, x - width / 2]);
      tip.show({ label, date, amount }, mouseAt.element);
    });
  }
}
