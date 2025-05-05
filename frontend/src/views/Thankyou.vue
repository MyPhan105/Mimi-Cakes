<template>
    <div class="thank-you-page">
      <h1 class="thank-you-heading">Thank You for Your Order!</h1>
      <p class="thank-you-message">Your order has been successfully placed. We'll process it shortly and notify you once it's ready.</p>
      <router-link to="/" class="home-button">Return to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ThankYou',
  };
  </script>
  
  <style scoped>
  .thank-you-page {
    text-align: center;
    color: #fff;
    background-color: #000;
    padding: 50px;
  }
  
  .thank-you-heading {
    font-size: 3rem;
    color: #7dc7c1;
    font-family: 'Caveat', cursive;
  }
  
  .thank-you-message {
    font-size: 1.5rem;
    color: #eae2b0;
    margin-top: 20px;
  }
  
  .home-button {
    margin-top: 30px;
    background-color: #7dc7c1;
    color: #000;
    padding: 12px 30px;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    text-decoration: none;
    display: inline-block;
  }
  
  .home-button:hover {
    background-color: #5da39e;
  }
  </style>
  