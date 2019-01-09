<template lang='pug'>

  v-layout(fill-height justify-center align-center)

    v-progress-linear(indeterminate :size='100' v-if='!chemicalElements.length')

    v-flex(xs12 sm12 md11 lg10 v-if='chemicalElements.length')

      periodic-table(:elements='chemicalElements')
  //--
</template>



<script lang='coffee'>

  import { get as Axios_get } from 'axios'

  import periodicTable from '@/components/periodic-table.vue'

  export default
    name: 'home'

    components:
      'periodic-table': periodicTable


    data: ->
      chemicalElements: []


    mounted: ->
      Axios_get '/public/chemical-elements.json'
        .then ({data}) =>
          @chemicalElements = data



</script>



<style lang='sass'>

</style>
