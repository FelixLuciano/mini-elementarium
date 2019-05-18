'use strict'

import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)


const myI18n = new I18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
})

function importLanguage (lang)
{
  import(`@/locales/${lang}.yml`)
    .then(data => {
      myI18n.setLocaleMessage(lang, data.default)
    })
}

importLanguage('en-US')


export default myI18n
