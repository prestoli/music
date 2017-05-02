import Vue from 'vue'
import Router from 'vue-router'
import roomTab from '@/components/roomTab'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'roomTab',
      component: roomTab
    }
    //,
    // {
    //   path: '/rrr',
    //   name: 'roomTab',
    //   component: roomTab
    // },
    // {
    //   path: '/',
    //   name: 'roomTab',
    //   component: roomTab
    // }
  ]
})
