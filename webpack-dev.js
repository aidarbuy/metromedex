const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

// this regex should be modified to match your setup.
// in this app, we know route components are any files
// matching routes/*.js or routes/SOMETHING/*.js
// routes/components/*.js will be ignored
// var routeComponentRegex = /routes\/([^\/]+\/?[^\/]+).js/;

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack/hot/only-dev-server',
		path.join(__dirname, '/src/app/main'),
	],
	output: {
		path: buildPath, // Path of output file
		filename: 'app.js',
		publicPath: '/',
	},
	devtool: 'eval',

	devServer: {
		contentBase: 'src/www', // Relative directory for base of server
		devtool: 'eval',
		hot: true, // Live-reload
		inline: true,
		port: 3000, // Port Number
		host: 'localhost', // Change to '0.0.0.0' for external facing server
		historyApiFallback: true,
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel-loader'],
				exclude: [nodeModulesPath],
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass'],
				exclude: [nodeModulesPath],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new TransferWebpackPlugin([{from: 'www'}], path.resolve(__dirname, 'src')),
	]
};