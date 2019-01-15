<template lang='pug'>

  v-app(dark)

    v-toolbar(dense flat color='transparent')

      v-btn.ma-0.pl-1.hidden-xs-only(flat round color='white' @click='goHome')
        v-img(width='32px' src='public/logo.svg')
        .pl-3.subheading.font-weight-black Mini Elementarium


      img.hidden-sm-and-up(width='32px' src='public/logo.svg')

      transition(name='slide-x-transition')
        v-btn#button--back-to-home.mt-5.ml-0.pl-2.pr-4(absolute flat round @click='goHome' v-show='!$route.meta.isHome')
          v-icon(left) mdi-arrow-left
          span {{ $root.texts.ui.back }}

      v-spacer

      v-btn(large flat icon color='white' @click='showLanguageDialog=true')
        v-icon mdi-earth

      v-btn(large flat icon color='white' @click='showInfoDialog=true')
        v-icon mdi-information-variant



    v-container

      transition(name='fade-transition' mode='out-in')
        router-view



    v-dialog(light max-width='400' v-model='showLanguageDialog')
      v-card

        v-card-title(primary-title)
          .headline {{ $root.texts.ui.selectLanguage }}

        v-card-text.px-0
          v-list

            v-list-tile(@click='showLanguageDialog=false; setLanguage("en")')
              v-list-tile-content
                v-list-tile-title.px-2 English

            v-list-tile(@click='showLanguageDialog=false; setLanguage("pt")')
              v-list-tile-content
                v-list-tile-title.px-2 Portugês

            v-list-tile(@click='showLanguageDialog=false; setLanguage("ru")')
              v-list-tile-content
                v-list-tile-title.px-2 Pусский

        v-card-actions
          v-spacer
          v-btn.font-weight-bold(flat color='yellow accent-4' @click='showLanguageDialog=false') {{ $root.texts.ui.close }}



    v-dialog(light max-width='700' v-model='showInfoDialog')
      v-card

        v-card-text
          v-img.my-4(contain height='100px' src='public/logo.svg')

          v-flex.title.font-weight-bold.blue-grey--text.text--darken-3(d-flex align-center)
            v-divider.mr-3
            | Mini Elementarium
            v-divider.ml-3

          v-container
            p.body-1.text-xs-justify {{ $root.texts.ui.appDescription }}
            .body-1 {{ $root.texts.ui.ConsultingByMaxim }}
            .body-1 Copyright © 2018 Luciano Felix


        v-card-actions
          v-btn.font-weight-bold(flat color='blue-grey darken-4' target='_blank' href='https://github.com/FelixLuciano/mini-elementarium/blob/master/LICENSE')
            v-icon.mb-1.mr-2(left) mdi-scale-balance
            | {{ $root.texts.ui.license }}

          v-spacer

          v-btn.font-weight-bold(flat color='yellow accent-4' @click='showInfoDialog=false') {{ $root.texts.ui.close }}
  //--
</template>



<script lang='coffee'>

  export default
    name: 'mini-elementarium'


    data: ->
      showInfoDialog: false
      showLanguageDialog: false


    methods:
      goHome: ->
        @$router.push
          path: "#{@$route.meta.home}/"

      setLanguage: (language) ->
        @$router.push
          path: "/#{language}"

</script>



<style lang='sass'>

</style>
