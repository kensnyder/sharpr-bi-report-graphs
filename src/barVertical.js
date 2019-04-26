import { select } from 'd3-selection';
import 'd3-transition';
import { scaleLinear } from 'd3-scale';
import { numberFormat } from './helpers/numberFormat.js';
import { getFontCss } from './helpers/getFontCss.js';

const css = `
${getFontCss(['roboto-400'])}
text {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.chart-axis-line,
.chart-tick {
  fill: #595959;
}
.bar-group .chart-value {
  display: none;
}
.bar-group:hover .chart-value {
  display: block;
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
  const barNumberPadding = 6;
  const xAxisAreaHeight = barSpacing + fontSize + tickHeight + 5;
  const yLabelFontHeight = 16;
  const numYAxisLabels = 5;
  const values = data.map(d => d.value);
  const highest = Math.max.apply(null, values);
  // const lowest = Math.max.apply(null, values);
  const highestWidth =
    (String(numberFormat(highest)).length * fontSize) / 2 + 7;
  // const scaleAt = ((width - highestWidth) / highest).toFixed(2);
  const barAreaLeft = highestWidth + barSpacing;
  const barAreaTop = yLabelFontHeight + barNumberPadding;
  const barAreaWidth = width - highestWidth - barSpacing * 2;
  const barAreaHeight = height - xAxisAreaHeight - barAreaTop;
  const barAreaBottom = barAreaTop + barAreaHeight;
  const barWidth =
    (barAreaWidth - (barSpacing * data.length - 1)) / data.length;
  const barPxPerValue = barAreaHeight / highest;
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
      .on('click', onClick);
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
  function renderBarTicks(groups) {
    // bar rectangles
    groups
      .append('rect')
      .attr('class', 'chart-tick')
      .attr('x', barWidth / 2 + 1)
      .attr('y', barAreaHeight + barSpacing)
      .attr('width', 1)
      .attr('height', 8);
  }
  function renderXAxisLabels(groups) {
    // bar rectangles
    groups
      .append('text')
      .attr('class', 'chart-axis-label chart-x-axis-label')
      .attr('x', barWidth / 2 + 1)
      .attr('y', barAreaHeight + barSpacing + tickHeight + fontSize)
      .attr('text-anchor', 'middle')
      .text(d => d.label);
  }
  function renderXAxisLine(svg) {
    svg
      .append('rect')
      .attr('class', 'chart-axis-line chart-x-axis-line')
      .attr('x', barAreaLeft - barSpacing)
      .attr('y', barAreaBottom + barSpacing)
      .attr('width', barAreaWidth + barSpacing * 2)
      .attr('height', 1);
  }
  function renderYAxisLabels(svg) {
    const values = getYAxisValues();
    const bottom = barAreaBottom + fontSize / 2 + 1;
    svg
      .selectAll('.chart-y-axis-label')
      .data(values)
      .enter()
      .append('text')
      .attr('class', 'chart-axis-label chart-y-axis-label')
      .attr('text-anchor', 'end')
      .attr('x', barAreaLeft - barSpacing * 2)
      .attr('y', d => bottom - d.value * barPxPerValue)
      .text(d => d.label);
  }
  function getYAxisValues() {
    const yScale = scaleLinear()
      .domain([0, highest])
      .nice();
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
}
