/*
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
          exclude: /node_modules\/@webcomponents/
      }
    ]
  }
};

*/

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}

