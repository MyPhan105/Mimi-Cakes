<template>
    <div class="home">
      <!-- Home page video -->
      <div class="video-container">
        <video ref="myVideo" autoplay loop muted playsinline class="fullscreen-video">
          <source src="@/assets/home-cactus.mov" type="video/quicktime" />
          <source src="@/assets/home-cactus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  
      <!-- Greenery Summer Text -->
      <div class="greenery-text">
        Greenery Summer
      </div>
  
      <!-- Order Now Button -->
      <router-link to="/order" class="order-btn">
        Order Now
      </router-link>

      <!-- Descriptive Paragraph -->
      <div>
        <h1 class="intro-heading" style="font-family: 'Playfair Display', serif; text-transform: uppercase;">
          Indulge in the irresistible flavors of Mimi Cakes!
          <span class="underline"></span>
        </h1>

        <div class="intro-flex">
          <div class="intro-text">
            <h2 style="font-family: 'Quicksand', sans-serif; color: #eae2b0; font-weight: bold;">
              Indulge in the Art of Dessert: Mimi Cakes for Every Occasion
            </h2>
            <br>
            <h2>
              Step into a sweet little wonderland of delicate floral cupcakes, beautifully crafted cakes, and so much more! 
              Our signature chiffon cakes, topped with dreamy Italian meringue buttercream, will melt in your mouth and take you to dessert heaven. 
              Each bite is a perfect balance of lightness and luxury, making every moment feel extra special.
            </h2> 
            <br>
            <h2>
              Why wait? Treat yourself to a slice of perfection with Mimi Cakes – where every bite is a work of art! Order now, 
              and let’s make your celebrations as unforgettable as your sweet tooth!
            </h2>
          </div>

          <div class="image-container">
            <img src="@/assets/Homepage1.jpg" alt="Bakery Image" />
          </div>
        </div>
      </div>

      <!-- Slider-->
      <PhotoSlider />


    </div>
  </template>
  
  <script>
  import PhotoSlider from '@/components/PhotoSlider.vue'; // import PhotoSlider

  export default {
    name: 'Home',
    components: {
    PhotoSlider, // register 
  },
    mounted() {
      // Access the video element using Vue's $refs
      const video = this.$refs.myVideo;
      video.playbackRate = 0.75; // Slow down the video to 75% of the original speed
    }
  }
  </script>
  
  <style scoped>
  /* Import the Sacramento font */
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
  /* Import the Quicksand font */
  @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
  /* Import the Playfair Display font */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');


  
  /* Full-screen video container */
  .video-container {
    position: relative;
    width: 100%;
    height: 70vh;
  }
  
  .fullscreen-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; /* Keeps the video in the background */
  }
  
  /* Order Now Button */
  .order-btn {
    position: absolute;
    top: 70vh; /* Adjusted position of the button */
    left: 50%;
    transform: translateX(-50%);
    background-color: #7dc7c1;
    color: white;
    padding: 15px 30px;
    font-size: 40px;
    border: none;
    border-radius: 5px;
    opacity: 0; /* Start invisible */
    animation: riseUp 0.9s ease-out forwards; /* Animation settings */
    cursor: pointer;
    text-decoration: none;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* stronger shadow */    
    transition: 
      background-color 0.3s ease, 
      color 0.3s ease,
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }
  
  .order-btn:hover {
    background-color: transparent;
    color: #7dc7c1;
    transform: translateX(-50%) scale(1.08); /* Keep X centering while scaling */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    border: 2px solid #7dc7c1;
  }
  
  /* Greenery Summer Text */
  .greenery-text {
    position: absolute;
    top: 50vh; /* Adjusted the text's position to move it down further */
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Sacramento';
    font-size: 80px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 0; /* Start invisible */
    animation: riseUp 0.9s ease-out forwards; /* Same animation as the button */
  }
  
    /* Animation keyframes */
  @keyframes riseUp {
    0% {
      transform: translateX(-50%) translateY(50px); /* Start lower */
      opacity: 0;
    }
    100% {
      transform: translateX(-50%) translateY(0); /* Rise to normal */
      opacity: 1;
    }
  }
  /* Intro Heading */
  .intro-heading {
    font-family: 'Quicksand', sans-serif;
    color: #ffffff;
    text-align: center;
    position: relative;
    top: 5vh; /* Adjusted position to place it properly below the video and above the paragraph */
    font-size: 36px;
  }
  
  .underline {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 5%;
    height: 2px;
    background-color: #ffffff;
  }
  

  /* Flexbox Layout for Text and Image */
  .intro-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 400px;
    flex-wrap: wrap;
    margin-top: 120px;
  }
  
  .intro-text {
    flex: 1;
    padding-right: 20px;
    text-align: left;
    color: white;
  }
  
  .intro-text h2 {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    font-size: 25px;

    text-decoration-color: #eae2b0;
    text-underline-offset: 30px;
    line-height: 1.5;
  }
  
  .image-container img {
    width: 110%;
    max-width: 500px;
    max-height: 500px;
    height: auto;
    border-radius: 10px;
  }
  
  /* Mobile responsiveness adjustments */
  @media (max-width: 768px) {
    .intro-flex {
      flex-direction: column;
      align-items: center;
      margin-top: 2px;
    }
  
    .intro-text {
      text-align: center;
      padding-right: 2;
      margin-bottom: 20px;
    }
  
    .image-container img {
      max-width: 100%;
    }
  
    .intro-heading {
      font-size: 28px;
    }
  
    .intro-text h2 {
      font-size: 20px;
    }
  }
  </style>
  