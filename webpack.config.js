const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

let conf = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      // babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
          }
        }
      },
      // css
      {
        test: /\.css$/,
        use: [
          'style-loader',//style
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
            }
          },//css
        ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),//чистка старья/перезапись папки build
    new Dotenv(),
    new HtmlWebpackPlugin({// перезапись html в папку build
      template: './src/index.html',//копия с шаблона
      favicon: './src/img/instagram.ico'//вставляет в head
    }),
  ],
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, 'build'),
  },
};

module.exports = conf;