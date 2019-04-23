import moment from 'moment';

export function getRandomFiles() {
  const data = [
    { label: 'Super deluxe powerpoint.ppt', value: rand(1, 100) },
    { label: 'Master-brand-awareness-report.pdf', value: rand(1, 100) },
    { label: 'Annual report 2018.pdf', value: rand(1, 100) },
    { label: 'Trends-4th-qtr-2018.pptx', value: rand(1, 100) },
    { label: 'Consumer-research-128499-19.docx', value: rand(1, 100) },
    { label: 'Brand guidelines - 2-1-15.pdf', value: rand(1, 90) },
    { label: 'Digital trends 2 - May 2019.pdf', value: rand(1, 90) },
    { label: 'Consumer trends 2018.pptx', value: rand(1, 90) },
    { label: '2-098-2345-trends-report.docx', value: rand(1, 80) },
    { label: 'competitive analysis-19.pptx', value: rand(1, 80) },
    { label: 'Revenue report 1st qtr 2019.xlsx', value: rand(1, 80) },
    { label: 'My family photos.ppt', value: rand(1, 100) },
    { label: 'Super Important Research.pdf', value: rand(1, 100) },
    { label: 'Summary of Analysis.pdf', value: rand(1, 100) },
    { label: 'My favorite files.pptx', value: rand(1, 100) },
    { label: 'Peter picked a peck.docx', value: rand(1, 100) },
    { label: 'Lorem Ipsum.pdf', value: rand(1, 90) },
    { label: 'Pack my box with five.pdf', value: rand(1, 90) },
    { label: 'She sells sea shells.pptx', value: rand(1, 90) },
    { label: 'The quick brown fox.docx', value: rand(1, 80) },
    { label: 'You think you know but you dont.pptx', value: rand(1, 80) },
    { label: 'It dont seem like but it be.docx', value: rand(1, 80) }
  ].slice(0, rand(5, 25));
  data.sort((a, b) => b.value - a.value);
  data.forEach(item => (item.value *= 1000));
  return data;
}

export function getRandomCategories() {
  const data = {
    children: [
      { label: 'Adventure', value: rand(1, 60) },
      { label: 'Brand', value: rand(1, 60) },
      { label: 'Marketing', value: rand(1, 60) },
      { label: 'Consumer', value: rand(1, 50) },
      { label: 'Home & Garden', value: rand(1, 50) },
      { label: 'Research', value: rand(1, 50) },
      { label: 'Mobile', value: rand(1, 50) },
      { label: 'Technology', value: rand(1, 50) },
      { label: 'Entertainment', value: rand(1, 50) },
      { label: 'Digital', value: rand(1, 50) },
      { label: 'Consumer Packaging', value: rand(1, 50) },
      { label: 'Social Media', value: rand(1, 50) },
      { label: 'Finance', value: rand(1, 50) },
      { label: 'Science', value: rand(1, 50) },
      { label: 'Parenting', value: rand(1, 50) },
      { label: 'Usability', value: rand(1, 50) },
      { label: 'Engineering', value: rand(1, 50) },
      { label: 'Fun', value: rand(1, 50) },
      { label: 'Sports', value: rand(1, 40) },
      { label: 'Reading', value: rand(1, 40) },
      { label: 'Education', value: rand(1, 40) },
      { label: 'Productivity', value: rand(1, 40) },
      { label: 'Games', value: rand(1, 30) },
      { label: 'Pets', value: rand(1, 30) },
      { label: 'Food', value: rand(1, 30) }
    ].slice(0, rand(8, 25))
  };
  data.children.sort((a, b) => b.value - a.value);
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
  const diff = max - min;
  return Math.round(Math.random() * diff + min);
}
