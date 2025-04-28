import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' 
import About from '../views/About.vue'
import Order from '../views/Order.vue'; // Adjust the path if necessary

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/order', // This is the path for the order page
    name: 'Order',
    component: Order, // This links to your Order.vue page
  },

  {
    path: '/About', 
    name: 'About',
    component: About, 
  },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router
