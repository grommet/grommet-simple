export default {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'index.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loaders: ['babel']
			}
		]
	}
};
