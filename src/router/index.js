import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/views/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    }
  ]
})