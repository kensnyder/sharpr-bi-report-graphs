import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    name: 'shBiReportGraphs',
    format: 'umd'
  },
  plugins: [commonjs(), resolve()]
};
