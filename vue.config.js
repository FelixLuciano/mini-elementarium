'use strict'

const Path = require('path')
const Glob = require('glob')


function resolve (dir) {
  return Path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mini-elementarium/' : '/',
  configureWebpack: {
    resolve: {
      modules: ['bower_components'],
      alias: {
        "icons": resolve('node_modules/vue-material-design-icons')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: Glob.sync('node_modules').map((d) => Path.join(__dirname, d))
      }
    }
  }
}
