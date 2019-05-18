import Vue from 'vue'
import Router from 'vue-router'

import periodicTable from '@/views/periodic-table.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: periodicTable,
      meta: {
        searchBar: true
      }
    },



    {
      path: '/',
      name: 'home en-US',
      component: () => import('@/views/periodic-table.vue'),
      meta: {
        language: 'en-US',
        searchBar: true
      }
    },
    {
      path: '/en-US',
      redirect: {
        name: 'home en-US'
      }
    },
    {
      path: '/about',
      name: 'about en-US',
      component: () => import('@/views/about.vue'),
      meta: {
        language: 'en-US',
        navigationButton: true
      },
    },
    {
      path: '/en/:selector',
      name: 'element en-US',
      component: () => import('@/views/element-info.vue'),
      meta: {
        language: 'en-US',
        navigationButton: true
      }
    },


    {
      path: '/',
      name: 'home pt-BR',
      component: () => import('@/views/periodic-table.vue'),
      meta: {
        language: 'pt-BR',
        searchBar: true
      }
    },
    {
      path: '/pt-BR',
      redirect: {
        name: 'home pt-BR'
      }
    },
    {
      path: '/sobre',
      name: 'about pt-BR',
      component: () => import('@/views/about.vue'),
      meta: {
        language: 'pt-BR',
        navigationButton: true
      }
    },
    {
      path: '/pt-BR/:selector',
      name: 'element pt-BR',
      component: () => import('@/views/element-info.vue'),
      meta: {
        language: 'pt-BR',
        navigationButton: true
      }
    },


    {
      path: '/',
      name: 'home ru-RU',
      component: () => import('@/views/periodic-table.vue'),
      meta: {
        language: 'ru-RU',
        searchBar: true
      }
    },
    {
      path: '/ru-RU',
      redirect: {
        name: 'home ru-RU'
      }
    },
    {
      path: '/около',
      name: 'about ru-RU',
      component: () => import('@/views/about.vue'),
      meta: {
        language: 'ru-RU',
        navigationButton: true
      }
    },
    {
      path: '/ru-RU/:selector',
      name: 'element ru-RU',
      component: () => import('@/views/element-info.vue'),
      meta: {
        language: 'ru-RU',
        navigationButton: true
      }
    },



    {
      path: '/:selector',
      name: 'element',
      component: () => import('@/views/element-info.vue'),
      meta: {
        navigationButton: true
      }
    },

    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
