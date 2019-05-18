import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)

export default new I18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',

  messages: {
    'en-US': require('@/locales/en-US.yml'),
    'pt-BR': require('@/locales/pt-BR.yml'),
    'ru-RU': require('@/locales/ru-RU.yml')
  }
})
