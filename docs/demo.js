const { barHorizontal, barVertical, bubbles, stream, clearChart } =
  window.shBiReportGraphs;

renderIndex('#app');

// functions only beyond this point
function setTitle(text) {
  document.querySelector('#ChartTitle').textContent = text;
}

function runBarHorizontal() {
  updateSelectedTab(0);
  setTitle('Download counts');
  const data = getRandomFiles();
  const links = [
    { text: 'preview', onClick: item => alert('Preview ' + item.label) },
    { text: 'download', onClick: item => alert('Download ' + item.label) },
    { text: 'view trend', onClick: item => runBarVertical(item.color) }
  ];
  const onClick = item =>
    runBarVertical(item.color, `Trend of downloads of "${item.label}"`);
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
  setTitle('Top tags');
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

function runBarVertical(color = '#EB2470', trendOf = '') {
  updateSelectedTab(2);
  setTitle(trendOf || 'Trend of all downloads');
  const data = getRandomTrend();
  barVertical({
    width: 1100,
    height: 450,
    color,
    data,
    onClick: item => alert(`Clicked "${item.label}" (${item.value})`),
    withinElement: '#ChartArea',
    animationDuration: 500,
    animationOffset: 40
  });
}

function runStream() {
  updateSelectedTab(3);
  setTitle('Top tags over time');
  const series = getRandomSeries();
  stream({
    width: 1100,
    height: 450,
    series,
    withinElement: '#ChartArea',
    animationDuration: 500,
    animationOffset: 40
  });
}

function renderIndex(withinElement) {
  document.querySelector(withinElement).innerHTML = `
<header>
  <div class="content">
    <div style="float:right">
      <a href id="ToPng">Save Chart</a>
    </div>
    <div class="tabs">
      <a href data-fn="runBarHorizontal">Horizontal Bar Chart</a>
      <a href data-fn="runBubbles">Bubble Chart</a>
      <a href data-fn="runBarVertical">Trend Chart</a>
      <a href data-fn="runStream">Stream Chart</a>
    </div>
  </div>
</header>
<main>
  <div class="content">
    <h1 id="ChartTitle"></h1>
    <div id="ChartArea"></div>
  </div>
</main>
`;

  document.querySelector('.tabs').addEventListener('click', evt => {
    const fns = {
      runBarHorizontal,
      runBarVertical,
      runBubbles,
      runStream
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
