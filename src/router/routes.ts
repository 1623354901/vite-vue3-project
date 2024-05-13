import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { requireAuth: false }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { requireAuth: false }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index.vue'),
    meta: { requireAuth: false }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: () => import('@/views/not-found/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'home',
    // component: () => import('@/views/not-found/index.vue'),
  }
]

export default routes