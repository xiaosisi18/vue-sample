import Vue from 'vue'
import Router from 'vue-router'
import Radios from '@/components/radios'
import HelloWorld from '@/components/HelloWorld'
import Uniquel from '@/components/uniquel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Radios',
      component: Radios
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/uniquel',
      name:'uniquel',
      component: Uniquel
    }
  ]
})
