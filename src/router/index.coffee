import Vue from 'vue'
import Router from 'vue-router'


Vue.use Router

getRoute = (path) => require("@/router/routes/#{path}.vue").default


export default new Router

  mode: 'history'

  routes: [
      path: '/'
      name: 'Home'
      component: getRoute 'home/index'

    ,
      path: '*'
      redirect: '/'
  ]
