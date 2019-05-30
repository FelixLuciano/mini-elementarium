<template lang='pug'>

section#periodic-table.row.fill.flex-centralize
  .row(:class="{'search-mode': search}")

    template(v-for='element in chemicals')
      .chemical.col.ratio-square.radius-full.pointer(v-bind='getChemical(element)' @click='openElementInfo(element)')
        .radius-full.flex-centralize
          span.l-08.c-gray-d9 {{ element.initials }}
            sup.l-05.w-bold {{ element.atom }}

    .col.ratio-square(style="grid-area: _5")
      .flex-centralize
        dots-horizontal-icon.c-fuchsia-l2.pt-2(width='32' height='32' fill='currentColor')

    .col.ratio-square(style="grid-area: _6")
      .flex-centralize
        dots-horizontal-icon.c-purple-l2.pt-2(width='32' height='32' fill='currentColor')

    .col.pr-2.flex.align-center(v-for='i in 7' :style="{'grid-area': `p${i}`}")
      span.l-05.c-gray-d2 {{ i }}

    .col.flex.align-end.justify-center(v-for='i in 18' :style="{'grid-area': `g${i.toString(19).toUpperCase()}`}")
      span.l-05.c-gray-d2 {{ i }}
//-
</template>



<script lang='coffee'>

import DotsHorizontal from 'icons/dots-horizontal'


export default
  name: 'periodic-table'

  props:
    search:
      type: String
      default: ''

    chemicals:
      type: Array
      default: []



  methods:
    getChemical: (element) ->
      style:
        'grid-area': element.initials
        'background': "var(#{element.color.primary})"

      class:
        active: @search && element.active


    openElementInfo: (element) ->
      @$root.historyRegister = true

      @$router.push
        name: 'element'
        params:
          selector: element.latin


    updateSearch: ->
      @chemicals.forEach (element, i) =>

        search   = @search.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        length   = search.length
        atom     = element.atom.toString()
        initials = element.initials.toLowerCase()
        latin    = element.latin.toLowerCase()
        name     = @$t('chemicals')[i].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        family   = @$t('views.chemical_info.families')[element.family].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

        setActive = (state = true) =>
          @chemicals[i].active = state


        if length < 3
          if length == 1 and initials.startsWith(search) then setActive()

          else if length == 2 and initials == search then setActive()

          else if atom == search then setActive()

          else setActive(false)


        else
          if atom == search then setActive()
          else if latin.startsWith(search) then setActive()
          else if name.startsWith(search) then setActive()
          else if family.includes(search) then setActive()

          else setActive(false)



  watch:
    search: 'updateSearch'



  components:
    'dots-horizontal-icon': DotsHorizontal

</script>



<style lang='sass'>

#periodic-table
  overflow-x: auto

  .row
    display: grid
    grid-template-columns: auto repeat(18, minmax(42px, calc(100% / 18)))
    grid-template-areas: "_0 g1 _1 _1 _1 _1 _1 _1 _1 _1 _1 _1 _1 _1 _1 _1 _1 _1 gI" "p1 H  g2 _2 _2 _2 _2 _2 _2 _2 _2 _2 _2 gD gE gF gG gH He" "p2 Li Be _4 _4 _4 _4 _4 _4 _4 _4 _4 _4 B  C  N  O  F  Ne" "p3 Na Mg g3 g4 g5 g6 g7 g8 g9 gA gB gC Al Si P  S  Cl Ar" "p4 K  Ca Sc Ti V  Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr" "p5 Rb Sr Y  Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I  Xe" "p6 Cs Ba _5 Hf Ta W  Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn" "p7 Fr Ra _6 Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og" "_7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7 _7" "_8 _8 _8 La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu _9" "_8 _8 _8 Ac Th Pa U  Np Pu Am Cm Bk Cf Es Fm Md No Lr _9"
    grid-gap: 4px


    > *
      transition: transition(opacity, 175ms)

    &.search-mode > *
      opacity: .4

      &.active
        opacity: 1


    .chemical
      &:hover > div
        background: rgba(#FFF, .3)

      & > div
        transition: transition(all, 175ms)

</style>
