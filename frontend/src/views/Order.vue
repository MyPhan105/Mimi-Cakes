<template>
  <div class="order-page">
    <ShoppingCart />

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
        { name: "Lavender Dream", image: "/assets/Cake4.jpg" },
        { name: "Succulent Island", image: "/assets/Cake3.jpg" },
        { name: "Dreammy Fairy", image: "/assets/Cake1.jpg" },
      ],
      // cupcakes and bouquets data...
    };
  },
  methods: {
    addToCart(product) {
      console.log(`${product.name} added to cart!`);
      this.cart.push(product);// Logic to add product to cart
      localStorage.setItem('cart', JSON.stringify(this.cart)); // persist cart
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

/* CakeCard Component Styles 
.product-card {
  background-color: #111;
  border: 1px solid #7dc7c1;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
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

/* Add to Cart Button Styles 
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

/* Show add-to-cart button on hover 
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

/* Hover Effects */
.photo {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.photo:hover img {
  transform: scale(1.05);
}


</style>