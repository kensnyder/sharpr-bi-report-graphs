import * as d3 from 'd3';
import ToolTip from 'd3-tip';
import * as d3PlusText from 'd3plus-text';
import { getColor } from './helpers/getColor.js';
import { numberFormat } from './helpers/numberFormat.js';

console.log({ d3PlusText });

export function bubbles({ data, width, onClick, withinElement }) {
	const values = data.children.map(d => d.value);
	const min = Math.min.apply(null, values);
	const max = Math.max.apply(null, values);
	const total = data.children.length;

	var bubble = d3
		.pack()
		.size([width, width])
		.padding(0);

	var tip = new ToolTip();
	tip.attr('class', 'sh-chart-bubbles-tip-outer')
		.offset([-38, 0])
		.html((d, i) => {
			const item = data.children[i];
			const color = getColor(i, values.length);
			return `
        <div class="sh-chart-bubbles-tip" style="background-color: ${color}">
          ${item.label} (${item.value})
        </div>
        <div class="sh-chart-bubbles-stem" style="border-color: ${color} transparent transparent transparent"></div>
      `;
		});

	var svg = d3
		.select(withinElement)
		.append('svg')
		.attr('width', width)
		.attr('height', width)
		.attr('class', 'sh-chart-bubbles');

	var root = d3.hierarchy(data).sum(function(d) {
		return d.value;
	});

	bubble(root);

	var node = svg
		.selectAll('.node')
		.data(root.children)
		.enter()
		.append('g')
		.attr('class', 'node')
		.attr('transform', function(d) {
			return 'translate(' + d.x + ' ' + d.y + ')';
		})
		.append('g')
		.attr('class', 'graph');

	node.append('circle')
		.attr('r', function(d) {
			return d.r;
		})
		.style('fill', getItemColor)
		// handling click
		.on('click', (node, i) => onClick(node.data, i))
		// tooltips
		.on('mouseover', tip.show)
		.on('mouseout', tip.hide)
		// pre-animation styles
		.style('opacity', 0)
		.style('transform', 'scale(0.80)')
		// animation setup
		.transition()
		.duration(600)
		.delay((d, i) => 40 * i)
		// post-animation styles
		.style('opacity', 1)
		.style('transform', 'scale(1)');

	node.call(tip);

	node.append('text')
		.attr('dy', '0.2em')
		.style('text-anchor', 'middle')
		.style('font-family', 'Roboto')
		.style('font-size', getFontSizeForItem)
		.text(getLabel)
		.style('fill', '#ffffff')
		.style('pointer-events', 'none')
		// pre-animation styles
		.style('opacity', 0)
		.style('transform', 'rotate(-8deg)')
		// animation setup
		.transition()
		.duration(600)
		.delay((d, i) => 40 * i)
		// post-animation styles
		.style('opacity', 1)
		.style('transform', 'rotate(0)');

	node.append('text')
		.attr('dy', '1.3em')
		.style('text-anchor', 'middle')
		.style('font-family', 'Roboto')
		.style('font-weight', '100')
		.style('font-size', getFontSizeForItem)
		.text(getValueText)
		.style('fill', '#ffffff')
		.style('pointer-events', 'none')
		// pre-animation styles
		.style('opacity', 0)
		.style('transform', 'rotate(-8deg)')
		// animation setup
		.transition()
		.duration(600)
		.delay((d, i) => 40 * i)
		// post-animation styles
		.style('opacity', 1)
		.style('transform', 'rotate(0)');

	function getItemColor(item, i) {
		return getColor(i, data.children.length);
	}
	function getLabel(item) {
		if (item.data.value < max / 3.3) {
			return '';
		}
		return truncate(item.data.label);
	}
	function getValueText(item) {
		if (item.data.value < max / 3.3) {
			return '';
		}
		return numberFormat(item.data.value);
	}
	function truncate(label) {
		const max = 11;
		if (label.length > max) {
			label = label.slice(0, max) + '...';
		}
		return label;
	}
	function getFontSizeForItem(item) {
		return getFontSize(item.data.value, min, max, total);
	}
	function getFontSize(value, min, max, total) {
		const minPx = 6;
		const maxPx = 25;
		const pxRange = maxPx - minPx;
		const dataRange = max - min;
		const ratio = pxRange / dataRange;
		const size = Math.min(maxPx, Math.round(value * ratio) + minPx);
		return `${size}px`;
	}
}
