# sharpr-bi-report-graphs

Functions to render graphs with d3

## barHorizontal()

Example usage:

```js
import { barHorizontal } from 'sharpr-bi-report-graphs/src/charts/barHorizontal.js';

barHorizontal({
  width,                   // The width of the chart
  data,                    // An array of objects with props value, label
  links,                   // An array of objects with props text, onClick(dataPoint)
  onClick,                 // A function to run when you click on a bar (arg1=dataPoint)
  withinElement,           // An Element or selector to an element
  linkColor = '#EE5834',   // The color to use for link text
  minSpacing = 45,         // Minimum vertical spacing between bars
  maxSpacing = 55,         // Maximum vertical spacing between bars
  maxHeight = 550,         // Max graph height (overridden by minSpacing)
  animationDuration = 500, // MS over which to animate bar growth
  animationOffset = 40     // MS delay between each bar animation
});
```

## barVertical()

Example usage:

```js
import { barVertical } from 'sharpr-bi-report-graphs/src/charts/barVertical.js';

barVertical({
  data,                    // An array of objects with props value, label
  color,                   // Color of each bar
  height,                  // Graph height
  width,                   // Graph width
  onClick,                 // A function to run when you click on a bar (arg1=dataPoint)
  withinElement,           // An Element or selector to an element
  animationDuration = 500, // MS over which to animate bar growth
  animationOffset = 40     // MS delay between each bar animation
});
```

## bubbles()

Example usage:

```js
import { bubbles } from 'sharpr-bi-report-graphs/src/charts/bubbles.js';

bubbles({
  data,                    // An array of objects with props value, label
  width,                   // The width and height of the chart
  onClick,                 // A function to run when you click on a bar (arg1=dataPoint)
  withinElement,           // An Element or selector to an element
  animationDuration = 500, // MS over which to animate bar growth
  animationOffset = 40     // MS delay between each bar animation
});
```
