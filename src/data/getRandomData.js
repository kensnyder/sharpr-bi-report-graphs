import moment from 'moment';

export function getRandomFiles() {
  let n = rand(3, 25);
  const min = 0;
  const magnitude = rand(2, 6);
  const max = rand(Math.pow(10, magnitude - 1), Math.pow(10, magnitude));
  /* prettier-ignore */
  const buzzwords = ['Annual', 'Consumer', 'Digital', 'Brand', 'Marketing', 'Research', 'Report', 'Competitive', 'Analysis', 'Quarterly', 'Monthly', 'Summary', 'Product'];
  const extensions = ['.pdf', '.pptx', '.docx', '.xlsx', '.mov'];
  const data = [];
  while (n--) {
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
  let n = rand(3, 25);
  const min = 0;
  const magnitude = rand(2, 5);
  const max = rand(Math.pow(10, magnitude - 1), Math.pow(10, magnitude));
  const data = [];
  while (n--) {
    data.push({ label: pick(labels), value: rand(min, max) });
  }
  data.sort((a, b) => b.value - a.value);
  return { children: data };
}

export function getRandomTrend() {
  let n = rand(3, 35);
  const min = 0;
  const magnitude = rand(2, 6);
  const max = rand(Math.pow(10, magnitude - 1), Math.pow(10, magnitude));
  const data = [];
  const startDate = Date.parse('Feb 20, 2019');

  while (n--) {
    let date = new Date(startDate - n * 1000 * 60 * 60 * 24);
    data.push({
      label: moment(date).format('MMM D'),
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

export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function pick(array) {
  return array[rand(0, array.length - 1)];
}
