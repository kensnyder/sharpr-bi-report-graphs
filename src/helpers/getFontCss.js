import roboto100 from '../fonts/roboto-100.css.txt';
import roboto400 from '../fonts/roboto-400.css.txt';

console.log('roboto100', roboto100);

const knownFonts = {
  'roboto-100': {
    base64: roboto100,
    import: 'https://fonts.googleapis.com/css?family=Roboto:100'
  },
  'roboto-400': {
    base64: roboto400,
    import: 'https://fonts.googleapis.com/css?family=Roboto:400'
  }
};

// Woff2 happens to be supported by browsers that support FontFace
// Except for Edge 14+ which supports woff2 but not FontFace
// IE and Edge will get the flash of sans text while font loads
const supportsWoff2 = !!window.FontFace;

export function getFontCss(names) {
  const cssLines = names.map(name => {
    const font = knownFonts[name];
    if (!font) {
      throw new Error(`getFontCss(names): Unknown font "${name}"`);
    }
    if (supportsWoff2) {
      return font.base64;
    } else {
      return `@import url(${font.import});`;
    }
  });
  return cssLines.join('\n');
}
