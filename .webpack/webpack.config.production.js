'use strict'

const Path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")



module.exports = {

  mode: 'production',


  entry: './src/main.coffee',


  output: {
    path: Path.resolve(__dirname, '../dist'),

    publicPath: '/dist/',

    filename: 'main.bundle.js'
  },


  stats: false,


  resolve: {
    extensions: ['.js', '.json', '.vue'],

    alias: {
      '@': Path.resolve(__dirname, '../src/')
    }
  },


  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),

      new OptimizeCSSAssetsPlugin()
    ]
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.bundle.css"
    }),

    new CompressionPlugin(),

    new VueLoaderPlugin()
  ],


  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.coffee$/,
        use: ['coffee-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ]
  }
}
