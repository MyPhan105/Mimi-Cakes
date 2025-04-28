<template>
    <nav id="navbar-primary" class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-primary-collapse" aria-controls="navbar-primary-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbar-primary-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>  <!-- "Home" button with router-link -->
            </li>
            <li class="nav-item"><router-link to="/order" class="nav-link">Order</router-link></li> <!-- "Order" button with router-link -->
            <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
            <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Style for navbar text and background */
  #navbar-primary.navbar-light {
    background-color: #000000; /* Black background for navbar */
    border: none;
    width: 100%;
    z-index: 9999;
  }
  
  #navbar-primary .navbar-nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  #navbar-primary .navbar-nav li {
    display: inline-block;
  }
  
  #navbar-primary .navbar-nav li a {
    padding: 10px 30px;
    transition: all 0.5s ease;
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
  }
  
  /* Custom underline */
  #navbar-primary .navbar-nav li a::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #7dc7c1;
    transition: width 0.4s ease;
    margin-top: 8px;
  }
  
  /* Hover effect */
  #navbar-primary .navbar-nav li a:hover {
    transform: translateY(-3px);
    color: #7dc7c1;
  }
  
  #navbar-primary .navbar-nav li a:hover::after {
    width: 60%;
  }
  </style>
  