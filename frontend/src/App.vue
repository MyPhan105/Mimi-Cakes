<template>
  <div id="app">
    <header role="banner">
      <h1 id="logo-main">Mimi Cakes</h1> <!-- Logo text -->
    </header>

    <Navbar /> <!-- Navbar stays under the logo -->

    <router-view /> <!-- Page content goes here -->
    <Footer /> <!-- Add the footer here -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style src="./style.css" />


