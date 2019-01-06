import Vue from 'vue'
import Router from 'vue-router'


Vue.use Router

getRoute = (path) => require("@/router/routes/#{path}.vue").default


export default new Router

  routes: [
    path: '/'
    name: 'Home'
    component: getRoute 'home/index'

  ,
    path: '/:elementName'
    name: 'Element'
    component: getRoute 'element/index'

  ,
    path: '*'
    redirect: '/'
]
