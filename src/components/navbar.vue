<template lang='pug'>

nav.row.full-row.py-1.px-md-3.flex.no-wrap

  .col.flex.items-center
    img(src='@/assets/logo.svg' width='32' height='32')
    span.h-xs.pl-2.l-07.w-bold MINI ELEMENTARIUM


  .col-fill


  .col
    transition(name='transition-scale')
      button.mdc-icon-button(@click='showSearchbar = true, focusSearchbar()' v-show='$route.meta.searchBar')
        span.mdc-icon-button__label: icon-magnify

    button.mdc-icon-button(@click='showLanguageDialog = !showLanguageDialog')
      span.mdc-icon-button__label: icon-earth

    button.mdc-icon-button(@click="openAppInfo")
      span.mdc-icon-button__label: icon-info



  transition(name='transition-slide-y')
    #search-bar.container.p-1(v-show='showSearchbar')
      .row-fill

        .col-fill.mdc-text-field.mdc-text-field--fullwidth.bg-white
          input#search-input.mdc-text-field__input.px-3(
            type='text'
            spellcheck='false'
            :placeholder='$root.texts.ui.search'
            v-model='search'
            @keyup.esc='closeSearchbar'
            @keyup.enter='blurSearchbar'
          )


        #close-button-col.col
          button.mdc-icon-button(@click='closeSearchbar')
            span.mdc-icon-button__label: icon-close.c-gray-d8



  language-dialog(v-model='showLanguageDialog')
//-
</template>



<script lang='coffee'>

import magnifyIcon from 'icons/Magnify'
import earthIcon from 'icons/Earth'
import infoIcon from 'icons/InformationVariant'
import closeIcon from 'icons/Close'

import languageDialog from '@/components/language-dialog.vue'
import { MDCTextFieldIcon } from '@material/textfield/icon'
import { MDCTextField } from '@material/textfield'


export default
  name: 'navbar'

  data: ->
    search: ''
    showSearchbar: false

    showLanguageDialog: false



  methods:
    focusSearchbar: ->
      setTimeout ->
        document.querySelector('#search-input').focus()
      , 200


    blurSearchbar: ->
      document.querySelector('#search-input').blur()


    closeSearchbar: ->
      @search = ''
      @showSearchbar = false


    openAppInfo: ->
      @$root.historyRegister = true

      @$router.push
        name: "about #{@$root.language}"



  watch:
    $route: 'closeSearchbar'

    search: ->
      @$emit 'search', @search


  mounted: ->
    document.addEventListener 'DOMContentLoaded', ->
      new MDCTextField document.querySelector '.mdc-text-field'
      new MDCTextFieldIcon document.querySelector '.mdc-text-field__icon'


  components:
    'icon-magnify': magnifyIcon
    'icon-earth': earthIcon
    'icon-info': infoIcon
    'icon-close': closeIcon

    'language-dialog': languageDialog

</script>



<style lang='sass'>

nav
  background: var(--color-background)
  height: 56px


  #search-bar
    background-color: var(--color-background)
    position: absolute
    left: 0
    top: 0

    & > row
      height: 48px

    .mdc-text-field
      height: 48px
      border-radius: 8px

      #search-input
        border-bottom: none

    #close-button-col
      margin-left: -48px

</style>
