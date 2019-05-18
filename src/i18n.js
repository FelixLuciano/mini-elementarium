import Vue from 'vue'
import I18n from 'vue-i18n'
import Axios from 'axios'

Vue.use(I18n)


// function loadLocaleMessages () {
//   const locales = require.context('@/locales', false, /[A-Za-z-]+\.yml$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }

export default new I18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  // messages: loadLocaleMessages()
  messages: {
    'en-US': import('@/locales/en-US.yml'),
    'pt-BR': import('@/locales/pt-BR.yml'),
    'ru-RU': import('@/locales/ru-RU.yml')
  }
})
