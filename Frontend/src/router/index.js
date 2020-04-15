import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Task',
    component: () => import('../views/Task.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
