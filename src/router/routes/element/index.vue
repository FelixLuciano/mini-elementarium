<template lang='pug'>

  v-layout(fill-height row wrap align-center)

    v-progress-linear(indeterminate :size='100' v-if='!chemical')

    template(v-if='chemical')
      v-flex.pt-5(xs12 v-if='$vuetify.breakpoint.xsOnly')

        .display-3
          span(:style='{"color": chemical.color}') [
          | {{ chemical.initials }}
          span(:style='{"color": chemical.color}') ]

        .display-1 {{ chemical.name }}
          sup.grey--text.text--lighten-1 {{ chemical.atom }}

        .subheading.grey--text.text--lighten-1.font-italic {{ chemical.latin }}


      v-flex.pt-4.pb-2(xs12 sm5 d-flex)
        v-spacer
        atom#electron-diagram(:data='electronicLayers' :color='chemical.color')
        v-spacer.hidden-sm-and-up


      v-flex(xs12 sm6 offset-sm1)

        template(v-if='$vuetify.breakpoint.smAndUp')
          .display-3
            span(:style='{"color": chemical.color}') [
            | {{ chemical.initials }}
            span(:style='{"color": chemical.color}') ]

          .display-1 {{ chemical.name }}
            sup.grey--text.text--lighten-1 {{ chemical.atom }}

          .subheading.grey--text.text--lighten-1.font-italic {{ chemical.latin }}

        br
        br

        .subheading.grey--text.text--lighten-1 {{ $root.texts.chemical.family }}
        .headline(:style='{"color": chemical.color}') {{ $root.texts.families[chemical.family] }}

        br

        .subheading.grey--text.text--lighten-1 {{ $root.texts.chemical.atomicMass }}
        .headline(:style='{"color": chemical.color}') {{ chemical.mass }}

        br

        .subheading.grey--text.text--lighten-1 {{ $root.texts.chemical.electronicConfiguration }}
        .headline(:style='{"color": chemical.color}')
          template(v-if='chemical.electrons.base')
            |[{{ chemical.electrons.base }}]

          template(v-for='item in electroConfig')
            |  {{ item.layer + 1 }}{{ item.sublayerLetter }}
            sup {{ item.num }}

        br
        br

        v-btn.mx-0.pr-4(flat outline round color='grey' @click='openGoogle')
          v-icon(left :color='chemical.color') mdi-google
          span.font-weight-bold(:style='{"color": chemical.color}') Google
  //--
</template>



<script lang='coffee'>

  import { get as Axios_get } from 'axios'

  import electronDiagram from '@/components/electron-diagram.vue'

  export default
    name: 'elements'

    components:
      'atom': electronDiagram


    computed:
      chemicalElements: ->
        @$root.chemicalElements


      chemical: ->
        if @$route.params.data
          return @$route.params.data

        else
          match = @chemicalElements.filter (item) =>
            item.latin == @$route.params.elementName

          return match[0]


      electroConfig: ->
        @chemical.electrons.config.map (item) ->
          [layer, sublayerLetter, num] = item.split(',')
          [layer, num] = [Number(layer) - 1, Number(num)]
          sublayer = ['s', 'p', 'd', 'f'].indexOf sublayerLetter

          {layer, sublayer, sublayerLetter, num}


      electronicSequence: ->
        [posX, posY] = [[], []]

        for x in [0..30]
          a = 3 - x % 4
          b = x - 3 * Math.round x / 4
          l = x / 6.7

          if a <= l then posX.push a
          if b >= l then posY.push b
        { posX, posY }


      electronicDiagram: ->
        diagram = new Array(7).fill().map (_, i) ->
          new Array(-Math.abs(i - 3.5) + 4.5).fill(0)

        if @chemical.electrons.base
          switch @chemical.electrons.base
            when 'He' then count = 2
            when 'Ne' then count = 10
            when 'Ar' then count = 18
            when 'Kr' then count = 36
            when 'Xe' then count = 54

          for _, i in @electronicSequence.posX
            { posX, posY } = @electronicSequence
            [ x, y ] = [ posX[i], posY[i] ]
            count -= diagram[y][x] = if count < 2 + 4 * x then count else 2 + 4 * x

        for _, index in @chemical.electrons.config
          {layer, sublayer, num} = @electroConfig[index]
          diagram[layer][sublayer] = num

        diagram


      electronicLayers: ->
        @electronicDiagram.map (layer) ->
          layer.reduce (a, b) ->
            a + b



    methods:
      openGoogle: ->
        chemicalElementText = @$root.texts.ui.chemicalElement.replace(/\s+/gm, '+')
        search = "#{ chemicalElementText }+#{ @chemical.name }"

        window.open "https://www.google.com.br/search?q=#{search}"

</script>



<style lang='sass'>

  #electron-diagram
    flex-grow: 0 !important

</style>
