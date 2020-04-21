// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Подключили к проекту плагин
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');

const config = require('./config.js');

//const isDev = process.env.NODE_ENV === 'development';



const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// подключаем плагин
const isDev = process.env.NODE_ENV === 'development';
// создаем переменную для development-сборки
// подключаем path к конфигу вебпак

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[chunkhash].js'
  },
  module: {
    rules: [
      
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader?name=.vendor/[name].[ext]',
          {
            loader: 'file-loader'
          },
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
    
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // }),
     new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
     new webpack.DefinePlugin({
      TEST: JSON.stringify(isDev ? config.test2 : config.test1),
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }), // подключите плагин после MiniCssExtractPlugin



    new HtmlWebpackPlugin({
      // Означает, что:
      inject: false, // стили НЕ нужно прописывать внутри тегов
      //hash: true, // для страницы нужно считать хеш
      template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
      filename: 'index.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
    })
  ]
}
// переписали точку выхода, используя утилиту path