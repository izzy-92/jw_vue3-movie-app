import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/pages/Home'
import Movie from '~/pages/Movie'
import About from '~/pages/About'
import NotFound from '~/pages/NotFound'

// 기본구성옵션
export default createRouter({
  // Hash모드(#)
  history: createWebHashHistory(),
  // 페이지 이동 시 항상 스크롤은 상단위치
  scrollBehavior() {
    return { top: 0 }
  },
  // pages
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:dynamicID',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})