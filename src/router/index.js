import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// import ImgList from '@/components/ImgList'
// require('../components/ImgList').default = ImgList

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/imgList',
          name: 'ImgList',
          component: require('../components/ImgList').default
        },
        {
          path: '/workspace',
          name: 'WorkSpace',
          component: require('../components/WorkSpace').default
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: require('../components/Login').default
    }
  ]
})
