import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-porter';

export default {
  input: 'entry.js',
  output: {
    file: 'dist/index.js',
    format: 'amd',
  },
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    css({
      raw: false,
      minified: 'dist/index.css',
    }),
  ],
  onwarn: function (warning, warn) {
    // Rollup doesn't like d3's circular dependencies,
    // but they are acceptable by ES standards
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    warn(warning);
  },
};
