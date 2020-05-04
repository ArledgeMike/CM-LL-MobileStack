const path = require('path');

module.exports = {
    mode: 'development',
    entry: './libs/index.js',
    output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  }
};