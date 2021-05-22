import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from '@guanghechen/rollup-plugin-copy';

const toCopy = {
  targets: [{ src: 'dist/index.js', dest: 'docs' }]
};

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    name: 'shBiReportGraphs',
    compact: true,
    format: 'umd'
  },
  plugins: [commonjs(), resolve(), terser(), copy(toCopy)]
};
