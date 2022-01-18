import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

// 기본구성옵션
export default createRouter({
  // Hash모드(#)
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})