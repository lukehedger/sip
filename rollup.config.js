import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');

export default {
  entry: './lib/index.js',
  plugins: [buble()],
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: pkg.name,
      sourceMap: true,
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true,
    },
  ],
};
