<template lang='pug'>

nav.row.full-row.py-1.px-md-3.flex.no-wrap

  .col.flex.items-center
    logo(width='32' height='32')
    span.h-xs.pl-2.l-07.w-bold MINI ELEMENTARIUM


  .col-fill


  .col.flex
    transition(name='transition-scale')
      button.dark.icon.large(@click='showSearchbar = true, focusSearchbar()' v-show='$route.meta.searchBar')
        icon-magnify.button-icon(fill='currentColor')

    button.dark.icon.large(@click='showLanguageDialog = !showLanguageDialog')
      icon-earth.button-icon(fill='currentColor')

    button.dark.icon.large(@click="openAppInfo")
      icon-info.button-icon(fill='currentColor')



  transition(name='transition-slide-y')
    #search-bar.container.p-1(v-show='showSearchbar')
      .row.fill

        input.col-fill.radius-10(
          type='search'
          spellcheck='false'
          :placeholder="$t('user_interface.search')"
          v-model='search'
          @keyup.esc='closeSearchbar'
          @keyup.enter='blurSearchbar'
        )


        button.icon.large.radius-10.c-gray-d8(@click='closeSearchbar')
          .button-icon(style='margin-top: 6px;')
            icon-close



  language-dialog(v-model='showLanguageDialog')
//-
</template>



<script lang='coffee'>

import magnifyIcon from 'icons/magnify'
import earthIcon from 'icons/earth'
import infoIcon from 'icons/information-variant'
import closeIcon from 'icons/close'

import logo from '@/assets/logo'

import languageDialog from '@/components/language-dialog.vue'


export default
  name: 'navbar'

  data: ->
    search: ''
    showSearchbar: false

    showLanguageDialog: false



  methods:
    focusSearchbar: ->
      setTimeout ->
        document.querySelector('#search-bar input').focus()
      , 200


    blurSearchbar: ->
      document.querySelector('#search-bar input').blur()


    closeSearchbar: ->
      @search = ''
      @showSearchbar = false


    openAppInfo: ->
      @$root.historyRegister = true

      @$router.push
        name: "about #{@$i18n.locale}"



  watch:
    $route: 'closeSearchbar'

    search: ->
      @$emit 'search', @search


  components:
    'logo': logo
    'language-dialog': languageDialog

    'icon-magnify': magnifyIcon
    'icon-earth': earthIcon
    'icon-info': infoIcon
    'icon-close': closeIcon

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

    input
      height: 50px
      border-width: 2px
      font-size: 16px

    button
      margin-left: -50px

</style>
