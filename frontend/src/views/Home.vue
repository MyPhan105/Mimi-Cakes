<template>
    <div class="home">
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
  