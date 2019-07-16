import { barHorizontal } from './charts/barHorizontal.js';
import { bubbles } from './charts/bubbles.js';
import { barVertical } from './charts/barVertical.js';
import {
  getRandomFiles,
  getRandomCategories,
  getRandomTrend
} from './data/getRandomData.js';
import { clearChart } from './charts/helpers/clearChart.js';
import { saveSvgAsPng } from 'save-svg-as-png';
import './styles.css';

renderIndex('#app');

// functions only beyond this point
function runBarHorizontal() {
  updateSelectedTab(0);
  const data = getRandomFiles();
  const links = [
    { text: 'preview', onClick: item => alert('Preview ' + item.label) },
    { text: 'download', onClick: item => alert('Download ' + item.label) },
    { text: 'view trend', onClick: item => runBarVertical(item.color) }
  ];
  const onClick = item => runBarVertical(item.color);
  barHorizontal({
    width: 1100,
    data,
    links,
    onClick,
    linkColor: '#EE5834',
    withinElement: '#ChartArea',
    animationDuration: 500,
    animationOffset: 40
  });
}

function runBubbles() {
  updateSelectedTab(1);
  const data = getRandomCategories();
  const onClick = item => runBarVertical(item.color);
  bubbles({
    width: 700,
    data,
    onClick,
    withinElement: '#ChartArea',
    animationDuration: 500,
    animationOffset: 40
  });
}

function runBarVertical(color = '#EB2470') {
  updateSelectedTab(2);
  const data = getRandomTrend();
  barVertical({
    width: 1100,
    height: 450,
    color,
    data,
    onClick: (item, i) => alert('Clicked bar ' + (i + 1)),
    withinElement: '#ChartArea',
    animationDuration: 500,
    animationOffset: 40
  });
}

function renderIndex(withinElement) {
  document.querySelector(withinElement).innerHTML = `
<h2>Click to show a chart with random data:</h2>
<div style="float:right">
	<a href id="ToPng">Save Chart</a>
</div>
<div class="tabs">
	<a href data-fn="runBarHorizontal">Horizontal Bar Chart</a> |
	<a href data-fn="runBubbles">Bubble Chart</a> |
	<a href data-fn="runBarVertical">Trend Chart</a>
</div>
<div id="ChartArea"></div>
`;

  document.querySelector('.tabs').addEventListener('click', evt => {
    const fns = {
      runBarHorizontal,
      runBarVertical,
      runBubbles
    };
    if (evt.target.tagName.toUpperCase() === 'A') {
      evt.preventDefault();
      const fn = fns[evt.target.getAttribute('data-fn')];
      fn();
    }
  });
  document.querySelector('#ToPng').addEventListener('click', evt => {
    evt.preventDefault();
    const svg = document.querySelector('#ChartArea svg');
    saveSvgAsPng(svg, `chart.png`);
  });

  // default chart
  document.querySelectorAll('.tabs a')[0].click();
}

function updateSelectedTab(n) {
  const links = [...document.querySelectorAll('.tabs a')];
  links.forEach(link => link.classList.remove('selected'));
  links[n].classList.add('selected');
}
