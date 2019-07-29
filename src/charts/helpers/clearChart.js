/**
 * Clear out the chart area
 * @param {Element|String} element A DOM Element or selector to a DOM Element
 */
export function clearChart(element) {
  // remove svg
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  element.innerHTML = '';
  // remove any tooltips
  [...document.querySelectorAll('.sh-chart-tip-outer')].forEach(tip => {
    tip.parentNode.removeChild(tip);
  });
}
