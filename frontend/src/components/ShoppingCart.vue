<template>
    <div 
      class="shopping-cart" 
      :class="{ expanded: isExpanded }"
      @click="toggleCart"
    >
      <div class="cart-content">
        <span v-if="!isExpanded" class="basket-text">Your Cart</span>
        <div v-else>
          <h2>Your Cart</h2>
          <ul>
            <li v-for="(item, index) in cartItems" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShoppingCart",
    data() {
      return {
        isExpanded: false,
        cartItems: ["Vanilla Cake", "Rose Cupcake"], 
      };
    },
    methods: {
      toggleCart() {
        this.isExpanded = !this.isExpanded;
      },
    },
  };
  </script>
  
  <style scoped>
  .shopping-cart {
    position: fixed;
    top: 20%;
    left: 0;
    height: 200px;
    width: 80px;
    background-color: #7dc7c1;
    color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    transition: width 0.3s ease;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .shopping-cart.expanded {
    width: 300px;
  }
  
  .cart-content {
    padding: 10px;
    text-align: left;
  }
  
  .basket-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-weight: bold;
    font-size: 1rem;
    color: white;
    transform: rotate(180deg);
  }
  
  .cart-content h2 {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
  }
  
  .cart-content ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .cart-content li {
    margin-bottom: 8px;
  }
  </style>
  