const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {

    entry: ['./src/js/main.js', './src/scss/main.scss'],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].bundle.js'
    },
    module: {

        loaders: [
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['env']
                  }
              }
          },
          {
            test: /\.css$/,
            exclude: /(node_modules|bower_components)/,
            use: ExtractTextPlugin.extract({
              loader: 'css-loader?importLoaders=1',
            })
          },
          {
            test: /\.(sass|scss)$/,
            exclude: /(node_modules|bower_components)/,
						use: ExtractTextPlugin.extract(['css-loader','resolve-url-loader', 'sass-loader?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')])
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'url-loader?limit=10000&mimetype=application/font-woff'
          },
					{
						test: /\.(eot|svg|ttf|woff|woff2)$/,
						exclude: /node_modules/,
						loader: 'file-loader'
					},
					{
						test: /\.(eot|woff|woff2|ttf|svg)(\?[\s\S]+)?$/,
						loader: 'url-loader?limit=1000&name=fonts/[name].[ext]',
						exclude: /node_modules/,
						include: [path.resolve(__dirname, '/dist/fonts')] // <== RIGHT HERE
					}
      ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].bundle.css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
            files: ['./dist/*']
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    watch: true,
    devtool: 'source-map'
};
