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
      name: 'home en',
      component: () => import('@/views/periodic-table.vue'),
      meta: {
        language: 'en',
        searchBar: true
      }
    },
    {
      path: '/en',
      redirect: {
        name: 'home en'
      }
    },
    {
      path: '/about',
      name: 'about en',
      component: () => import('@/views/about.vue'),
      meta: {
        language: 'en',
        backButton: true
      },
    },
    {
      path: '/en/:selector',
      name: 'element en',
      component: () => import('@/views/element-info.vue'),
      meta: {
        language: 'en',
        backButton: true
      }
    },


    {
      path: '/',
      name: 'home pt',
      component: () => import('@/views/periodic-table.vue'),
      meta: {
        language: 'pt',
        searchBar: true
      }
    },
    {
      path: '/pt',
      redirect: {
        name: 'home pt'
      }
    },
    {
      path: '/sobre',
      name: 'about pt',
      component: () => import('@/views/about.vue'),
      meta: {
        language: 'pt',
        backButton: true
      }
    },
    {
      path: '/pt/:selector',
      name: 'element pt',
      component: () => import('@/views/element-info.vue'),
      meta: {
        language: 'pt',
        backButton: true
      }
    },


    {
      path: '/',
      name: 'home ru',
      component: () => import('@/views/periodic-table.vue'),
      meta: {
        language: 'ru',
        searchBar: true
      }
    },
    {
      path: '/ru',
      redirect: {
        name: 'home ru'
      }
    },
    {
      path: '/около',
      name: 'about ru',
      component: () => import('@/views/about.vue'),
      meta: {
        language: 'ru',
        backButton: true
      }
    },
    {
      path: '/ru/:selector',
      name: 'element ru',
      component: () => import('@/views/element-info.vue'),
      meta: {
        language: 'ru',
        backButton: true
      }
    },



    {
      path: '/:selector',
      name: 'element',
      component: () => import('@/views/element-info.vue'),
      meta: {
        backButton: true
      }
    },

    {
      path: '*',
      redirect: '/'
    }
  ]
})
