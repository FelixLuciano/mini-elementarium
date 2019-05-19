<template lang='pug'>

#atomus
  .electrosphere(v-for='layer in layersLength' :style="{'--length': layer}" :class='{empty: !layer}')
    .electron(v-for='_, i in layer' :style="{'--index': i}")
      div

  .nucleus
//-
</template>



<script lang='coffee'>

# For mode info about the algorithm, check out:
# https://codepen.io/FelixLuciano/pen/PVMrEO?editors=0010

export default
  name: 'atomus'


  props:
    electrons:
      type: Object

      default: ->
        base: false
        config:  []


  data: ->
    diagram: []


  computed:
    layersLength: ->
      @diagram.map (layer) =>
        layer.reduce (a, b) => a + b


  methods:
    clearDiagram: ->
      @diagram = new Array(7)
       .fill()
       .map (_, x) =>
         length = 4.5 - Math.abs(x - 3.5)

         new Array(length).fill(0)


    distributeBase: ->
      return unless @electrons.base

      layer = 0
      sublevel = 0
      bases =
        'He': 2
        'Ne': 10
        'Ar': 18
        'Kr': 36
        'Xe': 54
        'Rn': 86

      electrons = bases[@electrons.base]


      while electrons > 0
        x = layer
        y = sublevel

        while y >= 0 and x <= 6
          maxDecay = 2 + 4 * y
          decay = Math.min electrons, maxDecay

          @diagram[x][y] = decay
          electrons -= decay

          x++
          y--

        if layer is sublevel then layer++
        else sublevel++


    ionize: ->
      for electron in @electrons.config
        [layer, sublayer, charge] = electron.split ','

        layer = Number(layer) - 1
        sublayer = {s: 0, p: 1, d: 2, f: 3}[sublayer]
        charge = Number(charge)

        @$set @diagram[layer], sublayer, charge


  watch:
    electrons: ->
      @clearDiagram()
      @distributeBase()
      @ionize()


  created: ->
    @clearDiagram()
    @distributeBase()
    @ionize()

</script>



<style lang='sass'>

#atomus
  width: 100%
  height: 100%
  overflow: hidden

  &, .electrosphere
    display: flex
    justify-content: center
    align-items: center


  .nucleus
    width: 13%
    height: 13%
    background: var(--element-color)
    border-radius: 50%
    position: absolute


  .electrosphere
    border: 2px solid var(--color-gray-d5)
    border-radius: 50%
    position: absolute
    transition: opacity .3s

    @for $i from 0 through 6
      &:nth-child(#{$i + 1})
        width: calc(#{28% + 12% * $i} - 14px)
        height: calc(#{28% + 12% * $i} - 14px)

        &.empty
          opacity: .8 - .1 * $i

        .electron > div
          width: calc(22% - #{9px * $i})
          height: calc(22% - #{9px * $i})

    &:not(.empty)
      animation: 80s infinite linear

      &:nth-child(even)
        animation-name: rotate-left

      &:nth-child(odd)
        animation-name: rotate-right

      @keyframes rotate-left
        from
          transform: rotate(0deg)

        from
          transform: rotate(360deg)

      @keyframes rotate-right
        from
          transform: rotate(0deg)

        from
          transform: rotate(-360deg)


    .electron
      width: 100%
      height: 100%
      position: absolute
      transform: rotate(calc(360deg * var(--index) / var(--length)))
      display: flex
      justify-content: center
      transition: transform .3s

      div
        min-width: 15px
        min-height: 15px
        background-color: var(--element-color)
        border: 3px solid var(--color-background)
        border-radius: 50%
        transform: translate(0, calc(-50% - 1px))

</style>
