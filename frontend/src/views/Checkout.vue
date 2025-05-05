<template>
    <div class="checkout-page">
      <ShoppingCart :cart="cart" />
  
      <header>
        <br />
        <h1 class="checkout-heading">Review & Confirm</h1>
        <p class="checkout-subheading">Double-check your order before proceeding to payment</p>
      </header>
  
      <section class="checkout-summary">
        <h2 class="summary-title">Order Summary</h2>
        <ul class="checkout-list">
          <li v-for="(item, index) in cart" :key="index" class="checkout-item">
            <div>
              <span class="product-name">{{ item.name }}</span> -
              <span class="product-size">{{ item.size }}</span>
            </div>
            <div class="product-line">
              <span>${{ Number(item.price).toFixed(2) }} x {{ item.quantity }} = </span>
              <span class="product-total">${{ (Number(item.price) * Number(item.quantity || 0)).toFixed(2) }}</span>
            </div>
          </li>
        </ul>
  
        <div class="total-line">
          <strong>Total:</strong>
          <span class="total-price">${{ totalPrice.toFixed(2) }}</span>
        </div>
  
        <button class="confirm-button">Confirm Order</button>
      </section>
    </div>
  </template>
  
  <script>
  import ShoppingCart from '@/components/ShoppingCart.vue';
  
  export default {
    name: 'Checkout',
    components: {
      ShoppingCart
    },
    data() {
      return {
        cart: JSON.parse(localStorage.getItem('cart')) || []
      };
    },
    computed: {
      totalPrice() {
        return this.cart.reduce((sum, item) => {
          const price = Number(item.price);
          const quantity = Number(item.quantity || 0);
          return sum + price * quantity;
        }, 0);
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout-page {
    font-family: 'Poppins', sans-serif;
    color: #fff;
    background-color: #000;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .checkout-heading {
    font-size: 3rem;
    color: #7dc7c1;
    text-align: center;
    font-family: 'Caveat', cursive;
  }
  
  .checkout-subheading {
    font-size: 1.5rem;
    color: #eae2b0;
    text-align: center;
    margin-top: 10px;
    font-style: italic;
  }
  
  .checkout-summary {
    margin-top: 40px;
    width: 100%;
    max-width: 1000px;
    padding: 20px;
  }
  
  .summary-title {
    font-size: 2rem;
    color: #7dc7c1;
    margin-bottom: 20px;
  }
  
  .checkout-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .checkout-item {
    margin-bottom: 16px;
    border-bottom: 1px solid #7dc7c1;
    padding-bottom: 8px;
  }
  
  .product-line {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 1rem;
  }
  
  .product-total {
    font-weight: bold;
  }
  
  .total-line {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 1.25rem;
    font-weight: bold;
    color: #eae2b0;
  }
  
  .confirm-button {
    margin-top: 30px;
    padding: 10px 25px;
    background-color: #7dc7c1;
    color: #000;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .confirm-button:hover {
    background-color: #5aa9a2;
  }
  </style>