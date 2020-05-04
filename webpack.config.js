const path = require('path');

module.exports = {
  entry: './libs/index.js',
    watch: true,
    output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  }
};