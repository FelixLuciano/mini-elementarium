<template lang='pug'>

  v-layout#periodic-table.py-3
    v-flex.periodic-table--layout(xs12)

      v-layout(row wrap)
        template(v-for='element in elements')


          template(v-if='!(element.atom > 56 && element.atom < 72)')
            template(v-if='!(element.atom > 88 && element.atom < 104)')

              chemical(:element='element')


          template(v-if='element.atom === 1')
            .separator(:style='{"--size": 16}')


          template(v-if='element.atom === 4 || element.atom === 12')
            .separator(:style='{"--size": 10}')


          template(v-if='element.atom === 56')
            v-responsive(width='calc(100% / 18)' :aspect-ratio='1/1')
              v-avatar(size='100%')
                v-icon(color='#FF6CA8') mdi-dots-horizontal


          template(v-if='element.atom === 88')
            v-responsive(width='calc(100% / 18)' :aspect-ratio='1/1')
              v-avatar(size='100%')
                v-icon(color='#B64ECC') mdi-dots-horizontal

        .separator(:style='{"--size": 18}')

        .separator(:style='{"--size": 2}')
        template(v-for='index in 15')
          chemical(:element='elements[55 + index]')
        .separator(:style='{"--size": 1}')


        .separator(:style='{"--size": 2}')
        template(v-for='index in 15')
          chemical(:element='elements[87 + index]')
        .separator(:style='{"--size": 1}')
  //--
</template>



<script lang='coffee'>

  import chemical from '@/components/chemical.vue'

  export default
    name: 'periodic-table'


    props: ['elements']


    components:
      'chemical': chemical

</script>



<style lang='sass'>

  #periodic-table
    overflow: auto

    .periodic-table--layout
      min-width: 700px

      .separator
        width: calc(calc(100% / 18 * var(--size)))
        height: 10px

</style>
