<template lang='pug'>

section#element-info.row.flex.justify-center.align-start.pb-3(:style="{'--element-color': `var(${element.color.secondary})`}")

  .col-12.h-sm.select-text
    .l-25
      span.element-color [
      | {{ element.initials }}
      span.element-color ]

    .mt-2.l-15 {{ elementName }}
      sup.l-09.c-gray-l2 {{ element.atom }}

    .l-1.s-italic.c-gray-l2 {{ element.latin }}

    br


  .col-12.col-sm-6.px-3.pl-sm-0.pr-sm-3.px-md-0.flex-centralize
    #atom-container.col-fill.ratio-square
      atomus(:electrons='electronicConfig')


  .col-12.col-sm-6.select-text
    .h-xs
      .l-23
        span.element-color [
        span {{ element.initials }}
        span.element-color ]

      .mt-2.l-13 {{ elementName }}
        sup.l-09.c-gray-l2 {{ element.atom }}

      .l-08.s-italic.c-gray-l2 {{ element.latin }}


    .mt-4.l-09.l-sm-07.c-gray-l3 {{ $t('views.chemical_info.family') }}
    .mt-1.l-12.l-sm-10.element-color {{ elementFamily }}


    .mt-4.l-09.l-sm-07.c-gray-l3 {{ $t('views.chemical_info.atomic_mass') }}
    .mt-1.l-12.l-sm-10.element-color {{ element.mass }}


    .mt-4.l-09.l-sm-07.c-gray-l3 {{ $t('views.chemical_info.electronic_config') }}
    .mt-1.l-12.l-sm-10.element-color
      template(v-if='element.electrons.base')
        span [{{ element.electrons.base }}]
          | {{ " " }}

      template(v-for='item in element.electrons.config')
        span {{ item.split(',')[0] }}
          span.l-08 {{ item.split(',')[1].toUpperCase() }}
          sup.l-07 {{ item.split(',')[2] }}
          | {{ " " }}


    .mt-4.pb-2.l-09.l-sm-07.c-gray-l3.no-select {{ $t('views.chemical_info.see_more_on') }}

    .col-12.spacing-2.no-select
      a.dark.outline.icon-left.radius-max.element-color(type='button' :href='googleLink' target='_blank')
        | Google
        google-icon.button-icon(style='padding-bottom: 2px;' fill='currentColor')

      a.dark.outline.icon-left.radius-max.element-color(type='button' :href='wiki2Link' target='_blank')
        | WIKI 2
        wiki-icon.button-icon(style='padding-bottom: 2px;' fill='currentColor')
//-
</template>



<script lang='coffee'>

import atomus from '@/components/atomus'

import googleIcon from 'icons/google'
import wikiIcon from 'icons/wikipedia'

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


    electronicConfig: ->
      config = @element.electrons.config
      base = @element.electrons.base

      while base
        el = @chemicals.find (e) =>
          e.initials == base

        base = el.electrons.base
        config = [...el.electrons.config, ...config]

      config


    googleLink: ->
      chemicalElementText = @$t('views.chemical_info.chemical_element').replace(/\s+/gm, '+')
      search = "#{ chemicalElementText }+#{ @elementName }"

      "https://www.google.com.br/search?q=#{search}"


    wiki2Link: ->
      language = @$i18n.locale.split('-')[0]

      if language == 'pt'
        "https://pt.wiki2.org/wiki/#{ @elementName }"

      else
        "https://wiki2.org/#{ language }/#{ @elementName }"



  mounted: ->
    unless @hasElement then @$router.push '/'



  components:
    'atomus': atomus
    'google-icon': googleIcon
    'wiki-icon': wikiIcon

</script>



<style lang='sass'>

#element-info
  --color-primary: var(--element-color)

  #atom-container
    max-width: 340px

  .element-color
    color: var(--element-color)

  a.outline
    border-color: var(--color-gray-d4)

</style>
