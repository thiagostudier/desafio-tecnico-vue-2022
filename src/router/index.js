import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

const DEFAULT_TITLE = 'Tela Inicial'
router.beforeEach((to, from, next) => {
  /**
   * Use next tick to handle router history correctly
   * see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
   */
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE

    next()
  })
})

export default router
