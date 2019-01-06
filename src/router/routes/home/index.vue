<template lang='pug'>

  v-flex(xs12 sm12 md11 lg10)
    periodic-table
  //--
</template>



<script lang='coffee'>

  import periodicTable from '@/components/periodic-table.vue'

  export default
    name: 'home'


    components:
      'periodic-table': periodicTable

</script>



<style lang='sass'>

</style>
