const path = require('path');

module.exports = {
  entry: path.join(__dirname, './js/client/index.js'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './dist'),
  },
  devtool: 'source-map',
};
