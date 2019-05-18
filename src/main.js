import Vue from 'vue'
import App from './App.vue'

import router from './router'
import i18n from './i18n'

import { get as Axios_get } from 'axios'


import 'prim-css'

import chemicalElements from '@/assets/chamical-elements.yml'


Vue.config.productionTip = false


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/mini-elementarium/service-worker.js')
  })
}


new Vue({
  el: '#app',

  render(h)
  {
    return h(App)
  },

  data: {
    chemicals: chemicalElements,
    historyRegister: false
  },

  methods: {
    updateLanguage()
    {
      this.$t('chemicals').forEach((chemical, index) => {
        this.$set(this.chemicals[index], 'name', chemical)
        this.$set(this.chemicals[index].family, 'text', this.$t('views.chemical_info.families')[this.chemicals[index].family.name])
      })
    }
  },

  watch: {
    $route(route)
    {
      const { language } = route.meta

      if(language) this.$i18n.locate = language
    }
  },

  mounted()
  {
    console.log(this.$route)
    if(this.$route.meta.language)
    {
      this.$i18n.locale = this.$route.meta.language
    }

    else if(window.localStorage.getItem('language'))
      this.$i18n.locale = window.localStorage.getItem('language')

    else window.localStorage.setItem('language', 'en-US')

    this.updateLanguage()
  },

  i18n,
  router
})
