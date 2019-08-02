import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home')
    },
    {
      name: 'Pages',
      path: '/pages',
      redirect: '/pages/',
      component: DefaultLayout,
      children: [
        {
          name: 'Main',
          path: '',
          component: () => import('@/views/pages/Main')
        }
      ]
    }
  ]
})
