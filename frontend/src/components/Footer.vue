<template>
    <footer class="footer">
      <div class="footer-content">

        <div class="social-links">
    <!-- Facebook Button -->
    <a href="https://www.facebook.com/profile.php?id=61555299763218" target="_blank" class="social-icon">
        <i class="fab fa-facebook-f"></i> Facebook
    </a>

    <!-- Instagram Button -->
    <a href="https://www.instagram.com/mimicakesbakery.yum/?fbclid=IwY2xjawJ8s8BleHRuA2FlbQIxMABicmlkETFsZGZ1Z3hKNmIwNFNidjZzAR4kBSt5Yt1HAP4EuEBkF9SzQNJP9D-tMkEbYQSq5y7HBvZlCQEwITGUKpvMzA_aem_OxRXRxOQk9WWV3SgsreINg#" target="_blank" class="social-icon">
        <i class="fab fa-instagram"></i> Instagram
    </a>

    <!-- TikTok Button -->
    <a href="https://www.tiktok.com/@yourusername" target="_blank" class="social-icon">
        <i class="fab fa-tiktok"></i> Tiktok
    </a>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* In case it gets too long on small screens */
  margin-top: 40px;
}
  
.social-icon {
  display: inline-block;
  margin: 0 15px;
  padding: 12px 24px; /* bigger padding = bigger button */
  border: 2px solid #878686; /* thicker white outline */
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem; /* bigger text */
  transition: all 0.4s ease;
}
  
.social-icon:hover {

  color: #7dc7c1; /* dark text when hovered */
  border-color: #7dc7c1;
}

  .copyright {
  font-size: 0.9rem;
  margin-bottom: 10px; /* optional, tiny bottom space */
}

.social-icon i {
  margin-right: 8px; /* adds a little space between the logo and text */
}


</style>
  