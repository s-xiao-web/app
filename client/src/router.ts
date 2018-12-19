import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '/home',
      component: resolve => require( ['./views/home.vue'], resolve )
    },
    {
      path: '/user',
      name: '/user',
      component: resolve => require( ['./views/user.vue'], resolve )
    },
    {
      path: '/category',
      name: '/category',
      component: resolve => require( ['./views/category.vue'],resolve )
    },
    {
      path: '/other',
      name: '/other',
      component:resolve => require( ['./views/other.vue'], resolve)
    },
    {
      path: "/recommend",
      name: "/recommend"
    },
    {
      path: "/food",
      name: "/food"
    },
    {
      path: "/menu",
      name: "/menu"
    },
    {
      path: "/comment",
      name: "/comment"
    },
    {
      path: "/collection",
      name: "/collection"
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('getRouterFn', to.name)
  next()
})

export default router