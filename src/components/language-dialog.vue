<template lang='pug'>

#languageDialog.mdc-dialog
  .mdc-dialog__container

    .mdc-dialog__surface
      h2.mdc-dialog__title {{ $root.texts.ui.selectLanguage }}

      .mdc-dialog__content.px-0.py-2
        ul.mdc-list

          li.mdc-list-item.px-4(@click="setLanguage('en'), close()")
            span.mdc-list-item__text.ml-2 English

          li.mdc-list-item.px-4(@click="setLanguage('pt'), close()")
            span.mdc-list-item__text.ml-2 Portugês

          li.mdc-list-item.px-4(@click="setLanguage('ru'), close()")
            span.mdc-list-item__text.ml-2 Pусский


      footer.mdc-dialog__actions
        button.mdc-button.mdc-dialog__button.px-3(@click='close()')
          span.mdc-button__label.w-bold {{ $root.texts.ui.close }}


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
        value: 'en'
      ,
        name: 'Purtuguês'
        value: 'pt'
      ,
        name: 'Pусский'
        value: 'ru'
      ,
    ]



  methods:
    setLanguage: (language) ->
      @$root.language = language


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
