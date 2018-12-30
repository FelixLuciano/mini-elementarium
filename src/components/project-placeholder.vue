<template lang='pug'>

  v-list-tile

    v-list-tile-avatar
      v-icon(large color='teal accent-4' v-text='icon')

    v-list-tile-content.blue-grey--text.text--darken-2
      v-list-tile-title.title.font-weight-medium(v-text='projectName')
      v-list-tile-sub-title.caption(v-text='projectDescription')
  //--
</template>



<script lang='coffee'>

  export default
    name: 'project-placeholder'

    data: ->
      icon: 'mdi-vuejs'
      projectName: 'mini-elementarium'
      projectDescription: 'An informative application of the elements of the periodic table'

</script>



<style lang='sass'>

</style>
