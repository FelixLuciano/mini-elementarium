<template lang='pug'>

#atomus
  .electrosphere(v-for='layer in layers' :style="{'--length': layer}" :class='{empty: !layer}')
    .electron(v-for='_, i in layer' :style="{'--index': i}")
      div

  .nucleus
//-
</template>



<script lang='coffee'>

export default
  name: 'atomus'


  props:
    electrons: Array


  data: ->
    layers: []


  methods:
    clearLayers: ->
      @layers = Array(7).fill 0


    ionize: ->
      for electron in @electrons
        [layer, sublayer, charge] = electron.split /\,/g

        layer = Number(layer) - 1
        amount = Number(charge)

        @layers[layer] += amount


  watch:
    electrons: ->
      @clearLayers()
      @ionize()


  created: ->
    @clearLayers()
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
    background: var(--color-primary)
    border-radius: 50%
    position: absolute


  .electrosphere
    border: 2px solid var(--color-gray-d5)
    border-radius: 50%
    position: absolute
    transition: transition(opacity)

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
      transition: transition(transform)

      div
        min-width: 15px
        min-height: 15px
        background-color: var(--color-primary)
        border: 3px solid var(--color-background)
        border-radius: 50%
        transform: translate(0, calc(-50% - 1px))

</style>
