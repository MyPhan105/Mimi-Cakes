<template>
  <div class="shopping-cart" :class="{ expanded: isExpanded }" @click="toggleCart">
    <div class="cart-content">
      <span v-if="!isExpanded" class="basket-text">Your Cart</span>
      <div v-else>
        <h2>Your Cart</h2>
        <ul>
          <li v-for="(item, index) in cart" :key="index" class="cart-item">
            <div class="cart-item-details">
              <div>
                <span class="product-name">{{ item.name }}</span> -
                <span class="product-size">{{ item.size }}</span>
              </div>
              <div class="cart-price-line">
  <span>${{ Number(item.price).toFixed(2) }} x {{ item.quantity }} =</span>
  <span class="product-total">
    ${{ (Number(item.price) * Number(item.quantity || 0)).toFixed(2) }}
  </span>
</div>
            </div>
            <button class="remove-x" @click.stop="removeItem(index)">×</button>
          </li>
        </ul>

        <hr class="divider" />

        <div class="cart-summary">
  <div class="subtotal-line">
    <strong>Subtotal:</strong>
    <span class="subtotal-price">${{ totalPrice.toFixed(2) }}</span>
  </div>
  <span class="item-count">{{ totalItems }} item<span v-if="totalItems > 1">s</span></span>
</div>

        <!-- Checkout Button -->
        <router-link to="/checkout" class="checkout-button-wrapper" @click.stop>
          <button class="checkout-button">Checkout</button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => {
        const price = Number(item.price);
        const quantity = Number(item.quantity || 0);
        return sum + price * quantity;
      }, 0);
    },
    totalItems() {
      return this.cart.reduce((count, item) => count + Number(item.quantity || 0), 0);
    },
  },
  methods: {
    toggleCart() {
      this.isExpanded = !this.isExpanded;
    },
    removeItem(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    goToCheckout() {
    alert("Redirecting to checkout..."); // Replace with actual logic or route
  },
  },
};
</script>

<style scoped>
.shopping-cart {
  position: fixed;
  top: 180x;
  left: 0;
  min-height: 200px;
  max-height: 80vh;
  overflow-y: auto;
  width: 50px;
  background-color: #7dc7c1;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  transition: width 0.3s ease;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000; 
}

.shopping-cart.expanded {
  width: 320px;
}

.cart-content {
  padding: 10px;
  text-align: left;
  width: 100%;
}

.basket-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 1.5rem;
  color: white;
  transform: rotate(180deg);
  margin-top: 32px; 
  padding: 6px 0; /* ensures vertical padding only */
  text-align: center;
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

.cart-item {
  position: relative;
  margin-bottom: 12px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.95rem;
}

.cart-item-details {
  flex: 1;
}

.product-total {
  font-weight: bold;
}

.remove-x {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 1.7rem;
  color: white;
  cursor: pointer;
  padding: 4px;
  transition: color 0.3s;

}

.remove-x:hover {
  color: #ff3b3b;
}

.divider {
  border-top: 3px solid #ffffff;
  margin: 10px 0;
}

.cart-summary {
  font-size: 1rem;
  font-weight: 500;
  margin-top: 10px;
}

.subtotal-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subtotal-price {
  font-weight: bold;
  padding-right: 25px;
}

.item-count {
  display: block;
  margin-top: 4px;
  text-align: left;
  padding-left: 2px;
}
.cart-price-line {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.checkout-button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  text-decoration: none;
}

.checkout-button {
  background-color: #ffffff;
  color: #7dc7c1;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.checkout-button:hover {
  background-color: #f0f0f0;
}


</style>
