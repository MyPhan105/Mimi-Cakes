<template>
    <div class="photo-slider-container">
      <button @click="prevSlide" class="nav-button prev">&lt;</button>
  
      <div class="photo-slider">
        <div class="slider-track" :style="sliderStyle">
          <div
            class="photo"
            v-for="(image, index) in imagesWithClones"
            :key="index"
          >
            <img :src="`/assets/${image}`" alt="Product Photo" />
            <div class="add-to-cart" @click="addToCart(image)">Add to Cart</div>
        </div>
        </div>
      </div>
  
      <button @click="nextSlide" class="nav-button next">&gt;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PhotoSlider',
    data() {
      return {
        images: [
          'Cake1.jpg',
          'Cake2.jpg',
          'Cake3.jpg',
          'Cake4.jpg',
        ],
        currentIndex: 0,
        transitioning: false,
      };
    },
    computed: {
      imagesWithClones() {
        // Clone the first and last images to create the infinite loop effect
        return [
          ...this.images.slice(-1), // Last image at the start
          ...this.images,
          ...this.images.slice(0, 1), // First image at the end
        ];
      },
      sliderStyle() {
        const slideWidth = 100 / 4; // 4 images visible at once
        const totalSlides = this.imagesWithClones.length;
        return {
          transform: `translateX(-${this.currentIndex * slideWidth}%)`,
          width: `${(totalSlides * 100) / 4}%`,
          transition: this.transitioning ? "transform 0.5s ease" : "none",
        };
      }
    },
    methods: {
      nextSlide() {
        if (this.transitioning) return;
        this.transitioning = true;
        this.currentIndex++;
        setTimeout(() => {
          if (this.currentIndex >= this.images.length + 1) {
            this.transitioning = false;
            this.currentIndex = 1; // Jump instantly to the real start
          } else {
            this.transitioning = false;
          }
        }, 500); // Same as transition duration
      },
      prevSlide() {
        if (this.transitioning) return;
        this.transitioning = true;
        this.currentIndex--;
        setTimeout(() => {
          if (this.currentIndex < 1) {
            this.transitioning = false;
            this.currentIndex = this.images.length; // Jump instantly to the real end
          } else {
            this.transitioning = false;
          }
        }, 500);
      },
      addToCart(image) {
      console.log(`${image} added to the cart!`);
      // Implement actual add to cart logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-slider-container {
    position: relative;
    width: 80%;  /* Adjust to fit your design */
    margin: 0 auto;
    margin-top: 20px;
  }
  
  .photo-slider {
    overflow: hidden;
  }
  
  .slider-track {
    display: flex;
    gap: 30px;
  }
  
  .photo {
    width: 100%; /* Ensure 4 images fit side by side */
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;  /* Center images */
  }
  
  .photo img {
    width: 100%;  /* Ensures the image takes up the full width of the container */
    height: 100%; /* Makes sure the height is the same as width */
    object-fit: cover; /* Ensures images are cropped to maintain aspect ratio */
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .photo:hover img {
    transform: scale(1.05); /* Pop-up effect */
  }
  

  .add-to-cart {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #7dc7c1; /* Default green */
  color: white;
  padding: 10px;
  border-radius: 5px;
  opacity: 0;
  width: 97%;
  text-align: center;
  transition: all 0.4s ease; /* Animate everything smoothly */
  z-index: 10;
  pointer-events: none;
  cursor: default;
  border: none;
}

/* When hover the photo */
.photo:hover .add-to-cart {
  bottom: -8px;
  opacity: 1;
  pointer-events: auto;
  cursor: pointer;
  background-color: #7dc7c1; /* Button stays green when hovering the photo */
  color: white;
  transform: translateX(-50%) translateY(-10px) scale(1.08); /* Move button up by 10px and scale it */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  border: none;
}



  
  .nav-button {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    border: none;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;
  }
  
  .prev {
    left: 0;
  }
  
  .next {
    right: 0;
  }
  
  .nav-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
