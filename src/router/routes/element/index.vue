<template lang='pug'>

  v-layout.pt-3.pb-5(fill-height row wrap align-center)

    v-progress-linear(indeterminate :size='100' v-if='!chemical')

    template(v-if='chemical')
      v-flex(xs12 v-if='$vuetify.breakpoint.xsOnly')

        .display-3
          span(:style='{"color": chemical.color}') [
          | {{ chemical.init }}
          span(:style='{"color": chemical.color}') ]

        .display-1 {{ chemical.name }}
          sup.grey--text.text--lighten-1 {{ chemical.atom }}


      v-flex.pt-4.pb-2(xs12 sm5 d-flex)
        v-spacer
        atom#electron-diagram(:data='electronicLayers' :color='chemical.color')
        v-spacer.hidden-sm-and-up


      v-flex(xs12 sm6 offset-sm1)

        template(v-if='$vuetify.breakpoint.smAndUp')
          .display-3
            span(:style='{"color": chemical.color}') [
            | {{ chemical.init }}
            span(:style='{"color": chemical.color}') ]

            .display-1 {{ chemical.name }}
              sup.grey--text.text--lighten-1 {{ chemical.atom }}

        v-container.px-2.pb-0
          .subheading.grey--text.text--lighten-1 Type
          .headline(:style='{"color": chemical.color}') {{ chemical.type }}

          br

          .subheading.grey--text.text--lighten-1 Weight
          .headline(:style='{"color": chemical.color}') {{ chemical.weight }}

          br

          .subheading.grey--text.text--lighten-1 Electronic configuration
          .headline(:style='{"color": chemical.color}') {{ smallEletronicDistribution }}
  //--
</template>



<script lang='coffee'>

  import { get as Axios_get } from 'axios'

  import electronDiagram from '@/components/electron-diagram.vue'

  export default
    name: 'elements'

    components:
      'atom': electronDiagram


    data: ->
      chemical: false


    computed:
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

        for item in @chemical.electrons.config
          [layer, sublayer, num...] = item.split('')
          [layer, num] = [Number(layer) - 1, Number(num.join(''))]

          sublayer = ['s', 'p', 'd', 'f'].indexOf sublayer

          diagram[layer][sublayer] = num

        diagram


      electronicLayers: ->
        @electronicDiagram.map (layer) ->
          layer.reduce (a, b) ->
            a + b


      smallEletronicDistribution: ->
        if @chemical.electrons.base
          "[#{ @chemical.electrons.base }] #{ @chemical.electrons.config.join(' ') }"

        else
          @chemical.electrons.config.join(' ')



    beforeMount: ->
      if @$route.params.data
        @chemical = @$route.params.data

      else
        Axios_get 'https://felixluciano.github.io/mini-elementarium/public/chemical-elements.json'
          .then ({data}) =>

            match = data.filter (item) =>
              item.name == @$route.path.slice(1)

            @chemical = match[0]

</script>



<style lang='sass'>

   #electron-diagram
     flex-grow: 0 !important

</style>
