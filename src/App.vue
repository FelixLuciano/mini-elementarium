<template lang='pug'>

#app.container.fill-screen.px-2.px-md-0

  navbar(@search='search = $event')


  transition(name='transition-slide-x')
    button#back-button.mdc-button.ml-md-2.c-white(@click='home' v-show='showHomeButton')

      icon-periodic-table.mdc-button__icon(style='height: 24px;')

      span.mdc-button__label.px-3.w-bold
        template {{ $t('user_interface.home') }}


  transition(name='transition-slide-x')
    button#back-button.mdc-button.ml-md-2.c-white(@click='back' v-show='showBackButton')

      icon-arrow-left.mdc-button__icon(style='height: 24px;')

      span.mdc-button__label.px-3.w-bold
        template {{ $t('user_interface.back') }}


  transition(name='transition-page' mode='out-in')
    router-view(v-bind='routeProps')
//-
</template>



<script lang='coffee'>

import arrowLeftIcon from 'icons/ArrowLeft'
import periodicTableIcon from 'icons/PeriodicTable'
import navbar from '@/components/navbar'


export default
  name: 'App'

  data: ->
    search: ''
    history: 0


  computed:
    showHomeButton: ->
      this.history < 1 and @$route.meta.navigationButton

    showBackButton: ->
      this.history > 0 and @$route.meta.navigationButton

    routeProps: ->
      search: @search
      chemicals: @$root.chemicals
      class:
        'has-navigation-button': @$route.meta.navigationButton


  methods:
    home: ->
      @$root.historyRegister = false

      @$router.replace '/'


    back: ->
      @$root.historyRegister = false

      @$router.go -1


  watch:
    $route: ->
      if @$root.historyRegister
        @history += 1
        @$root.historyRegister = false



  components:
    'navbar': navbar
    'icon-arrow-left': arrowLeftIcon
    'icon-periodic-table': periodicTableIcon

</script>



<style lang='sass'>

@import '@material/icon-button/mdc-icon-button.scss'
@import '@material/textfield/mdc-text-field.scss'
@import '@material/dialog/mdc-dialog.scss'
@import '@material/button/mdc-button.scss'
@import '@material/list/mdc-list.scss'

@import '@material/animation/_functions.scss'


body
  --color-background: #333
  --mdc-theme-primary: var(--color-gray-d10)
  background: var(--color-background) !important
  color: var(--color-white) !important



#back-button
  border-radius: 18px
  position: absolute
  left: 4px
  top: 60px

  &::before, &::after
    background: #FFF



section.has-navigation-button
  margin-top: 56px



.transition-slide-x
  &-enter-active, &-leave-active
    transition: mdc-animation-standard(opacity, 175ms), mdc-animation-standard(transform, 175ms)

  &-enter, &-leave-to
    opacity: 0
    transform: translateX(-10px)

  &-enter-to, &-leave
    opacity: 1
    transform: translateX(0)


.transition-slide-y
  &-enter-active, &-leave-active
    transition: mdc-animation-standard(opacity, 175ms), mdc-animation-standard(transform, 175ms)

  &-enter, &-leave-to
    opacity: 0
    transform: translateY(-10px)

  &-enter-to, &-leave
    opacity: 1
    transform: translateY(0)


.transition-scale
  &-enter-active, &-leave-active
    transition: mdc-animation-standard(opacity, 175ms), mdc-animation-standard(transform, 175ms)

  &-enter, &-leave-to
    opacity: 0
    transform: scale(0)

  &-enter-to, &-leave
    opacity: 1
    transform: scale(1)


.fade
  &-enter-active, &-leave-active
    transition: mdc-animation-standard(opacity, 175ms), mdc-animation-standard(transform, 175ms)

  &-enter, &-leave-to
    opacity: 0
    visibility: hidden

  &-enter-to, &-leave
    opacity: 1
    visibility: visible


.transition-page
  &-enter-active, &-leave-active
    transition: mdc-animation-standard(opacity, 400ms), mdc-animation-standard(transform, 400ms)

  &-enter, &-leave-to
    opacity: 0

  &-enter-to, &-leave
    opacity: 1
    transform: translateX(0)

  &-enter
    transform: translateX(-10px)

  &-leave-to
    transform: translateX(10px)

</style>
