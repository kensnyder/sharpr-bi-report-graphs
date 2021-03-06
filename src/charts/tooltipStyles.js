const css = `
.sh-chart-tip-outer {
  position: relative;
  filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.25));
}
.sh-chart-tip {
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 1;
  padding: 16px 20px;
  /* background: rgba(0, 0, 0, 0.8); */
  color: #fff;
  border-radius: 6px;
}
.sh-chart-stem {
  width: 0;
  height: 0;
  position: absolute;
  bottom: -45px;
  left: 55%;
  border-style: solid;
  border-width: 48px 15px 0 0;
  transform: rotate(17deg);
  transform-origin: 100% 0;
  z-index: 2;
}
.sh-chart-tip-date {
  opacity: 0.66;
}
`;

if (!document.querySelector('#sharpr-bi-report-graphs')) {
  const style = document.createElement('style');
  style.id = 'sh-bi-report-graphs';
  style.textContent = css;
  document.head.appendChild(style);
}
