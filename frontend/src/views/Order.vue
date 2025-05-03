<template>
  <div class="order-page">
    <ShoppingCart :cart="cart" />

    <header>
      <br />
      <h1 class="order-heading">Place Your Order</h1>
      <p class="order-subheading">Choose your favorite treats below</p>
    </header>

    <!-- Cakes Section -->
    <section class="order-section">
      <h2 class="category-title">Cakes</h2>
      <div class="products-grid">
        <CakeCard
          v-for="(cake, index) in cakes"
          :key="'cake-' + index"
          :product="cake"
          @add-to-cart="addToCart"
        />
      </div>
      <ShoppingCart :cart="cart" /> <!-- Pass the cart here -->
    </section>

    <!-- Similar sections for cupcakes and bouquets -->
  </div>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart.vue";
import CakeCard from "@/components/CakeCard.vue"; // Import CakeCard component

export default {
  name: "Order",
  components: {
    ShoppingCart,
    CakeCard, // Register CakeCard component
  },
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      cakes: [
        { name: "Lavender Dream", 
          image: "/assets/Cake4.jpg",
          sizes: [
          { label: "5 inch", price: 90 },
          { label: "6 inch", price: 120 },
          { label: "8 inch", price: 175 },
          ],
         },

        { name: "Succulent Island",
          image: "/assets/Cake3.jpg",
          sizes: [
          { label: "5 inch", price: 90 },
          { label: "6 inch", price: 120 },
          { label: "8 inch", price: 175 },
          ],
        },

        { name: "Dreammy Fairy",
          image: "/assets/Cake1.jpg",
          sizes: [
          { label: "5 inch", price: 90 },
          { label: "6 inch", price: 120 },
          { label: "8 inch", price: 175 },
          ],
        },
      ],
      // cupcakes and bouquets data...
    };
  },
  methods: {
    addToCart(selectedSize) {
      console.log(`${selectedSize.name} - ${selectedSize.size} added to cart!`);

      // Get the current cart from localStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the item with this size already exists in the cart
      const existingItem = cart.find(
        (item) => item.name === selectedSize.name && item.size === selectedSize.size
      );

      if (existingItem) {
        // If the item exists, increment its quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new item, push it with a quantity of 1
        cart.push({ ...selectedSize, quantity: 1 });
      }

      // Update the localStorage with the new cart
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Update the cart in the component's state to reflect the changes
      this.cart = cart;
    },
  },
};
</script>


<style scoped>
/* General Page Styles */
.order-page {
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background-color: #000;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header */
.order-heading {
  font-size: 3rem;
  color: #7dc7c1;
  text-align: center;
  font-family: 'Caveat', cursive;
}

.order-subheading {
  font-size: 1.5rem;
  color: #eae2b0;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
}

/* Category Section */
.order-section {
  margin-top: 60px;
  width: 100%;
  max-width: 1400px;
  padding: 20px;
}

.category-title {
  font-size: 2rem;
  color: #7dc7c1;
  margin-bottom: 20px;
  text-align: left;
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
}
</style>