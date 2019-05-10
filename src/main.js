import Vue from 'vue'
import App from './App.vue'

import router from './router'

import { get as Axios_get } from 'axios'


import Prim from 'prim'

import chemicalElements from '@/assets/chamical-elements'
import languageBase from '@/assets/lang'



Vue.config.productionTip = false


new Vue({
  el: '#app',

  render(h)
  {
    return h(App)
  },


  data: {
    chemicals: chemicalElements,

    language: 'en',
    texts: languageBase,

    hasLoaded: false,

    historyRegister: false
  },


  methods: {
    updateLanguage()
    {
      Axios_get(`../static/lang/${this.language}.json`)
        .then(({ data }) => {

          this.texts = data.texts

          data.chemicals.forEach((chemical, index) => {
            this.$set(this.chemicals[index], 'name', data.chemicals[index])
            this.$set(this.chemicals[index].family, 'text', data.texts.families[this.chemicals[index].family.name])
          })

          this.hasLoaded = true
        })
    }
  },

  watch: {
    language: 'updateLanguage',

    $route(to, from, next)
    {
      const { language } = to.meta

      if(language) this.language = language
    }
  },



  beforeMount()
  {
    if(this.$route.meta.language) this.language = this.$route.meta.language

    this.updateLanguage()
  },


  router
})
