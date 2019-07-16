export function clearChart(element) {
  // remove svg
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  element.innerHTML = '';
  // remove any tooltips
  [...document.querySelectorAll('.sh-chart-bubbles-tip-outer')].forEach(tip => {
    tip.parentNode.removeChild(tip);
  });
}
