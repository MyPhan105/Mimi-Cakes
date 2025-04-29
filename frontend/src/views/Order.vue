<template>
  <div class="order-page">

    <ShoppingCart />

    <header>
      <br>
      <h1 class="order-heading">Place Your Order</h1>
      <p class="order-subheading">Choose your favorite treats below</p>
    </header>

    <!-- Cakes Section -->
    <section class="order-section">
      <h2 class="category-title">Cakes</h2>
      <div class="products-grid">
        <div v-for="(cake, index) in cakes" :key="'cake-' + index" class="product-card">
          <img :src="cake.image" :alt="cake.name" />
          <h3>{{ cake.name }}</h3>
        </div>
      </div>
    </section>

    <!-- Cupcakes Section -->
    <section class="order-section">
      <h2 class="category-title">Cupcakes</h2>
      <div class="products-grid">
        <div v-for="(cupcake, index) in cupcakes" :key="'cupcake-' + index" class="product-card">
          <img :src="cupcake.image" :alt="cupcake.name" />
          <h3>{{ cupcake.name }}</h3>
        </div>
      </div>
    </section>

    <!-- Bouquets Section -->
    <section class="order-section">
      <h2 class="category-title">Bouquets</h2>
      <div class="products-grid">
        <div v-for="(bouquet, index) in bouquets" :key="'bouquet-' + index" class="product-card">
          <img :src="bouquet.image" :alt="bouquet.name" />
          <h3>{{ bouquet.name }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "Order",
  components: {
    ShoppingCart, // register ShoppingCart
  },
  data() {
    return {
      cakes: [
        { name: "Vanilla Dream", image: "@/assets/cakes/vanilla.jpg" },
        { name: "Chocolate Heaven", image: "@/assets/cakes/chocolate.jpg" },
        { name: "Red Velvet Love", image: "@/assets/cakes/redvelvet.jpg" },
      ],
      cupcakes: [
        { name: "Rose Cupcake", image: "@/assets/cupcakes/rose.jpg" },
        { name: "Birthday Cupcake", image: "@/assets/cupcakes/birthday.jpg" },
        { name: "Buttercream Swirl", image: "@/assets/cupcakes/buttercream.jpg" },
      ],
      bouquets: [
        { name: "Floral Cupcake Bouquet", image: "@/assets/bouquets/floral.jpg" },
        { name: "Spring Blooms", image: "@/assets/bouquets/spring.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
/* General Page Styles */
.order-page {
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background-color: #000;
  padding: 50px;
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
}

.product-card {
  background-color: #111;
  border: 1px solid #7dc7c1;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-card h3 {
  margin-top: 15px;
  font-size: 1.2rem;
  color: #eae2b0;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(125, 199, 193, 0.3);
}
</style>

  