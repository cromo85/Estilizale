import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/HomeComponent'
import Greet from '@/components/GreetComponent'
import Text from '@/components/text/TextComponent'
import Border from '@/components/border/BorderComponent'
import Basic from '@/components/basic/BasicComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: Home
    },
    {
      path: '/greet',
      name: 'GreetComponent',
      component: Greet
    },
    {
      path: '/text',
      name: 'TextComponent',
      component: Text
    },
    {
      path: '/border',
      name: 'BorderComponent',
      component: Border
    },
    {
      path: '/basic',
      name: 'BasicComponent',
      component: Basic
    }
  ],
  mode: "history"
})
