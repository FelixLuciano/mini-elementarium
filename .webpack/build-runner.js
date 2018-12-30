'use strict'

const Opn = require('opn')
const Chalk = require('chalk')
const { lookup } = require('dns')
const { hostname } = require('os')
const Webpack = require('webpack')

const webpackConfig = require('./webpack.config.production.js')



module.exports = function() {

  console.log(Chalk.green`Starting build process for web production...\n`)

  Webpack(webpackConfig, (err, stats) => {
    if(err || stats.hasErrors()) console.log(err)

    console.log(stats.toString({
      children: false,
      modules: false,
      chunks: false,
      colors: true,
      hash: false
    }))

    process.exit()
  })

}
