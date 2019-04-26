import { barHorizontal } from './barHorizontal.js';
import { bubbles } from './bubbles.js';
import { barVertical } from './barVertical.js';
import {
  getRandomFiles,
  getRandomCategories,
  getRandomTrend
} from './data/getRandomData.js';
import { saveSvgAsPng } from 'save-svg-as-png';
import './styles.css';

document.querySelector('#app').innerHTML = `
<h2>Click to show a chart with random data:</h2>
<div style="float:right">
	<a href id="ToPng">Save Chart</a>
</div>
<div class="tabs">
	<a href data-fn="runBarHorizontal">Horizontal Bar Chart</a> | 
	<a href data-fn="runBarVertical">Vertical Bar Chart</a> | 
	<a href data-fn="runBubbles">Bubble Chart</a>
</div>
<div id="ChartArea"></div>
`;

document.querySelector('.tabs').addEventListener('click', evt => {
  const links = [...document.querySelectorAll('.tabs a')];
  const fns = {
    runBarHorizontal,
    runBarVertical,
    runBubbles
  };
  if (evt.target.tagName.toUpperCase() === 'A') {
    evt.preventDefault();
    links.forEach(link => link.classList.remove('selected'));
    evt.target.classList.add('selected');
    const fn = fns[evt.target.getAttribute('data-fn')];
    document.querySelector('#ChartArea').innerHTML = '';
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

// functions only beyond this point
function runBarHorizontal() {
  const data = getRandomFiles();
  const links = [
    { text: 'preview', onClick: item => alert('Preview ' + item.label) },
    { text: 'download', onClick: item => alert('Download ' + item.label) },
    { text: 'view trend', onClick: item => alert('Trend ' + item.label) }
  ];
  const onClick = item => alert('Click ' + item.label);
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

function runBarVertical() {
  const data = getRandomTrend();
  barVertical({
    width: 1100,
    height: 450,
    color: '#EB2470',
    data,
    onClick: (...args) => console.log('onclick', args),
    withinElement: '#ChartArea',
    animationDuration: 500,
    animationOffset: 40
  });
}

function runBubbles() {
  const data = getRandomCategories();
  const onClick = item => alert('Click ' + item.label);
  bubbles({
    width: 700,
    data,
    onClick,
    withinElement: '#ChartArea',
    animationDuration: 500,
    animationOffset: 40
  });
}
