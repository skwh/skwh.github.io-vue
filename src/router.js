import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import ContactMe from './views/ContactMe'
import Portfolio from './views/Portfolio'
import Project from './views/Project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact-me',
      component: ContactMe
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:id',
      component: Project
    }
  ]
})
