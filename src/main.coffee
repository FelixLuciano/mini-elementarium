import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import router from './router/index.coffee'


Vue.use Vuetify,
  theme:
    primary: '#FDD835'

new Vue
  el: '#app',
  render: (h) => h App
  router: router,
