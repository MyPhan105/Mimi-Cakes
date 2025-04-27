<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Mimi Cakes. All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-icon">Facebook</a>
          <a href="#" class="social-icon">Instagram</a>
          <a href="#" class="social-icon">Twitter</a>
        </div>
      </div>
    </footer>
</template>
  
<script>
  export default {
    name: 'Footer'
  }
</script>
  
<style scoped>
  .footer {
    background-color: #333;
    color: #eae2b0;
    padding: 20px;
    text-align: center;
    margin-top: auto;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .social-links {
    margin-top: 10px;
  }
  
  .social-icon {
    margin: 0 10px;
    color: #eae2b0;
    text-decoration: none;
  }
  
  .social-icon:hover {
    text-decoration: underline;
  }
</style>
  