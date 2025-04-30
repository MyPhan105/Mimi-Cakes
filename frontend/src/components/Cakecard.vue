<!-- CakeCard.vue -->
<template>
    <div class="product-card">
      <div class="photo">
        <img :src="product.image" :alt="product.name" />
        <div class="add-to-cart" @click="addToCart(product)">Add to Cart</div>
      </div>
      <h3>{{ product.name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CakeCard',
    props: {
      product: Object, // Pass the product object from the parent component
    },
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product); // Emit event to the parent component
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    background-color: transparent;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 10px;
  }
  
  .photo {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  
  .photo img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
    display: block;
  }
  
  .photo:hover img {
    transform: scale(1.05);
  }
  
  .add-to-cart {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #7dc7c1;
    color: white;
    padding: 10px;
    border-radius: 5px;
    opacity: 0;
    width: 97%;
    text-align: center;
    transition: all 0.4s ease;
    z-index: 10;
    pointer-events: none;
    cursor: default;
    border: none;
  }
  
  .photo:hover .add-to-cart {
    bottom: -8px;
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
    background-color: #7dc7c1;
    color: white;
    transform: translateX(-50%) translateY(-10px) scale(1.08);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    border: none;
  }
  
  .product-card h3 {
    margin-top: 12px;
    font-size: 1.2rem;
    color: #eae2b0;
    text-align: center;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(125, 199, 193, 0.4);
  }
  </style>
  