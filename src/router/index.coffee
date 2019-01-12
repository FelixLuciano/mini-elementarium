import Vue from 'vue'
import Router from 'vue-router'


Vue.use Router

getRoute = (path) => require("@/router/routes/#{path}.vue").default


export default new Router

  routes: [
    path: '/'
    name: 'Home'
    component: getRoute 'home/index'
    meta:
      language: 'en'
      home: ''

  ,
    path: '/en'
    name: 'Start'
    component: getRoute 'home/index'
    meta:
      language: 'en'
      home: '/en'

  ,
    path: '/pt'
    name: 'Inicio'
    component: getRoute 'home/index'
    meta:
      language: 'pt'
      home: '/pt'

  ,
    path: '/ru'
    name: 'первый'
    component: getRoute 'home/index'
    meta:
      language: 'ru'
      home: '/ru'

  ,
    path: '/:elementName'
    name: 'Element'
    component: getRoute 'element/index'
    meta:
      language: 'en'
      home: ''

  ,
    path: '/en/:elementName'
    name: 'Chemical'
    component: getRoute 'element/index'
    meta:
      language: 'en'
      home: '/en'

  ,
    path: '/pt/:elementName'
    name: 'Elemento'
    component: getRoute 'element/index'
    meta:
      language: 'pt'
      home: '/pt'

  ,
    path: '/ru/:elementName'
    name: 'химическая'
    component: getRoute 'element/index'
    meta:
      language: 'ru'
      home: '/ru'

  ,
    path: '*'
    redirect: '/'
]
