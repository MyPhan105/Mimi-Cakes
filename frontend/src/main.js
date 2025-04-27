import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'  // Import the router
import '@fortawesome/fontawesome-free/css/all.min.css'


createApp(App)
  .use(router)  // Tell Vue to use the router
  .mount('#app')
