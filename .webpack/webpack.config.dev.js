'use strict'

const Path = require('path')

const Webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')



module.exports = {

  target: 'web',


  mode: 'development',


  entry: [
    'webpack-hot-middleware/client?noInfo=true',
    './src/main.coffee'
  ],


  output: {
    path: Path.resolve(__dirname, '..', 'dist'),

    publicPath: '/dist',

    filename: 'main.bundle.js'
  },


  plugins: [
    new VueLoaderPlugin(),

    new Webpack.HotModuleReplacementPlugin(),

    new Webpack.NoEmitOnErrorsPlugin(),

    new MiniCssExtractPlugin({
      filename: "style.bundle.css"
    })
  ],


  resolve: {
    extensions: ['.js', '.json', '.vue'],

    alias: {
      '@': Path.resolve(__dirname, '..', 'src/')
    }
  },


  devServer: {
    publicPath: '/dist',
    host: '0.0.0.0',
    useLocalIp: true,
    port: 8080,

    hot: true,
    open: true,
    inline: true,
    logLevel: 'silent'
  },


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
        use: [ 'vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
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
