const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    entry: __dirname + '/app',
    output: {
      path: path.join(__dirname ,'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['react', ["es2015", { "modules": false }]],
            plugins: ['transform-function-bind']
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?.*$|$)/,
          use: 'url-loader?limit=100000'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.css', '.scss', '.json'],
      alias: {
        components: path.resolve(__dirname, 'app', 'components'),
        api: path.resolve(__dirname, 'app','api'),
        styles: path.resolve(__dirname, 'app', 'styles'),
        CountryCodes$: path.resolve(__dirname, 'app','api', 'data', 'CountryCodes.js'),
        vendor: path.resolve(__dirname, 'app', 'vendor')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Tether: 'tether'
      }),
      new htmlWebpackPlugin({
       template: path.resolve(__dirname, 'app', 'index.html')
      })
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      inline: true,
      port: 3000
    },
    devtool: 'source-map'
  }
}