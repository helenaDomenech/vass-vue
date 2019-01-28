import Vue from 'vue'
import Router from 'vue-router'
import EcHome from '@/components/ec-home'
import chart from '@/components/chart'
import ecCube from '@/components/ec-cube'
import ecTodo from '@/components/ec-todo'

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
      },
      {
        path: '/cube',
        name: 'cube',
        component: ecCube
      },
      {
        path: '/todo',
        name: 'todo',
        component: ecTodo
      }
    ]
})