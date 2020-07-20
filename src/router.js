import Vue from 'vue'
import store from './store'
import Router from 'vue-router'

Vue.use(Router);

const router =  new Router ({
  mode: 'history', 
  routes: [
    { path: '/login', component: () => import('@/views/Login') },
    {
      path: '/admin',
      component: () => import('@/views/Admin'),
      children: [
        { path: 'examples', name: 'components', component: () => import('@/views/example/list') },
        { path: 'example', component: () => import('@/views/example/input') },
        { path: 'courses', component: () => import('@/views/course/Courses') },
        { path: 'help', component: () => import('@/views/help/help') },
        { path: 'test', component: () => import('@/views/help/test') },
      ]
    }
  ]
})

router.afterEach ((to) => {
  store.dispatch('changeRouter', { path: to.path })
})

export default router;