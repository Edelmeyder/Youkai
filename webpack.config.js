const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development', // Set the mode to development or production
	entry: path.resolve(__dirname, 'src/ts/main.tsx'), // The entry point for the bundle
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader', // Use this loader for .js and .tsx files
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], // These are the presets for babel-loader
					},
				},
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Youkai",
			filename: "index.html",
			template: "src/template.html"
		})
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js', // The name of the output bundle
		path: path.resolve(__dirname, 'dist'), // Where to put the output bundle
	},
};