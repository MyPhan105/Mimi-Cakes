<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="social-links">
          <a href="#" class="social-icon">Facebook</a>
          <a href="#" class="social-icon">Instagram</a>
          <a href="#" class="social-icon">Tiktok</a>
        </div>
        <p class="copyright">&copy; 2025 Mimi Cakes. All rights reserved.</p>
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
    color: #ffffff;
    padding: 40px 20px;
    text-align: center;
    margin-top: auto;
  }
  
  .footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 200px; /* or whatever height you want */
  justify-content: space-between; /* push social links to top, copyright to bottom */
}
  
  .social-links {
    margin-top: 5px;
  }
  
  .social-icon {
  display: inline-block;
  margin: 0 10px;
  padding: 8px 16px;
  border: 1px solid #fff; /* white outline */
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}
  
.social-icon:hover {

  color: #7dc7c1; /* dark text when hovered */
  border-color: #7dc7c1;
}

  .copyright {
  font-size: 0.9rem;
  margin-bottom: 10px; /* optional, tiny bottom space */
}

</style>
  