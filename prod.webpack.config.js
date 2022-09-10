const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist'),
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'index.css',
			chunkFilename: 'index.css',
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
	devServer: {
    https: true,
	static: path.join(__dirname, 'dist'),
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|mp4|mov|mp3)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: './images',
				},
			},
		],
	},
};
