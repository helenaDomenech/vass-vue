import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import chart from '@/components/chart'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/chart',
        name: 'chart',
        component: chart
      }
    ]
})