<template lang='pug'>

section#about.row.select-text
  .col-12.a-center.pb-3.no-select
    img(src='@/assets/logo.svg' width='127' height='127')


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

    .col-12.mt-3
      a.mdc-button.mdc-button--outlined.mr-2(:href='licenseLink' target='_blank')
        icon-balance.mdc-button__icon(style='height: 24px;')
        span.mdc-button__label.pl-3.pr-2.w-bold {{ $t('views.about.license') }}

      a.mdc-button.mdc-button--outlined.mr-2(:href='githubLink' target='_blank')
        icon-github.mdc-button__icon(style='height: 24px;')
        span.mdc-button__label.pl-3.pr-2.w-bold Github
//-
</template>



<script lang='coffee'>

import githubIcon from 'icons/GithubCircle'
import balanceIcon from 'icons/ScaleBalance'


export default
  name: 'about'


  data: ->
    licenseLink: 'https://github.com/FelixLuciano/mini-elementarium/blob/master/LICENSE'
    githubLink: 'https://github.com/FelixLuciano/mini-elementarium'


  components:
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
