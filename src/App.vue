<template lang='pug'>

#app.container.fill-screen.px-2.px-md-0

  navbar(@search='search = $event')


  transition(name='transition-slide-x')
    button.navigation-button.dark.icon-left.radius-max(@click='home' v-show='showHomeButton')
      | {{ $t('user_interface.home') }}
      icon-periodic-table.button-icon(fill='currentColor')

  transition(name='transition-slide-x')
    button.navigation-button.dark.icon-left.radius-max(@click='back' v-show='showBackButton')
      | {{ $t('user_interface.back') }}
      icon-arrow-left.button-icon(fill='currentColor')


  transition(name='transition-page' mode='out-in')
    router-view(v-bind='routeProps')
//-
</template>



<script lang='coffee'>

import arrowLeftIcon from 'icons/arrow-left'
import periodicTableIcon from 'icons/periodic-table'

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

@import 'prim-css'


body
  --color-background: #333
  --color-primary: var(--color-yellow)
  background: var(--color-background) !important
  color: var(--color-white) !important



.navigation-button
  position: absolute
  left: 4px
  top: 60px



section.has-navigation-button
  margin-top: 56px



.transition-slide-x
  &-enter-active, &-leave-active
    transition: transition(opacity, 175ms), transition(transform, 175ms)

  &-enter, &-leave-to
    opacity: 0
    transform: translatex(-10px)

  &-enter-to, &-leave
    opacity: 1
    transform: translatex(0)


  .transition-slide-y
    &-enter-active, &-leave-active
      transition: transition(opacity, 175ms), transition(transform, 175ms)

    &-enter, &-leave-to
      opacity: 0
      transform: translateY(-10px)

    &-enter-to, &-leave
      opacity: 1
      transform: translateY(0)


.transition-scale
  &-enter-active, &-leave-active
    transition: transition(opacity, 175ms), transition(transform, 175ms)

  &-enter, &-leave-to
    opacity: 0
    transform: scale(0)

  &-enter-to, &-leave
    opacity: 1
    transform: scale(1)


.transition-page
  &-enter-active, &-leave-active
    transition: transition(opacity, 400ms), transition(transform, 400ms)

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
