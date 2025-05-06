import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' 
import About from '../views/About.vue'
import Order from '../views/Order.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue' 
import Login from '../views/Login.vue'
import SignUp from '../views/Signup.vue'

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
    path: '/about', 
    name: 'About',
    component: About, 
  },

  {
    path: '/blog', 
    name: 'Blog',
    component: Blog, 
  },

  {
    path: '/contact', 
    name: 'Contact',
    component: Contact, 
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
  },

  {
    path: '/order-confirmation',
    name: 'ThankYou',
    component: () => import('../views/Thankyou.vue'), 
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,  // Correct path to SignUp component in views
  },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

// Navigation guard to protect checkout page
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') // Check if the user is logged in

  if (to.path === '/checkout' && !token) {
    localStorage.setItem('redirectAfterLogin', '/checkout') // Store the intended route
    next('/login') // Redirect to login page if not authenticated
  } else {
    next() // Allow navigation to the route
  }
})

export default router;
