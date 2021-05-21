import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    name: 'shBiReportGraphs',
    compact: true,
    format: 'umd'
  },
  plugins: [commonjs(), resolve(), terser()]
};
