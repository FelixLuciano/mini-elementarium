<template lang='pug'>

  .atom-diagram(:style='{"--color": color}')

    .layer(v-for='layer, index in layers' :style='{"--layer": index, "--length": layer}' :class='{"empty-layer": layer === 0}')
      .electron(v-for='electron, index in layer' :style='{"--index": index}')

    .nucleus
  //--
</template>



<script lang='coffee'>

  export default
    name: 'atom-diagram'

    props: ['data', 'color']


    computed:
      layers: ->
        for i in [@data.length - 1..0] by -1 then @data[i]

</script>



<style lang='sass'>

  .atom-diagram
    width: 350px
    height: 350px

    .layer
      --length: 1
      width: calc(350px - 40px * var(--layer))
      height: calc(350px - 40px * var(--layer))
      margin: calc(20px * var(--layer))
      border: 2px solid #616161
      border-radius: 50%
      position: absolute

      &:first-child
        margin-top: 0

      &.empty-layer
        opacity: .3

      .electron
        width: 100%
        height: 100%
        --rotation: calc( var(--index) / var(--length) * 360deg )
        transform: rotate(var(--rotation))
        margin-top: -100%

        &:first-child
          margin-top: 0

        &:after
          content: ''
          padding: 5px
          // background: #FFEE58
          background: var(--color)
          border: 3px solid #303030
          border-radius: 50%
          margin-left: 50%
          position: absolute
          transform: translateX(-50%) translateY(calc(-50% - 2px))

    .nucleus
      width: 50px
      height: 50px
      margin: 150px
      // background: #FFEE58
      background: var(--color)
      border-radius: 50%
      position: absolute


  @media only screen and (max-width: 959px)
    .atom-diagram
      width: 250px
      height: 250px

      .layer
        width: calc(250px - 30px * var(--layer))
        height: calc(250px - 30px * var(--layer))
        margin: calc(15px * var(--layer))

      .nucleus
        width: 30px
        height: 30px
        margin: 110px


</style>
