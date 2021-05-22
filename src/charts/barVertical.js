import { select } from 'd3-selection';
import 'd3-transition';
import { scaleLinear } from 'd3-scale';
import { numberFormat } from './helpers/numberFormat.js';
import { getFontCss } from './helpers/getFontCss.js';
import { clearChart } from './helpers/clearChart.js';
import regression from 'd3-regression/src/linear.js';

const css = `
${getFontCss(['roboto-400'])}
.sh-chart-bar-vertical text {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.sh-chart-bar-vertical .chart-axis-line,
.sh-chart-bar-vertical .chart-tick {
  fill: #595959;
}
.sh-chart-bar-vertical .bar-group .chart-value {
  display: none;
}
.sh-chart-bar-vertical .bar-group:hover .chart-value {
  display: block;
}
.sh-chart-bar-vertical .regression-line {
  stroke: #666;
  stroke-dasharray: 6 4;
  stroke-width: 2;
}
`;

export function barVertical({
  data,
  color,
  height,
  width,
  onClick,
  withinElement,
  animationDuration = 500,
  animationOffset = 40
}) {
  const fontSize = 13;
  const tickHeight = fontSize * 0.75;
  const barSpacing = 4;
  const barNumberPadding = barSpacing * 3;
  const xAxisAreaHeight = barSpacing + fontSize + tickHeight + 5;
  const yLabelFontHeight = 16;
  const numYAxisLabels = 5;
  const values = data.map(d => d.value);
  const highest = Math.max.apply(null, values);
  // const lowest = Math.max.apply(null, values);
  const highestWidth =
    (String(numberFormat(highest)).length * fontSize) / 2 + 7;
  // const scaleAt = ((width - highestWidth) / highest).toFixed(2);
  const barAreaLeft = highestWidth + barSpacing * 2;
  const barAreaTop = yLabelFontHeight + barNumberPadding;
  const barAreaWidth = width - highestWidth - barSpacing * 4;
  const barAreaHeight = height - xAxisAreaHeight - barAreaTop;
  const barAreaBottom = barAreaTop + barAreaHeight;
  const barWidth =
    (barAreaWidth - (barSpacing * data.length - 1)) / data.length;
  const barPxPerValue = barAreaHeight / highest;
  data.forEach((point, i) => {
    point.index = i;
  });
  // clear any existing chart
  clearChart(withinElement);
  // run it
  const svg = createSvg(withinElement);
  // debug: highlight bar area
  // svg
  //   .append('rect')
  //   .attr('x', barAreaLeft)
  //   .attr('y', barAreaTop)
  //   .attr('width', barAreaWidth)
  //   .attr('height', barAreaHeight)
  //   .attr('fill', '#ccc');

  const groups = createGroups(svg);
  // renderBarArea(groups);
  // renderLabels(groups);
  renderBars(groups);
  renderBarTicks(groups);
  renderXAxisLabels(groups);
  renderXAxisLine(svg);
  renderNumbers(groups);
  renderYAxisLabels(svg);
  renderRegressionLine(svg);
  // functions only below
  function createSvg(withinElement) {
    // create the svg and set its size
    const svg = select(withinElement)
      .append('svg')
      .attr('class', 'sh-chart-bar-vertical')
      .attr('width', width)
      .attr('height', height);
    svg.append('style').text(css);
    return svg;
  }
  function createGroups(svg) {
    const root = svg.selectAll('g').data(data);
    // each element is a <g> group
    const groups = root
      .enter()
      .append('g')
      .attr('class', 'bar-group')
      .attr('transform', (d, i) => {
        const left = i * (barWidth + barSpacing) + barAreaLeft + barSpacing / 2;
        const top = barAreaTop;
        return `translate(${left}, ${top})`;
      })
      .style('cursor', onClick ? 'pointer' : 'default')
      .on('click', (evt, d) => onClick(d, d.index, evt));
    return groups;
  }
  function renderBars(groups) {
    // bar rectangles
    groups
      .append('rect')
      .attr('class', 'chart-bar')
      .attr('x', 0)
      .attr('y', d => (highest - d.value) * barPxPerValue)
      .attr('width', barWidth)
      .attr('height', d => d.value * barPxPerValue)
      .attr('fill', color)
      .style('transform-origin', `0 ${barAreaHeight}px`)
      // pre-animation styles
      .style('opacity', 0)
      .style('transform', 'scaleY(0.25)')
      // animation setup
      .transition()
      .duration(animationDuration)
      .delay((d, i) => animationOffset * i)
      // post-animation styles
      .style('opacity', 1)
      .style('transform', 'scaleY(1)');
  }
  function renderXAxisLabels(groups) {
    // date labels
    groups
      .append('text')
      .attr('class', 'chart-axis-label chart-x-axis-label')
      .attr('x', barWidth / 2 + 1)
      .attr('y', barAreaHeight + barSpacing + tickHeight + fontSize)
      .attr('text-anchor', 'middle')
      .text(d => d.label);
  }
  function renderXAxisLine(svg) {
    // line above labels
    svg
      .append('rect')
      .attr('class', 'chart-axis-line chart-x-axis-line')
      .attr('x', barAreaLeft - barSpacing)
      .attr('y', barAreaBottom + barSpacing)
      .attr('width', barAreaWidth + barSpacing * 2)
      .attr('height', 1);
  }
  function renderBarTicks(groups) {
    // tick marks for date labels
    groups
      .append('rect')
      .attr('class', 'chart-tick')
      .attr('x', barWidth / 2 + 1)
      .attr('y', barAreaHeight + barSpacing)
      .attr('width', 1)
      .attr('height', 8);
  }
  function renderYAxisLabels(svg) {
    // numbers up left side
    const values = getYAxisValues();
    const bottom = barAreaBottom + fontSize / 2 + 1;
    svg
      .selectAll('.chart-y-axis-label')
      .data(values)
      .enter()
      .append('text')
      .attr('class', 'chart-axis-label chart-y-axis-label')
      .attr('text-anchor', 'end')
      .attr('x', barAreaLeft - barSpacing * 3)
      .attr('y', d => bottom - d.value * barPxPerValue)
      .text(d => d.label);
  }
  function getYAxisValues() {
    // get labels for numbers up left side
    const yScale = scaleLinear().domain([0, highest]).nice();
    const ticks = yScale.ticks(numYAxisLabels + 1);
    const values = ticks.map(value => {
      if (value > highest * 1.02) {
        // too far off chart
        return { label: '', value };
      }
      return { label: numberFormat(value), value };
    });
    return values;
  }
  function renderNumbers(groups) {
    // numeric labels at top of of bar rectangles
    groups
      .append('text')
      .attr('class', 'chart-value')
      .attr('x', barWidth / 2 - 0.5)
      .attr('y', d => (highest - d.value) * barPxPerValue - barNumberPadding)
      .attr('width', barWidth)
      .attr('text-anchor', 'middle')
      .text(d => numberFormat(d.value))
      .attr('fill', '#777')
      // pre-animation styles
      .style('opacity', 0)
      // animation setup
      .transition()
      .duration(animationDuration)
      .delay((d, i) => animationOffset * i)
      // post-animation styles
      .style('opacity', 1);
  }
  function renderRegressionLine(svg) {
    const regData = data.map((d, i) => [i, d.value]);
    const reg = regression().domain([0, values.length]);
    const result = reg(regData);
    svg
      .append('line')
      .attr('class', 'regression-line')
      .attr('x1', barAreaLeft + barSpacing + barWidth / 2)
      .attr('y1', barAreaTop + (barAreaHeight - result[0][1] * barPxPerValue))
      .attr('x2', barAreaLeft + barAreaWidth - barSpacing - barWidth / 2)
      .attr('y2', barAreaTop + (barAreaHeight - result[1][1] * barPxPerValue));
  }
}
