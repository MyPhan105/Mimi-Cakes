import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'  // Adjust the path if necessary

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // You can add more routes for other components here
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router
