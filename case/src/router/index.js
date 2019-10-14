import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Administration from "@/components/Administration"
import Journal from "@/components/Journal"
import LogDetails from "@/components/LogDetails"
import Abnormallog from "@/components/Abnormallog"
import Monitoring from '@/components/Monitoring'
Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Administration',
      name: 'Administration',
      component: Administration
    },
    {
      path: '/Journal',
      name: 'Journal',
      component: Journal
    },
    {
      path: '/LogDetails',
      name: 'LogDetails',
      component: LogDetails
    },
    {
      path:'/Abnormallog',
      name:'Abnormallog',
      component:Abnormallog
    },
    {
      path:'/Monitoring',
      name:'Monitoring',
      component:Monitoring
    }
  ]
})
