<template lang='pug'>

  v-layout#periodic-table.py-3
    v-flex.periodic-table--layout(xs12)


      v-flex(xs12 d-flex)
        chemical.red--text(:element='elements[0]' color='grey lighten-3')
        v-spacer
        chemical(:element='elements[1]' color='#6C8FFF')


      v-flex(xs12 d-flex)
        chemical(:element='elements[2]' color='#FF5050')
        chemical(:element='elements[3]' color='#FF954D')
        v-spacer
        chemical(:element='elements[4]' color='#ABFF69')
        chemical(:element='elements[5]' color='#7BFFCF')
        chemical(:element='elements[6]' color='#7BFFCF')
        chemical(:element='elements[7]' color='#7BFFCF')
        chemical(:element='elements[8]' color='#6DC9FC')
        chemical(:element='elements[9]' color='#6C8FFF')


      v-flex(xs12 d-flex)
        chemical(:element='elements[10]' color='#FF5050')
        chemical(:element='elements[11]' color='#FF954D')
        v-spacer
        chemical(:element='elements[12]' color='#2EFF69')
        chemical(:element='elements[13]' color='#ABFF69')
        chemical(:element='elements[14]' color='#7BFFCF')
        chemical(:element='elements[15]' color='#7BFFCF')
        chemical(:element='elements[16]' color='#6DC9FC')
        chemical(:element='elements[17]' color='#6C8FFF')


      v-flex(xs12 d-flex)
        chemical(:element='elements[18]' color='#FF5050')
        chemical(:element='elements[19]' color='#FF954D')
        chemical(v-for='i in 10' :element='elements[19 + i]' :key='elements[19 + i].atom'  color='#FFE33B')
        chemical(:element='elements[30]' color='#2EFF69')
        chemical(:element='elements[31]' color='#ABFF69')
        chemical(:element='elements[32]' color='#ABFF69')
        chemical(:element='elements[33]' color='#7BFFCF')
        chemical(:element='elements[34]' color='#6DC9FC')
        chemical(:element='elements[35]' color='#6C8FFF')


      v-flex(xs12 d-flex)
        chemical(:element='elements[36]' color='#FF5050')
        chemical(:element='elements[37]' color='#FF954D')
        chemical(v-for='i in 10' :element='elements[37 + i]' :key='elements[37 + i].atom'  color='#FFE33B')
        chemical(:element='elements[48]' color='#2EFF69')
        chemical(:element='elements[49]' color='#2EFF69')
        chemical(:element='elements[50]' color='#ABFF69')
        chemical(:element='elements[51]' color='#ABFF69')
        chemical(:element='elements[52]' color='#6DC9FC')
        chemical(:element='elements[53]' color='#6C8FFF')


      v-flex(xs12 d-flex)
        chemical(:element='elements[54]' color='#FF5050')
        chemical(:element='elements[55]' color='#FF954D')

        v-responsive.pa-1(max-width='calc(100% / 19)' :aspect-ratio='1/1')
          v-avatar(color='transparent' size='100%')
            v-icon(color='#FF6CA8') mdi-dots-horizontal

        chemical(v-for='i in 9' :element='elements[70 + i]' :key='elements[70 + i].atom'  color='#FFE33B')
        chemical(:element='elements[80]' color='#2EFF69')
        chemical(:element='elements[81]' color='#2EFF69')
        chemical(:element='elements[82]' color='#2EFF69')
        chemical(:element='elements[83]' color='#ABFF69')
        chemical(:element='elements[84]' color='#6DC9FC')
        chemical(:element='elements[85]' color='#6C8FFF')


      v-flex(xs12 d-flex)
        chemical(:element='elements[86]' color='#FF5050')
        chemical(:element='elements[87]' color='#FF954D')

        v-responsive.pa-1(max-width='calc(100% / 19)' :aspect-ratio='1/1')
          v-avatar(color='transparent' size='100%')
            v-icon(color='#B64ECC') mdi-dots-horizontal

        chemical(v-for='i in 9' :element='elements[102 + i]' :key='elements[102 + i].atom'  color='#FFE33B')
        chemical(:element='elements[112]' color='#2EFF69')
        chemical(:element='elements[113]' color='#2EFF69')
        chemical(:element='elements[114]' color='#2EFF69')
        chemical(:element='elements[115]' color='#2EFF69')
        chemical(:element='elements[116]' color='#6DC9FC')
        chemical(:element='elements[117]' color='#6C8FFF')


      v-flex.mt-3(xs12 d-flex)
        v-spacer
        chemical(v-for='i in 15' :element='elements[55 + i]' :key='elements[55 + i].atom'  color='#FF6CA8')
        v-spacer


      v-flex(xs12 d-flex)
        v-spacer
        chemical(v-for='i in 15' :element='elements[87 + i]' :key='elements[87 + i].atom' color='#B64ECC')
        v-spacer
  //--
</template>



<script lang='coffee'>

  import elements from './elements.coffee'

  import chemical from '@/components/chemical.vue'

  export default
    name: 'periodic-table'


    data: ->
      elements: elements


    components:
      'chemical': chemical

</script>



<style lang='sass'>

  #periodic-table
    overflow: auto

    .periodic-table--layout
      min-width: 700px

</style>
