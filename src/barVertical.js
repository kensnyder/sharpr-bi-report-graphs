import * as d3 from 'd3';
import { numberFormat } from './helpers/numberFormat.js';

const css = `
@import url(https://fonts.googleapis.com/css?family=Roboto:400);
text {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.zbar-group text {
  display: none;
}
.zbar-group:hover text {
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
}) {
	const animationDuration = 500;
	const animationOffset = 40;
	const values = data.map(d => d.value);
	const highest = Math.max.apply(null, values);
	const lowest = Math.max.apply(null, values);
	const highestWidth = String(numberFormat(highest)).length * 15;
	// const scaleAt = ((width - highestWidth) / highest).toFixed(2);
	const barSpacing = 4;
	const barNumberPadding = 6;
	const xAxisAreaHeight = 35;
	const yLabelFontHeight = 16;
	const barAreaLeft = highestWidth + barSpacing;
	const barAreaTop = yLabelFontHeight + barNumberPadding;
	const barAreaWidth = width - highestWidth - barSpacing * 2;
	const barAreaHeight = height - xAxisAreaHeight - barAreaTop;
	const barWidth =
		(barAreaWidth - (barSpacing * data.length - 1)) / data.length;
	const barPxPerValue = barAreaHeight / highest;
	// run it
	const svg = createSvg(withinElement);
	svg.append('rect')
		.attr('x', barAreaLeft)
		.attr('y', barAreaTop)
		.attr('width', barAreaWidth)
		.attr('height', barAreaHeight)
		.attr('fill', '#ccc');

	const groups = createGroups(svg);
	// renderBarArea(groups);
	// renderLabels(groups);
	renderBars(groups);
	renderBarTicks(groups);
	renderXAxisLine(svg);
	renderNumbers(groups);
	// functions only below
	function createSvg(withinElement) {
		// create the svg and set its size
		const svg = d3
			.select(withinElement)
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
				const left =
					i * (barWidth + barSpacing) + barAreaLeft + barSpacing / 2;
				const top = barAreaTop;
				return `translate(${left}, ${top})`;
			});
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
			// .style('transform-origin', `0 bottom`)
			// pre-animation styles
			.style('opacity', 0)
			.style('transform', 'scaleY(0.25) translateY(-50px)')
			// animation setup
			.transition()
			.duration(animationDuration)
			.delay((d, i) => animationOffset * i)
			// post-animation styles
			.style('opacity', 1)
			.style('transform', 'scaleY(1) translateY(0)');
	}
	function renderBarTicks(groups) {
		// bar rectangles
		groups
			.append('rect')
			.attr('class', 'chart-tick')
			.attr('x', barWidth / 2 + 1)
			.attr('y', barAreaHeight + barSpacing)
			.attr('width', 1)
			.attr('height', 8)
			.attr('fill', '#777');
	}
	function renderXAxisLine(svg) {
		svg.append('rect')
			.attr('class', 'chart-x-axis-line')
			.attr('x', barAreaLeft - barSpacing)
			.attr('y', barAreaTop + barAreaHeight + barSpacing)
			.attr('width', barAreaWidth + barSpacing * 2)
			.attr('height', 1)
			.attr('fill', '#777');
	}
	// function renderLabels(groups) {
	// 	// labels above bars
	// 	const label = groups
	// 		.append('text')
	// 		.attr('class', 'chart-label')
	// 		.attr('x', 0)
	// 		.attr('y', 16);
	// }
	function renderNumbers(groups) {
		// numeric labels at top of of bar rectangles
		groups
			.append('text')
			.attr('class', 'chart-value')
			.attr('x', barWidth / 2)
			.attr(
				'y',
				d => (highest - d.value) * barPxPerValue - barNumberPadding,
			)
			.attr('width', barWidth)
			.attr('text-anchor', 'middle')
			.text(d => numberFormat(d.value))
			.attr('fill', 'wite')
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
