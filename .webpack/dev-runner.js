'use strict'

const Opn = require('opn')
const Chalk = require('chalk')
const { lookup } = require('dns')
const { hostname } = require('os')

const Express = require('express')
const Webpack = require('webpack')
const WebpackMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require('./webpack.config.dev.js')
const serverConfig = webpackConfig.devServer



module.exports = function() {
  const app = Express()

  const compiler = Webpack(webpackConfig)
  const middleWare = WebpackMiddleware(compiler, serverConfig)
  const hotMiddleWare = WebpackHotMiddleware(compiler)

  const getLocalAdress = new Promise((resolve, reject) => {
    lookup(hostname(), function (err, address) {
      if(err) reject(err)
      else resolve(address)
    })
  })


  app.use(middleWare)
  app.use(hotMiddleWare)

  app.use(Express.static('.'))


  app.listen(serverConfig.port, '0.0.0.0', () => {
    getLocalAdress.then(localAddress => {
      const serverAddress = `http://${localAddress}:${serverConfig.port}`

      Opn(serverAddress)
      console.log('Starting development server at', Chalk.green(serverAddress), '\n\nBuilding...')
    })
  })


}
