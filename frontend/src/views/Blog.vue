<template>
  <div class="blog-page">
    <!-- Page Header -->
    <header class="blog-header">
      <h1>Our Blog</h1>
      <p>Sweet Stories & Baking Tips</p>
    </header>

    <!-- Blog Posts -->
    <section class="blog-posts">
      <article class="blog-post">
        <h2 class="post-title">The Secret to Perfect Buttercream</h2>
        <p class="post-date">April 28, 2025</p>
        <p class="post-summary">
          Discover how to make silky, smooth Italian meringue buttercream 
          that holds its shape and tastes like a dream. We’re sharing 
          our favorite tips and tricks!
        </p>
        <button class="read-more">Read More</button>
      </article>

      <article class="blog-post">
        <h2 class="post-title">Choosing the Right Cake for Your Occasion</h2>
        <p class="post-date">April 20, 2025</p>
        <p class="post-summary">
          From birthdays to weddings, not all cakes are created equal. 
          Learn how to select the perfect cake style and flavor for your special event!
        </p>
        <button class="read-more">Read More</button>
      </article>

      <!-- Add more articles later -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style scoped>
.blog-page {
  font-family: 'Poppins', sans-serif;
  background-color: #000;
  color: #fff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-header {
  text-align: center;
  margin-bottom: 40px;
}

.blog-header h1 {
  font-family: 'Caveat', cursive;
  font-size: 3rem;
  color: #7dc7c1;
}

.blog-header p {
  font-size: 1.3rem;
  color: #eae2b0;
  font-style: italic;
  margin-top: 10px;
}

/* Blog Posts */
.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1000px;
  width: 100%;
}

.blog-post {
  background-color: #111;
  border: 1px solid #444;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
}

.blog-post:hover {
  transform: translateY(-5px);
}

.post-title {
  font-size: 2rem;
  color: #7dc7c1;
  margin-bottom: 10px;
}

.post-date {
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 20px;
}

.post-summary {
  font-size: 1.1rem;
  line-height: 1.5;
  color: #eee;
}

.read-more {
  margin-top: 20px;
  background-color: #7dc7c1;
  color: #000;
  border: 2px solid #7dc7c1; /* green border */
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.read-more:hover {
  background-color: transparent; /* transparent background on hover */
  color: #7dc7c1; /* text turns green */
  border: 2px solid #7dc7c1; /* keep border green */
}


</style>
