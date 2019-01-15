<template lang='pug'>

  v-responsive.chemical--element(width='calc(100% / 18)' :aspect-ratio='1/1')
    v-avatar.chemical--element-button(:color='element.color' size='100%' to='/test' @click='openElement')
      .chemical--title.blue-grey--text.text--darken-3 {{ element.initials }}
  //--
</template>



<script lang='coffee'>

  export default
    name: 'chemical'

    props: ['element', 'num', 'color']


    methods:
      openElement: ->
        @$router.push
          path: "#{@$route.meta.home}/#{@element.latin}"
          params:
            elementName: @element.latin
            data: @element

</script>



<style lang='sass'>

  .chemical--element
    padding: 2px

    .chemical--element-button
      cursor: pointer

      .chemical--title
        position: absolute


  @media screen and (max-width: 599px)
    .chemical--title
      font-size: 16px


  @media screen and (min-width: 600px)
    .chemical--title
      font-size: 18px

</style>
