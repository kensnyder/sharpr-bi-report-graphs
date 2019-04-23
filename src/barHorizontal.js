import * as d3 from 'd3';
import { getColor } from './helpers/getColor.js';
import { numberFormat } from './helpers/numberFormat.js';

const css = `
@import url(https://fonts.googleapis.com/css?family=Roboto:400);
.chart-label {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.chart-value {
  font-family: Roboto, sans-serif;
  font-size: 13px;
}
.links {
  display: none;
  color: #999;
}
.group:hover .links {
  display: block;
}
`;

//
// function to draw svg
//
export function barHorizontal({
	width,
	data,
	links,
	onClick,
	linkColor = '#EE5834',
	withinElement,
}) {
	// setup variables
	const animationDuration = 500;
	const spacing = between(45, 55)(550 / data.length);
	const height = data.length * spacing;
	const highest = data[0].value;
	const highestWidth = String(numberFormat(highest)).length * 15;
	const scaleAt = ((width - highestWidth) / highest).toFixed(2);
	const animationOffset = 40;
	// run it
	const svg = createSvg(withinElement);
	const groups = createGroups(svg);
	renderBarArea(groups);
	renderLabels(groups);
	renderBars(groups);
	renderNumbers(groups);
	// functions only below
	function createSvg(withinElement) {
		// create the svg and set its size
		const svg = d3
			.select(withinElement)
			.append('svg')
			.attr('class', 'sh-chart-bar-horizontal')
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
			.attr('class', 'group')
			.attr('transform', (d, i) => `translate(0, ${i * spacing})`);
		return groups;
	}
	function renderBarArea(groups) {
		// hoverable area
		const rect = groups.append('rect');
		rect.attr('class', 'hover-area')
			.attr('x', 0)
			.attr('y', 0)
			.attr('width', '100%')
			.attr('height', spacing - 8)
			.attr('fill', 'transparent');
		// .attr('fill', 'rgba(0,0,0,0.1)')
		if (onClick) {
			rect.on('click', onClick);
		}
	}
	function renderBars(groups) {
		// bar rectangles
		groups
			.append('rect')
			.attr('class', 'chart-bar')
			.attr('x', 0)
			.attr('y', 24)
			.attr('width', d => d.value * scaleAt)
			.attr('height', 6)
			.attr('fill', (d, i) => getColor(i, data.length))
			// pre-animation styles
			.style('opacity', 0)
			.style('transform', 'scaleX(0.25)')
			// animation setup
			.transition()
			.duration(animationDuration)
			.delay((d, i) => animationOffset * i)
			// post-animation styles
			.style('opacity', 1)
			.style('transform', 'scaleX(1)');
	}
	function renderLabels(groups) {
		// labels above bars
		const label = groups
			.append('text')
			.attr('class', 'chart-label')
			.attr('x', 0)
			.attr('y', 16);
		// bar label
		label.append('tspan').text(d => d.label);
		if (links.length) {
			renderLinks(label);
		}
	}
	function renderNumbers(groups) {
		// numeric labels to right of bar rectangles
		groups
			.append('text')
			.attr('class', 'chart-value')
			.attr('x', d => d.value * scaleAt + 6)
			.attr('y', 32)
			.text(d => numberFormat(d.value))
			.attr('fill', (d, i) => getColor(i, data.length))
			// pre-animation styles
			.style('opacity', 0)
			// animation setup
			.transition()
			.duration(animationDuration)
			.delay((d, i) => animationOffset * i)
			// post-animation styles
			.style('opacity', 1);
	}
	function renderLinks(label) {
		// area for preview | download | view trends links
		const linkArea = label
			.append('tspan')
			.attr('class', 'links')
			.attr('dx', '12');
		links.forEach((link, i) => {
			linkArea
				.append('tspan')
				.text(link.text)
				.attr('fill', linkColor)
				.style('cursor', 'pointer')
				.on('click', link.onClick);
			if (i < links.length - 1) {
				linkArea.append('tspan').text(' | ');
			}
		});
	}
}

//
// functions only below
//

// get a function constrain a number between min and max
function between(min, max) {
	return num => Math.round(Math.max(min, Math.min(max, num)));
}
