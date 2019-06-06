'use strict'

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import i18n from './i18n'


import 'prim-css'

import chemicalElements from '@/assets/chamical-elements'


Vue.config.productionTip = false


if ('serviceWorker' in navigator)
{
  window.addEventListener('load', function ()
  {
    navigator.serviceWorker.register('/mini-elementarium/service-worker.js')
  })
}


new Vue({
  el: '#app',

  render (h)
  {
    return h(App)
  },


  data: {
    chemicals: chemicalElements,
    historyRegister: false
  },


  watch: {
    $route (route)
    {
      const { language } = route.meta

      if (language) this.$i18n.locate = language
    }
  },


  mounted ()
  {
    if (this.$route.meta.language)
    {
      const language = this.$route.meta.language

      import(`@/locales/${language}.yml`)
        .then(data =>
        {
          this.$i18n.setLocaleMessage(language, data.default)
          this.$i18n.locale = this.$route.meta.language
        })
    }

    else if (window.localStorage.getItem('language'))
    {
      const language = window.localStorage.getItem('language')

      import(`@/locales/${language}.yml`)
        .then(data =>
        {
          this.$i18n.setLocaleMessage(language, data.default)
          this.$i18n.locale = window.localStorage.getItem('language')
        })
    }

    else
      window.localStorage.setItem('language', 'en-US')
  },


  router,
  i18n
})
