<template lang='pug'>

  v-container
    v-layout(fill-height row wrap justify-center align-center)

      v-divider.hidden-xs-only

      project-placeholder.mx-2

      v-divider.hidden-xs-only
  //--
</template>



<script lang='coffee'>

  import projectPlaceholder from '@/components/project-placeholder.vue'

  export default
    name: 'home'


    components:
      'project-placeholder': projectPlaceholder

</script>



<style lang='sass'>

</style>
