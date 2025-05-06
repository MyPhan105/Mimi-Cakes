<template>
  <div id="app">
    <Navbar /> <!-- This will render your Navbar component -->
    
    <!-- The router-view will render the component associated with the current route -->
    <router-view></router-view> <!-- This is where Signup.vue will be rendered -->
    
    <Footer /> <!-- This will render your Footer component -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* Your styles here */
</style>
