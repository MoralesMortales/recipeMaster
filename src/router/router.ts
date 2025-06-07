import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/mainView.vue'  // Ajusta la ruta según tu proyecto

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
