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
          <!-- Iterate over the passed cart prop instead of cartItems -->
          <li v-for="(item, index) in cart" :key="index" class="cart-item">
            <div class="item-details">
              <span class="item-name">{{ item.name }} - {{ item.size }}</span>
              <span class="item-price">${{ item.price }}</span>
              <span class="item-qty">x{{ item.quantity || 1 }}</span>
              <span class="item-total">${{ item.price * (item.quantity || 1) }}</span>
            </div>
            <button class="delete-btn" @click.stop="removeItem(index)">🗑️</button>
          </li>
        </ul>

        <div class="cart-total">
          <strong>Total:</strong> ${{ totalPrice }}
        </div>
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
      return this.cart.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  background-color: #222;
  padding: 10px;
  border-radius: 8px;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.item-name,
.item-price,
.item-qty,
.item-total {
  color: #eae2b0;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ff6b6b;
}

.delete-btn:hover {
  color: #ff4b4b;
}

.cart-total {
  margin-top: 15px;
  text-align: right;
  color: #eae2b0;
}
</style>
  