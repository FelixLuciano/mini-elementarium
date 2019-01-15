import Vue from 'vue';

import App from './App.vue';

import {
  get as Axios_get
} from 'axios';

import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.css';

import router from './router/index.coffee';

Vue.use(Vuetify, {
  theme: {
    primary: '#FDD835'
  }
});

new Vue({
  el: '#app',
  render: (h) => {
    return h(App);
  },
  router: router,
  data: {
    chemicalElements: [],
    texts: {
      families: {
        hydrogen: '...',
        nobleGas: '...',
        halogen: '...',
        alkaliMetal: '...',
        alkalineEarthMetal: '...',
        transitionMetal: '...',
        postTransitionMetal: '...',
        semimetal: '...',
        nonMetal: '...',
        lanthanoid: '...',
        actinoid: '...'
      },
      ui: {
        appDescription: '...',
        selectLanguage: '...',
        license: '...',
        close: '...'
      },
      chemical: {
        familly: '...',
        atomicMass: '...',
        electronicConfiguration: '...'
      }
    }
  },
  computed: {
    language: function() {
      return this.$route.meta.language;
    }
  },
  methods: {
    updateLanguage: function() {
      return Axios_get(`https://felixluciano.github.io/mini-elementarium/public/lang/${this.language}.json`).then(({data}) => {
        this.texts.families = {...data.families};
        this.texts.chemical = {...data.chemical};
        this.texts.ui = {...data.ui};
        return data.chemicals.forEach((chemical, index) => {
          return this.chemicalElements[index].name = data.chemicals[index];
        });
      });
    }
  },
  watch: {
    language: 'updateLanguage'
  },
  beforeMount: function() {
    return Axios_get('https://felixluciano.github.io/mini-elementarium/public/chemical-elements.json').then(({data}) => {
      this.chemicalElements = data;
      return this.updateLanguage();
    });
  }
});
