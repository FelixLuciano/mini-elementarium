'use strict'

const Path = require('path')
const Glob = require('glob')


function resolve (dir) {
  return Path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "icons": resolve('node_modules/vue-material-design-icons')
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        includePaths: [
          resolve('node_modules')
        ]
      }
    }
  },

  pwa: {
    name: 'Mini Elementarium',
    manifestPath: 'mini-elementarium/manifest.json',
    themeColor: '#FDD835',
    msTileColor: '#333333',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon32: 'mini-elementarium/img/icons/favicon-32x32.png',
      favicon16: 'mini-elementarium/img/icons/favicon-16x16.png',
      appleTouchIcon: 'mini-elementarium/img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'mini-elementarium/img/icons/safari-pinned-tab.svg',
      msTileImage: 'mini-elementarium/img/icons/msapplication-icon-144x144.png'
    }
  },

  productionSourceMap: false
}
