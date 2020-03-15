'use strict'

const Path = require('path')
const Glob = require('glob')

const Purgecss = require("@fullhuman/postcss-purgecss")


function resolve (dir) {
  return Path.join(__dirname, dir)
}



module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mini-elementarium/' : '/',


  configureWebpack:
  {
    resolve: {
      extensions: ['.js', '.vue', '.svg', '.yml',],
      alias: {
        "icons": resolve('node_modules/@mdi/svg/svg')
      }
    }
  },


  chainWebpack(config)
  {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
        .tap(() => {
          return {
            svgo: {
              plugins: [
                {
                  removeViewBox: false
                }
              ]
            }
          }
        })
  },


  css:{
    loaderOptions: {
      sass: {
        includePaths: [
          resolve('node_modules')
        ],
        data: `@import "prim-css/src/variables/_variables.scss"; @import "prim-css/src/functions/_functions.scss"; @import "prim-css/src/mixins/_mixins.scss";`
      },

      postcss: process.env.NODE_ENV === "production" ? {
        plugins: [
          Purgecss({
            content: [
              "./src/**/*.html",
              "./src/**/*.vue"
            ],
            whitelist: [
              'html'
            ],
            whitelistPatterns: [
              /.+-(enter|leave)-?(to|active)?$/
            ]
          })
        ]
      } : {}
    }
  },


  pwa: {
    name: 'Mini Elementarium',
    themeColor: '#2B2B2B',
    msTileColor: '#2B2B2B',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon16:      'img/icons/favicon-16x16.png',
      favicon32:      'img/icons/favicon-32x32.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon:       'img/icons/safari-pinned-tab.svg',
      msTileImage:    'img/icons/msapplication-icon-144x144.png'
    }
  },


  pluginOptions: {
    i18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      localeDir: 'locales',
      enableInSFC: false
    }
  },


  productionSourceMap: false,
}
