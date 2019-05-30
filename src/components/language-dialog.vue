<template lang='pug'>

#language-dialog(:class='{active: value}')

  transition(name='transition-slide-y')
    section.bg-white.radius-20.c-dark.flex(v-show='value')

      .col-6.px-3.py-5.radius-20.bg-yellow.c-dark.flex.justify-center.align-center.h-xs

        .col-12.a-center
          icon-people-group(width='75' height='75px' fill='currentColor')

        .l-09.w-bold {{ $t('views.language_dialog.leave_your_contribution') }}
        .mt-2.l-06.a-center {{ $t('views.language_dialog.about_contributing') }}

        a.mt-4.bg-white.radius-4.radius-max.c-dark(type='button' href='https://github.com/FelixLuciano/mini-elementarium/issues/new?&labels=Language+request&template=language-request.md' target='_blank')
          | {{ $t('views.language_dialog.contribute') }}

      .col-12.col-sm-6.p-3.flex.columns

        .col.flex.pt-1.l-10.l-sm-09.w-bold {{ $t('views.language_dialog.choose_language') }}
        .col.flex.pt-1.l-07.l-sm-06 *{{ $t('views.language_dialog.not_accurate') }}

        .col-fill.my-3.l-08.l-sm-07
          button.row.radius-max.a-left(v-for='language in languages' @click='setLanguage(language.value)')
            |{{ language.name }}

        .col.flex.justify-end

          button.px-3.bg-white.radius-6(@click='close()') {{ $t('user_interface.close') }}

  transition(name='transition-fade')
    .background-scrim(v-show='value' @click='close()')
//-
</template>



<script lang='coffee'>

import accountGroupIcon from 'icons/account-group'

export default
  name: 'language-dialog'


  props:
    value: Boolean


  data: ->
    languages: [
        name: 'English'
        value: 'en-US'
      ,
        name: 'Español*'
        value: 'es-ES'
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

      @close()

    close: ->
      @$emit 'input', false



  components:
    'icon-people-group': accountGroupIcon

</script>



<style lang='sass'>

#language-dialog
  width: 100%
  height: 100%
  padding: 10px
  position: fixed
  left: 0
  top: 0
  z-index: 999
  display: none
  justify-content: center
  align-items: center

  &.active
    display: flex


  section
    width: 100%
    max-width: 600px


  .background-scrim
    width: 100%
    height: 100%
    background: rgba(#333, .6)
    position: absolute
    left: 0
    top: 0
    z-index: -1

</style>
