import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/lesson/:lesson',
    name: 'Lesson',
    component: () => import('@/pages/Lesson.vue'),
  },
]

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

let router = createRouter({
  history: createWebHistory('/training'),
  routes,
})

export default router
