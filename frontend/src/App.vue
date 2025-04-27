<template>
  <div id="app">
    <header role="banner">
      <h1 id="logo-main">Mimi Cakes</h1> <!-- Logo text -->
    </header>

    <Navbar /> <!-- Navbar stays under the logo -->

    <router-view /> <!-- Page content goes here -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
/* Importing the font for the logo */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
/* Style for header banner (the logo) */
header[role="banner"] {
  text-align: center;
  padding: 20px 0 10px;
}

/* Add styling for the logo text */
#logo-main {
  font-size: 3.5rem;
  color: #eae2b0;
  font-family: 'Caveat', cursive;
  margin: 0;
}

/* Body background and padding */
body {
  background-color: #323030;
  margin-top: 70px; /* Space for the navbar (adjust as needed) */
}


</style>
