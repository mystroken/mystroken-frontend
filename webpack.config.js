const path = require('path');

module.exports = (env = {}) => {
	return {
		entry: './assets/js/app.js',
		output: {
			filename: './assets/js/bundle.js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
				}
			]
		},
		stats: {
			colors: true
		},
		devtool: 'source-map',
		resolve: {
			alias: {
				TweenLite: path.resolve(__dirname, 'assets/js/vendors/greensock/src/uncompressed/TweenLite.js'),
				TimelineLite: path.resolve(__dirname, 'assets/js/vendors/greensock/src/uncompressed/TimelineLite.js'),
			}
		}
	}
};
