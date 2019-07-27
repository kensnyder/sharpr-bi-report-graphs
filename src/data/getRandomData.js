export function getRandomFiles() {
  const n = rand(3, 25);
  const min = 1;
  const magnitude = rand(2, 6);
  const max = rand(Math.pow(10, magnitude - 1), Math.pow(10, magnitude));
  /* prettier-ignore */
  const buzzwords = ['Annual', 'Consumer', 'Digital', 'Brand', 'Marketing', 'Research', 'Report', 'Competitive', 'Analysis', 'Quarterly', 'Monthly', 'Summary', 'Product'];
  const extensions = ['.pdf', '.pptx', '.docx', '.xlsx', '.mp4'];
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      label:
        pick(buzzwords) +
        ' ' +
        pick(buzzwords) +
        ' ' +
        pick(buzzwords) +
        pick(extensions),
      value: rand(min, max)
    });
  }
  data.sort((a, b) => b.value - a.value);
  return data;
}

export function getRandomCategories() {
  /* prettier-ignore */
  const labels = [
    'Adventure','Brand','Marketing','Consumer','Home & Garden',
    'Research','Mobile','Technology','Entertainment','Digital',
    'Consumer Packaging','Social Media','Finance','Science','Parenting',
    'Usability','Engineering','Fun','Sports','Reading',
    'Education','Productivity','Games','Pets','Food',
  ];
  labels.sort(Math.random);
  let n = rand(3, 25);
  const min = 1;
  const magnitude = rand(2, 5);
  const max = rand(Math.pow(10, magnitude - 1), Math.pow(10, magnitude));
  const data = [];
  while (n--) {
    data.push({ label: labels[n], value: rand(min, max) });
  }
  data.sort((a, b) => b.value - a.value);
  return data;
}

export function getRandomTrend() {
  let n = rand(3, 35);
  const min = 0;
  const magnitude = rand(2, 6);
  const max = rand(Math.pow(10, magnitude - 1), Math.pow(10, magnitude));
  const data = [];
  const startDate = Date.parse('Feb 20, 2019');

  while (n--) {
    const date = new Date(startDate - n * 1000 * 60 * 60 * 24);
    data.push({
      label: formatDate(date),
      value: rand(min, max)
    });
  }

  if (data.length > 19) {
    data.forEach((d, i) => {
      if (i % 2) {
        d.label = '';
      }
    });
  }

  return data;
}

export function getRandomSeries() {
  /* prettier-ignore */
  const labels = [
    'Adventure','Brand','Marketing','Consumer','Home & Garden',
    'Research','Mobile','Technology','Entertainment','Digital',
    'Consumer Packaging','Social Media','Finance','Science','Parenting',
    'Usability','Engineering','Fun','Sports','Reading',
    'Education','Productivity','Games','Pets','Food',
  ];
  labels.sort(Math.random);
  const min = 0;
  const magnitude = rand(2, 6);
  const max = rand(Math.pow(10, magnitude - 1), Math.pow(10, magnitude));
  let s = rand(5, 15);
  const n = rand(3, 35);
  const startDate = Date.parse('Mar 20, 2019');
  const series = {
    dates: [],
    items: []
  };
  while (s--) {
    let i = n;
    const values = [];
    while (i--) {
      values.push(rand(min, max));
      if (series.items.length === 0) {
        const date = new Date(startDate - i * 1000 * 60 * 60 * 24);
        series.dates.push(formatDate(date));
      }
    }
    series.items.push({ label: labels[s], values });
  }
  return series;
}

export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function pick(array) {
  return array[rand(0, array.length - 1)];
}

export function formatDate(date) {
  const months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
}
