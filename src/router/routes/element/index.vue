<template lang='pug'>

  v-container
    v-layout(fill-height row wrap justify-center align-center)

      v-flex(xs12 md10 d-flex)

        v-flex.text-xs-left
          .display-1 [{{ $route.params.data.init }}] {{ $route.params.data.name }}
  //--
</template>



<script lang='coffee'>

  export default
    name: 'test'

</script>



<style lang='sass'>

</style>
