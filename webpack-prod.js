const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: {
    app: [path.join(__dirname, '/src/app/main')],
    vendor: [
      "firebase", "google-maps", "lodash", "material-ui",
      "react", "react-dom", "react-helmet", "react-redux", "react-router",
      "react-tap-event-plugin", "redux", "socket.io-client", "webrtc-adapter"
    ],
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: buildPath, // Path of output file
    filename: '[name].js', // Name of output file
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      // {
        // When you encounter images, compress them with image-webpack
        // (wrapper around imagemin) and then inline them as data64 URLs
        // test: /.*\.(gif|png|jpe?g|svg)$/i,
        // loaders: ['url', 'image-webpack'],
      // },
      {
        // Minify PNG, JPEG, GIF and SVG images with imagemin
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      // {
        // When you encounter SCSS files, parse them with node-sass,
        // then pass autoprefixer on them, then return the results as a string of CSS
        // test: /\.scss/,
        // loaders: ['css', 'autoprefixer', 'sass'],
      // },
      {
        // sass-loader
        test: /\.scss$/,  //All .scss files
        loaders: ['style', 'css', 'sass'], //react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      children: true,
      async: true,
    }),
  ],
};