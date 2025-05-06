<template>
    <div class="checkout-page">
      <ShoppingCart :cart="cart" />
  
      <header>
        <br />
        <h1 class="checkout-heading">Checkout</h1>
        <p class="checkout-subheading">Review your order and choose your delivery option</p>
      </header>
  
      <div class="options-section">
        <label>
          <input type="radio" value="pickup" v-model="deliveryOption" /> Pickup
        </label>
        <label>
          <input type="radio" value="delivery" v-model="deliveryOption" /> Delivery
        </label>
      </div>
  
      <!-- Pickup Section -->
      <div v-if="deliveryOption === 'pickup'" class="pickup-section">
        <label for="pickup-date">Pickup Date:</label>
        <input type="date" id="pickup-date" v-model="pickupDate" />
  
        <label for="pickup-time">Pickup Time:</label>
        <input type="time" id="pickup-time" v-model="pickupTime" />
      </div>
  
      <!-- Delivery Section -->
      <div v-if="deliveryOption === 'delivery'" class="delivery-section">
        <label for="delivery-date">Delivery Date:</label>
        <input type="date" id="delivery-date" v-model="deliveryDate" />
  
        <label for="delivery-time">Delivery Time:</label>
        <input type="time" id="delivery-time" v-model="deliveryTime" />
      </div>
  
      <hr class="divider" />
  
      <!-- Card Info Section -->
      <div class="card-info-section">
        <h3>Enter Your Payment Information</h3>
        <label for="card-number">Card Number:</label>
        <input type="text" id="card-number" v-model="cardNumber" placeholder="1234 5678 9876 5432" />
  
        <label for="expiry-date">Expiration Date:</label>
        <input type="month" id="expiry-date" v-model="expiryDate" />
  
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" v-model="cvv" placeholder="123" />
  
        <div v-if="paymentError" class="payment-error">{{ paymentError }}</div>
      </div>
  
      <hr class="divider" />
  
      <div class="summary-section">
        <div class="summary-line">
          <strong>Subtotal:</strong>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="summary-line">
          <strong>Tax (8.25%):</strong>
          <span>${{ tax.toFixed(2) }}</span>
        </div>
        <div class="summary-line total">
          <strong>Total:</strong>
          <span>${{ total.toFixed(2) }}</span>
        </div>
      </div>
  
      <button class="confirm-button" @click="confirmOrder">Confirm Order</button>
    </div>
  </template>
  
  <script>
  import ShoppingCart from '@/components/ShoppingCart.vue';
  
  export default {
    name: 'Checkout',
    components: {
      ShoppingCart,
    },
    data() {
      return {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        deliveryOption: 'pickup', // Default option
        pickupDate: '',
        pickupTime: '',
        deliveryDate: '',
        deliveryTime: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        paymentError: '',
      };
    },
    computed: {
      subtotal() {
        return this.cart.reduce((sum, item) => {
          const price = Number(item.price);
          const quantity = Number(item.quantity || 0);
          return sum + price * quantity;
        }, 0);
      },
      tax() {
        return this.subtotal * 0.0825;
      },
      total() {
        const deliveryFee = this.deliveryOption === 'delivery' ? 20 : 0;
        return this.subtotal + this.tax + deliveryFee;
      },
    },
    methods: {
      confirmOrder() {
        if (this.deliveryOption === 'pickup') {
          if (!this.pickupDate || !this.pickupTime) {
            alert('Please select pickup date and time.');
            return;
          }
        } else if (this.deliveryOption === 'delivery') {
          if (!this.deliveryDate || !this.deliveryTime) {
            alert('Please select delivery date and time.');
            return;
          }
        }
  
        if (!this.cardNumber || !this.expiryDate || !this.cvv) {
          this.paymentError = 'Please enter your card details.';
          return;
        }
  
        const orderDetails = {
          cart: this.cart,
          deliveryOption: this.deliveryOption,
          date: this.deliveryOption === 'pickup' ? this.pickupDate : this.deliveryDate,
          time: this.deliveryOption === 'pickup' ? this.pickupTime : this.deliveryTime,
          total: this.total,
          payment: {
            cardNumber: this.cardNumber,
            expiryDate: this.expiryDate,
            cvv: this.cvv,
          },
        };
  
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        localStorage.removeItem('cart');
        this.$router.push({ name: 'ThankYou' });
      },
    },
    created() {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.setItem('redirectAfterLogin', this.$route.fullPath);
        this.$router.push('/login');
      }
    },
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
  
  .options-section {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    font-size: 1.2rem;
  }
  
  .pickup-section,
  .delivery-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
  }
  
  .card-info-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
  }
  
  .card-info-section label {
    font-weight: 600;
  }
  
  .card-info-section input {
    padding: 8px;
    font-size: 1rem;
  }
  
  .payment-error {
    color: red;
    margin-top: 10px;
    font-size: 1rem;
  }
  
  .summary-section {
    margin-top: 30px;
    width: 100%;
    max-width: 400px;
    border-top: 2px solid #7dc7c1;
    padding-top: 20px;
  }
  
  .summary-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
  
  .summary-line.total {
    font-size: 1.3rem;
    font-weight: bold;
  }
  
  .confirm-button {
    margin-top: 30px;
    background-color: #7dc7c1;
    color: #000;
    padding: 12px 30px;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .confirm-button:hover {
    background-color: #5da39e;
  }
  </style>
  