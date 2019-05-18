<template lang='pug'>

section#element-info.row.flex.justify-center.align-start.pb-3(:style="{'--element-color': `var(${element.color.secondary})`}")

  .col-12.h-sm-a.select-text
    .l-25
      span.element-color [
      | {{ element.initials }}
      span.element-color ]

    .l-15 {{ elementName }}
      sup.l-09.c-gray-l2 {{ element.atom }}

    .l-1.s-italic.c-gray-l2 {{ element.latin }}

    br


  .col-12.col-sm-6.px-3.pl-sm-0.pr-sm-3.px-md-0.flex.centralize
    #atom-container.col-fill.ratio-square
      atomus(:electrons='element.electrons')


  .col-12.col-sm-6.select-text
    .h-xs
      .l-23
        span.element-color [
        | {{ element.initials }}
        span.element-color ]

      .l-13 {{ elementName }}
        sup.l-09.c-gray-l2 {{ element.atom }}

      .l-08.s-italic.c-gray-l2 {{ element.latin }}

    br

    .l-09.l-sm-07.c-gray-l3 {{ $t('views.chemical_info.family') }}
    .l-12.l-sm-10.element-color {{ elementFamily }}

    br

    .l-09.l-sm-07.c-gray-l3 {{ $t('views.chemical_info.atomic_mass') }}
    .l-12.l-sm-10.element-color {{ element.mass }}

    br

    .l-09.l-sm-07.c-gray-l3 {{ $t('views.chemical_info.electronic_config') }}
    .l-12.l-sm-10.element-color
      template(v-if='element.electrons.base')
        span [{{ element.electrons.base }}]
          | {{ " " }}

      template(v-for='item in element.electrons.config')
        span {{ item.split(',')[0] }}
          span.l-08 {{ item.split(',')[1].toUpperCase() }}
          sup {{ item.split(',')[2] }}
          | {{ " " }}

    br.no-select

    .pb-2.l-09.l-sm-07.c-gray-l3.no-select {{ $t('views.chemical_info.see_more_on') }}

    a.mdc-button.mdc-button--outlined.mr-2(:href='googleLink' target='_blank')
      google-icon.mdc-button__icon(style='height: 24px;')
      span.mdc-button__label.pl-3.pr-2.w-bold Google

    a.mdc-button.mdc-button--outlined.mr-2(:href='wiki2Link' target='_blank')
      wiki-icon.mdc-button__icon(style='height: 24px;')
      span.mdc-button__label.pl-3.pr-2.w-bold WIKI 2
//-
</template>



<script lang='coffee'>

import atomus from '@/components/atomus'

import googleIcon from 'icons/Google'
import wikiIcon from 'icons/Wikipedia'

export default
  name: 'element-info'


  props:
    chemicals:
      type: Array
      default: []



  computed:
    element: ->
      selector = @$route.params.selector.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

      element = @chemicals.find (chemical) =>
        atom     = chemical.atom.toString()
        name     = @$t('chemicals')[atom - 1].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        latin    = chemical.latin.toLowerCase()
        initials = chemical.initials.toLowerCase()

        if      selector == latin    then return true
        else if selector == name     then return true
        else if selector == initials then return true
        else if selector == atom     then return true

        else false

      if element then @hasElement = true
      else @hasElement = false

      return element


    elementName: ->
      index = @element.atom - 1
      return @$t('chemicals')[index]


    elementFamily: ->
      index = @element.family
      return @$t('views.chemical_info.families')[index]


    googleLink: ->
      chemicalElementText = @$t('views.chemical_info.chemical_element').replace(/\s+/gm, '+')
      search = "#{ chemicalElementText }+#{ @element.name }"

      "https://www.google.com.br/search?q=#{search}"


    wiki2Link: ->
      if @language == 'pt'
        "https://pt.wiki2.org/wiki/#{ @element.name }"

      else
        "https://wiki2.org/#{ @language }/#{ @element.name }"



  mounted: ->
    unless @hasElement then @$router.push '/'



  components:
    'atomus': atomus
    'google-icon': googleIcon
    'wiki-icon': wikiIcon

</script>



<style lang='sass'>

#element-info
  --mdc-theme-primary: var(--element-color)

  #atom-container
    max-width: 340px


  .element-color
    color: var(--element-color)


  .mdc-button
    border-radius: 18px
    border: 1px solid var(--color-gray-d4)

</style>
