import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'  // Import the router

createApp(App)
  .use(router)  // Tell Vue to use the router
  .mount('#app')
