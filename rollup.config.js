import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
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
    babel({
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            targets: {
              browsers: 'last 2 versions, not < 0.25%, not ie 10'
            }
          }
        ],
      ],
    }),
    terser(),
    css({
      raw: false,
      minified: 'dist/index.css',
    }),
  ],
  onwarn: function (warning, warn) {
    // Rollup warns about d3's circular dependencies,
    // but they are acceptable by ES standards
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    warn(warning);
  },
};
