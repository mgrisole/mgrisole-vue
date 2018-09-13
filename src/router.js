import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About me',
      component: Home
    },
    {
      path: '/typograph',
      name: 'Typograph',
      component: () => import('./views/Typograph.vue')
    },
    {
      path: '/about',
      name: 'Say hi',
      component: () => import('./views/About.vue')
    }
  ]
})
