const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    entry: __dirname + '/src/app.js',
    output: {
      path: path.join(__dirname ,'public'),
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
        components: path.resolve(__dirname, 'app', 'components')
      }
    },
    plugins: [
      new htmlWebpackPlugin({
       template: path.resolve(__dirname, 'src', 'index.html')
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