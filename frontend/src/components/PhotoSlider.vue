<template>
    <div class="photo-slider-container">
      <button @click="prevSlide" class="nav-button prev">&lt;</button>
  
      <div class="photo-slider">
        <div class="slider-track" :style="sliderStyle">
          <div
            class="photo"
            v-for="(image, index) in images"
            :key="index"
          >
            <img :src="`/assets/${image}`" alt="Product Photo" />
            <div class="add-to-cart">Add to Cart</div>
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
      };
    },
    methods: {
        prevSlide() {
            // Move the last image to the first position
            this.images.unshift(this.images.pop());
        },
        nextSlide() {
            // Move the first image to the last position
            this.images.push(this.images.shift());
        },
    },
    computed: {
      sliderStyle() {
        const slideWidth = 100 / 4; // 4 photos visible
        return {
          transform: `translateX(-${this.currentIndex * slideWidth}%)`,
          width: `${(this.images.length * 100) / 4}%`,
        };
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
    transition: transform 0.3s ease;
    gap: 30px; 
  }
  
  .photo {
    width: 25%; /* Ensure 4 images fit side by side */
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
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    border-radius: 5px;
    display: none;
  }
  
  .photo:hover .add-to-cart {
    display: block;
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
  