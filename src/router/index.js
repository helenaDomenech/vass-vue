import Vue from 'vue'
import Router from 'vue-router'
import EcHome from '@/components/ec-home'
import chart from '@/components/chart'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: EcHome
      },
      {
        path: '/chart',
        name: 'chart',
        component: chart
      }
    ]
})