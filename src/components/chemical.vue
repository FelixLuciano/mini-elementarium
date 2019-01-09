<template lang='pug'>

  v-responsive.chemical--element(width='calc(100% / 18)' :aspect-ratio='1/1')
    v-avatar.chemical--element-button(:color='element.color' size='100%' to='/test' @click='openElement')
      .chemical--title.blue-grey--text.text--darken-3(:class='{"body-2": $vuetify.breakpoint.xsOnly, "title": $vuetify.breakpoint.smAndUp}') {{ element.init }}
  //--
</template>



<script lang='coffee'>

  export default
    name: 'chemical'

    props: ['element', 'num', 'color']


    methods:
      openElement: ->
        @$router.push
          name: 'Element'
          params:
            elementName: @element.name
            data: @element

</script>



<style lang='sass'>

  .chemical--element
    padding: 2px

    .chemical--element-button
      cursor: pointer

      .chemical--title
        position: absolute

</style>
