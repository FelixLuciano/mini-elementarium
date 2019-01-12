import Vue from 'vue'
import App from './App.vue'

import { get as Axios_get } from 'axios'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import router from './router/index.coffee'



Vue.use Vuetify,
  theme:
    primary: '#FDD835'


new Vue
  el: '#app',

  render: (h) => h App

  router: router


  data:
    chemicalElements: []

    texts:
      families:
        hydrogen: '...'
        nobleGas: '...'
        halogen: '...'
        alkaliMetal: '...'
        alkalineEarthMetal: '...'
        transitionMetal: '...'
        postTransitionMetal: '...'
        semimetal: '...'
        nonMetal: '...'
        lanthanoid: '...'
        actinoid: '...'

      ui:
        appDescription: '...'
        selectLanguage: '...'
        license: '...'
        close: '...'

      chemical:
        familly: '...'
        atomicMass: '...'
        electronicConfiguration: '...'


  computed:
    language: ->
      @$route.meta.language


  methods:
    updateLanguage: ->
      Axios_get "https://felixluciano.github.io/mini-elementarium/public/lang/#{@language}.json"
        .then ({data}) =>

          @texts.families = { data.families... }
          @texts.chemical = { data.chemical... }
          @texts.ui = { data.ui... }

          data.chemicals.forEach (chemical, index) =>
            @chemicalElements[index].name = data.chemicals[index]


  watch:
    language: 'updateLanguage'



  beforeMount: ->
    Axios_get 'https://felixluciano.github.io/mini-elementarium/public/chemical-elements.json'
      .then ({data}) =>
        @chemicalElements = data

        @updateLanguage()
