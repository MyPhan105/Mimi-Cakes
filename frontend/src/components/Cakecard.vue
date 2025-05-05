<template>
  <div class="product-card">
    <div class="photo">
      <img :src="product.image" :alt="product.name" />
      <div class="add-to-cart" @click="showModal = true">Add to Cart</div>
    </div>
    <h3>{{ product.name }}</h3>

    <!-- Size selection modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h4>Select Size for {{ product.name }}</h4>
        <ul>
          <li v-for="(size, index) in product.sizes" :key="index">
            <button @click="selectSize(size)">
              {{ size.label }} - ${{ size.price.toFixed(2) }}
            </button>
          </li>
        </ul>
        <button @click="showModal = false">Cancel</button>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "CakeCard",
  props: {
    product: Object,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    selectSize(size) {
      this.showModal = false;
      this.$emit("add-to-cart", {
        name: this.product.name,
        image: this.product.image,
        size: size.label,
        price: size.price,
      });
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .photo {
    width: 80%;
    aspect-ratio: 3/ 4;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .photo img {
    width: 100%;
    height: 100%;
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
  background-color: #7dc7c1; /* Default green */
  color: white;
  padding: 10px;
  border-radius: 5px;
  opacity: 0;
  width: 97%;
  text-align: center;
  transition: all 0.4s ease; /* Animate everything smoothly */
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
  background-color: #7dc7c1; /* Button stays green when hovering the photo */
  color: white;
  transform: translateX(-50%) translateY(-10px) scale(1.08); /* Move button up by 10px and scale it */
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
  }
  .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #222;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.modal-content h4 {
  color: #eae2b0;
}

.modal-content button {
  margin: 8px;
  padding: 10px 15px;
  background-color: #7dc7c1;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-content ul {
  list-style-type: none; /* Remove the bullets */
  padding: 0;
  margin: 0;
}

.modal-content li {
  display: block;
  margin-bottom: 10px; /* Space between list items */
}


</style>
  