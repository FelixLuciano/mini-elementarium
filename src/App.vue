<template lang='pug'>

  v-app(dark)

    v-toolbar(dense flat color='transparent')

      v-btn.ma-0.pl-1(flat round color='white' @click='goHome')
        v-img(width='32px' src='public/logo-light.svg')
        .pl-3.subheading.font-weight-black Mini Elementarium

      v-spacer

      v-btn(large flat icon color='white' @click='showInfoDialog=true')
        v-icon mdi-information-variant


    v-container
      v-layout(fill-height justify-center align-center)

        transition(name='slide-y-reverse-transition' mode='out-in')
          router-view


    v-dialog(light max-width='700' v-model='showInfoDialog')
      v-card

        v-card-text
          v-img.my-4(contain height='100px' src='public/logo.svg')

          v-flex.title.font-weight-bold.blue-grey--text.text--darken-3(d-flex align-center)
            v-divider.mr-3
            | Mini Elementarium
            v-divider.ml-3

          v-container
            p.body-1 An informative application of the elements of the periodic table.
            .body-1 Copyright © 2018 Luciano Felix


        v-card-actions
          v-btn.font-weight-bold(flat color='blue-grey darken-4' target='_blank' href='https://github.com/FelixLuciano/mini-elementarium/blob/master/index.html')
            v-icon.mb-1.mr-2(left) mdi-scale-balance
            | License

          v-spacer

          v-btn.font-weight-bold(flat color='yellow accent-4' @click='showInfoDialog=false') Close
  //--
</template>



<script lang='coffee'>

  export default
    name: 'mini-elementarium'


    data: ->
      showInfoDialog: true


    methods:
      goHome: ->
        @$router.push
          name: 'Home'

</script>



<style lang='sass'>

</style>
