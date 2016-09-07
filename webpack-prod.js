const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {

  entry: {
    app: [path.join(__dirname, '/src/app')],
    vendor: [
      "firebase", "google-maps", "material-ui", 
      "react", "react-dom", "react-helmet", "react-redux", "react-router",
      "react-tap-event-plugin", "redux", "socket.io-client", "webrtc-adapter"
    ],
  },

  // Render source-map file for final build
  // devtool: 'source-map',
  devtool: 'cheap-module-source-map',

  // output config
  output: {
    path: buildPath, // Path of output file
    filename: '[name].js', // Name of output file
    publicPath: '/',
  },



  plugins: [

    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),


    /*
    Assign the module and chunk ids by occurrence count. 
    Ids that are used often get lower (shorter) ids. 
    This make ids predictable, reduces total file size and is recommended.

    new webpack.optimize.OccurrenceOrderPlugin(preferEntry)

    preferEntry (boolean) give entry chunks higher priority. 
    This make entry chunks smaller but increases the overall size. (recommended)
    */
    new webpack.optimize.OccurenceOrderPlugin(true),


    /*    
    Search for equal or similar files and deduplicate them in the output. 
    This comes with some overhead for the entry chunk, but can reduce file size effectively.

    This doesn’t change the module semantics at all. 
    Don’t expect to solve problems with multiple module instance. 
    They won’t be one instance after deduplication.

    Note: Don’t use it in watch mode. Only for production builds.
    */
    new webpack.optimize.DedupePlugin(),


    // Minimize all JavaScript output of chunks. 
    // Loaders are switched into minimizing mode. 
    new webpack.optimize.UglifyJsPlugin({

      // compress (boolean|object): 
      // options for UglifyJS compression, which is enabled by default - 
      // see the Compressor source for options and defaults.
      // Use 'compress: false' to explicitly disable compression.
      compress: {
        // suppresses warnings, usually from module minification
        warnings: false,
      },

      // output: an object providing options for UglifyJS’ OutputStream - 
      // see the OutputStream source for options and defaults.
      output: {
        comments: false,
      },

      // mangle (boolean|object): options for UglifyJS variable name mangling, which is enabled by default - see _default_mangler_options in UglifyJS’ source for options and defaults.
      // Use 'mangle: false' to explicitly disable mangling.
      // mangle.props (boolean|object): passing true or an object enables and provides options for UglifyJS property mangling - see UglifyJS documentation for mangleProperties for options.
      // Note: the UglifyJS docs warn that you will probably break your source if you use property mangling, so if you aren’t sure why you’d need this feature, you most likely shouldn’t be using it!
    }),


    // NoErrorsPlugin — это стандартный плагин Webpack, 
    // который не дает перезаписать скрипты при наличии в них ошибок. 
    // Это уберегает от уничтожения старой сборки как следствие нерабочего кода 
    // в продакшене. Подключается стандартно в массив с плагинами:
    new webpack.NoErrorsPlugin(),


    // Transfer files to the build directory
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),


    // http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
    new webpack.optimize.CommonsChunkPlugin({
      // options.name or options.names (string|string[]): 
      // The chunk name of the commons chunk. 
      // An existing chunk can be selected by passing a name of an existing chunk. 
      // If an array of strings is passed this is equal to invoking the plugin multiple times for each chunk name. 
      // If omitted and options.async or options.children is set all chunks are used, otherwise options.filename is used as chunk name.
      name: 'vendor',

      // options.filename (string): 
      // The filename template for the commons chunk. 
      // Can contain the same placeholder as output.filename. 
      // If omitted the original filename is not modified (usually output.filename or output.chunkFilename).
      filename: 'vendor.bundle.js',

      // options.children (boolean): 
      // If true all children of the commons chunk are selected
      children: true,

      // options.async (boolean|string): 
      // If true a new async commons chunk is created as child of options.name and sibling of options.chunks. 
      // It is loaded in parallel with options.chunks. 
      // It is possible to change the name of the output file by providing the desired string instead of true.
      async: true,

      // options.minChunks (number|Infinity|function(module, count) -> boolean): 
      // The minimum number of chunks which need to contain a module before it’s moved into the commons chunk. 
      // The number must be greater than or equal 2 and lower than or equal to the number of chunks. 
      // Passing Infinity just creates the commons chunk, but moves no modules into it. 
      // By providing a function you can add custom logic. (Defaults to the number of chunks)

      // options.chunks (string[]): 
      // Select the source chunks by chunk names. 
      // The chunk must be a child of the commons chunk. 
      // If omitted all entry chunks are selected.

      // options.minSize (number): 
      // Minimum size of all common module before a commons chunk is created.
    }),

  ],



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



  watchOptions: {
    aggregateTimeout: 100,
    poll: 1000
  },
};

module.exports = config;
