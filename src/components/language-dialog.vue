<template lang='pug'>

#languageDialog.mdc-dialog
  .mdc-dialog__container

    .mdc-dialog__surface
      h2.mdc-dialog__title {{ $t('user_interface.choose_language') }}

      .mdc-dialog__content.px-0.py-2
        ul.mdc-list

          template(v-for='language in languages')
            li.mdc-list-item.px-4(@click="setLanguage(language.value), close()")
              span.mdc-list-item__text.ml-2 {{ language.name }}


      footer.mdc-dialog__actions
        button.mdc-button.mdc-dialog__button.px-3(@click='close()')
          span.mdc-button__label.w-bold {{ $t('user_interface.close') }}


  .mdc-dialog__scrim(@click='close()')
//-
</template>



<script lang='coffee'>

import { MDCDialog } from '@material/dialog'

export default
  name: 'language-dialog'


  props:
    value: Boolean



  data: ->
    dialog: Object

    languages: [
        name: 'English'
        value: 'en-US'
      ,
        name: 'Purtuguês'
        value: 'pt-BR'
      ,
        name: 'Pусский'
        value: 'ru-RU'
      ,
    ]



  methods:
    importLanguage: (language) ->
      new Promise (resolve) =>
        import("@/locales/#{language}.yml")
          .then (data) =>
            @$i18n.setLocaleMessage(language, data.default)
            resolve()

    setLanguage: (language) ->
      @importLanguage(language)
        .then =>
            @$i18n.locale = language

            window.localStorage.setItem('language', language)


    close: ->
      @$emit 'input', false



  watch:
    value: ->
      if @value then @dialog.open()
      else @dialog.close()



  mounted: ->
    @dialog = new MDCDialog document.querySelector '#languageDialog'

</script>



<style lang='sass'>



</style>
