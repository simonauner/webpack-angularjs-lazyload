var path = require('path');

module.exports = {
    debug: true,

    entry: './app/main.js',

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },

    module: {
        loaders: [
      {
          test: /\.html$/,
          loader: 'html'
      },
      {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      },
      {
          test: /\.png$/,
          loader: 'url-loader?limit=100000&mimetype=image/png'
      },
      {
          test: /\.jpg$/,
          loader: 'file-loader'
      }
    ]
    },

    resolve: {
        modulesDirectories: [
          'node_modules',
          'vendor'
        ]
    }
};
