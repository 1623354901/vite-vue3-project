import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import routes from './routes'


const router = createRouter({
  history: createWebHistory(),
  routes, 
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  if (to.meta.requireAuth) next('notfound')
  next()
})

// 解析守卫刚好会在导航被确认之前、所有组件内守卫和异步路由组件被解析之后调用，可确保访问自定义meta属性
router.beforeResolve((to, from, next) => {
  next()
})

router.afterEach((to, from, failure) => {
})



export default router;