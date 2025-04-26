<template>
    <div class="home">

      <!-- Greenery Summer Text -->
      <div class="greenery-text">
        Greenery Summer
      </div>
  
      <!-- Order Now Button -->
      <router-link to="/order" class="order-btn">
        Order Now
      </router-link>

      <!-- Home page video -->
      <video ref="myVideo" autoplay loop muted playsinline class="fullscreen-video">
        <source src="@/assets/home-cactus.mov" type="video/quicktime" />
        <source src="@/assets/home-cactus.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    mounted() {
      // Access the video element using Vue's $refs
      const video = this.$refs.myVideo;
      video.playbackRate = 0.75;  // Slow down the video to 50% of the original speed
    }
  }
  </script>
  
  <style scoped>

  /* Import the Sacramento font */
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

  /* Full-screen video */
  .fullscreen-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    object-fit: cover;
    z-index: -1; /* Keeps the video in the background */
  }
  
/* Order Now Button */
.order-btn {
  position: absolute;
  top: 380px; /* Adjust the position as needed */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%);
  background-color: #7dc7c1; /* Initial button color */
  color: white;
  padding: 10px 20px;
  font-size: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none; /* Remove underline */
  z-index: 1; /* Ensure button is on top of the video */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
}

.order-btn:hover {
  background-color: transparent; /* Transparent background on hover */
  color: #7dc7c1; /* Change text color on hover to match the original button color */
  border: 2px solid #7dc7c1; /* Add border on hover to maintain visibility */
}


/* Greenery Summer Text */
.greenery-text {
  position: absolute;
  top: 500%; /* Adjust the position as needed */
  left: 50%;
  transform: translateX(-50%); /* Center the text horizontally */
  font-family: 'Sacramento';/* Handwritten font */
  font-size: 80px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Optional shadow for better visibility */

}


  .home {
    position: relative;
    z-index: 1; /* Ensures other content is above the video */
    text-align: center;
    padding: 20px;
  }
  
  .home h1 {
    color: white; /* Adjust text color */
  }
  </style>
  