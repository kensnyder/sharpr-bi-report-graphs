import { select } from 'd3-selection';
import 'd3-transition';
import { stack, stackOffsetWiggle, curveBasis, area } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { areaLabel } from 'd3-area-label';
import ToolTip from 'd3-tip';
import { numberFormat } from './helpers/numberFormat.js';
import { getFontCss } from './helpers/getFontCss.js';
import { clearChart } from './helpers/clearChart.js';
import { getColor } from './helpers/getColor.js';
import './bubbles.css';

const css = `
${getFontCss(['roboto-400'])}
text {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.area-label {
  fill: rgba(255,255,255,0.75);
  pointer-events: none;
}
.chart-x-axis-line,
.chart-tick {
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
  clearChart(withinElement);

  const data = [];
  data.keys = [];
  data.colors = [];
  series.items.forEach(item => {
    item.values.forEach((value, i) => {
      if (!data[i]) {
        data[i] = { time: i };
      }
      data[i][item.label] = value;
    });
    data.keys.push(item.label);
  });

  const dataLabelWidth = 50;
  const xInterval = (width - dataLabelWidth) / (series.dates.length - 1);
  console.log({ series, data });
  const svg = select(withinElement)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'sh-chart-stream');
  svg.append('style').text(css);

  const streamStack = stack().offset(stackOffsetWiggle);
  const xValue = d => d.time;
  const xScale = scaleLinear();
  const yScale = scaleLinear();

  const streamArea = area()
    .x(d => xScale(xValue(d.data)))
    .y0(d => yScale(d[0]))
    .y1(d => yScale(d[1]))
    .curve(curveBasis);

  streamStack.keys(data.keys);
  const stacked = streamStack(data);
  xScale
    .domain([0, data.length - 1])
    .range([dataLabelWidth / 2, width - dataLabelWidth / 2]);

  const areaDelay = (d, i) => {
    const stepsFromMiddle = Math.abs(data.keys.length / 2 - i);
    return Math.floor(stepsFromMiddle) * animationOffset;
  };
  const labelDelay = (d, i) => {
    return areaDelay(d, i) + (animationOffset * data.keys.length) / 2;
  };

  yScale
    .domain([
      Math.min.apply(Math, stacked[0].map(d => d[0])),
      Math.max.apply(Math, stacked[stacked.length - 1].map(d => d[1]))
    ])
    .range([height - 20, 0]);

  const mouseAt = {
    index: null,
    element: null,
    over: function(d, i) {
      mouseAt.index = i;
      mouseAt.element = this;
    },
    out: function() {
      mouseAt.index = null;
      mouseAt.element = null;
    }
  };

  // stacked areas
  const paths = svg.selectAll('path').data(stacked);
  paths
    .enter()
    .append('path')
    .on('mouseover', mouseAt.over)
    .merge(paths)
    .on('mouseout', mouseAt.out)
    .attr('fill', (d, i) => getColor(i, data.keys.length + 1))
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
    .text(d => d.key)
    .attr('transform', areaLabel(streamArea))
    // animate these props
    .style('opacity', 0)
    // animation setup
    .transition()
    .delay(labelDelay)
    // post-animation styles
    .style('opacity', 1);

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
    .attr('x', (d, i) => i * xInterval + dataLabelWidth / 2)
    .attr('y', height)
    .attr('text-anchor', 'middle')
    .text(maybeDateLabel);

  // tick marks for date labels
  const ticks = svg.selectAll('.date-tick').data(series.dates);
  ticks
    .enter()
    .append('rect')
    .attr('class', 'chart-tick')
    .attr('x', (d, i) => i * xInterval + dataLabelWidth / 2)
    .attr('y', height - 20)
    .attr('width', 1)
    .attr('height', 7);
  // line above labels
  svg
    .append('rect')
    .attr('class', 'chart-axis-line chart-x-axis-line')
    .attr('x', dataLabelWidth / 2)
    .attr('y', height - 20)
    .attr('width', width - dataLabelWidth)
    .attr('height', 1);

  const tip = new ToolTip();
  svg.call(tip);
  tip
    .attr('class', 'sh-chart-bubbles-tip-outer')
    .html(({ label, date, amount }) => {
      const color = getColor(mouseAt.index, data.keys.length + 1);
      return `
        <div class="sh-chart-bubbles-tip" style="background-color: white">
         <span class="sh-bart-bubbles-tip-date">${date}:</span>
         <span style="color: ${color}">${label} (${numberFormat(amount)})</span>
        </div>
        <div class="sh-chart-bubbles-stem" style="border-color: white transparent transparent transparent"></div>
      `;
    });

  svg.node().addEventListener('mousemove', evt => {
    const item = series.items[mouseAt.index];
    const x = evt.offsetX;
    if (!item) {
      // too far up or down: hide tooltip
      tip.hide();
      return;
    }
    if (x < dataLabelWidth / 2 || x > width - dataLabelWidth / 2) {
      // too far left or right: hide tooltop
      tip.hide();
      return;
    }
    const label = item.label;
    const idx = Math.round((x - dataLabelWidth / 2) / xInterval);
    const date = series.dates[idx];
    const amount = series.items[mouseAt.index].values[idx];
    tip.offset([0, x - width / 2]);
    tip.show({ label, date, amount }, mouseAt.element);
  });
}
