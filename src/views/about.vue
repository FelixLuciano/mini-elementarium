<template lang='pug'>

section#about.row.select-text.pb-3
  logo.col-12.mb-3.no-select(height='127')


  .row.flex.items-center
    .col-fill.pb-1.bg-gray-d7.radius-4

    .col.px-4
      span.w-bold MINI ELEMENTARIUM

    .col-fill.pb-1.bg-gray-d7.radius-4


  .row.flex.justify-center

    .col-12.col-sm-11.l-08.a-justify.my-4.p-4.radius-10.bg-gray-d8 {{ $t('views.about.description') }}

    .col-12.l-07
      span {{ $t('views.about.consultant', [$t('views.about.peoples.maxim_lyutov')]) }}
      br
      span Copyright © 2019 Luciano Felix

    .col-12.mt-2.spacing-2

      a.dark.outline.icon-left.radius-max.element-color(type='button' :href='licenseLink' target='_blank')
        | {{ $t('views.about.license') }}
        .button-icon(style='padding-top: 4px;')
          icon-balance(fill='currentColor')

      a.dark.outline.icon-left.radius-max.element-color(type='button' :href='githubLink' target='_blank')
        | Github
        .button-icon(style='padding-top: 5px;')
          icon-github(fill='currentColor')
//-
</template>



<script lang='coffee'>

import logo from '@/assets/logo'

import githubIcon from 'icons/github-circle'
import balanceIcon from 'icons/scale-balance'


export default
  name: 'about'


  data: ->
    licenseLink: 'https://github.com/FelixLuciano/mini-elementarium/blob/master/LICENSE'
    githubLink: 'https://github.com/FelixLuciano/mini-elementarium'


  components:
    'logo': logo

    'icon-github': githubIcon
    'icon-balance': balanceIcon

</script>



<style lang='sass'>

#about

  .mdc-button
    --mdc-theme-primary: var(--color-yellow)
    color: #FFF
    border-radius: 18px


  hr
    border: 0
    border-bottom: 1px solid red

</style>
