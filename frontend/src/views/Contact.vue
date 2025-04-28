<template>
    <div class="contact-page">
      <!-- Page Header -->
      <header>
        <br />
        <h1 class="contact-heading">Get in Touch</h1>
        <p class="contact-subheading">We’d love to hear from you!</p>
      </header>
  
      <!-- Contact Section -->
      <section class="contact-section">
        <div class="contact-text">
          <h2>Contact Us</h2>
          <p>If you have any questions, inquiries, or want to place a custom order, feel free to reach out to us! 
          We’re here to make your celebrations even sweeter.</p>
  
          <div class="contact-info">
            <p><strong>Email:</strong> <a href="mailto:mimicakes@example.com">mimicakes@example.com</a></p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Location:</strong> Houston, TX</p>
          </div>
        </div>
  
        <div class="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact",
  };
  </script>
  
  <style scoped>
  /* Contact Page Styles */
  .contact-page {
    font-family: 'Poppins', sans-serif;
    color: #fff;
    background-color: #000000;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Header */
  .contact-heading {
    font-size: 3rem;
    color: #7dc7c1;
    text-align: center;
    font-family: 'Caveat', sans-serif;
  }
  
  .contact-subheading {
    font-size: 1.5rem;
    color: #eae2b0;
    text-align: center;
    margin-top: 10px;
    font-style: italic;
  }
  
  /* Contact Section */
  .contact-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
    width: 100%;
    max-width: 1400px;
    padding: 20px;
    background-color: #000000;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .contact-text, .contact-form {
    flex: 1;
    min-width: 300px;
    margin: 20px;
  }
  
  .contact-text h2, .contact-form h2 {
    color: #7dc7c1;
    font-size: 2rem;
    margin-bottom: 20px;
    font-family: 'Caveat', sans-serif;
  }
  
  .contact-text p {
    font-size: 1.1rem;
    color: #ffffff;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  
  .contact-info p {
    font-size: 1.1rem;
    color: #eae2b0;
  }
  
  .contact-info a {
    color: #7dc7c1;
    text-decoration: none;
  }
  
  .contact-info a:hover {
    text-decoration: underline;
  }
  
  /* Contact Form */
  form {
    display: flex;
    flex-direction: column;
  }
  
  input, textarea {
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #7dc7c1;
    background-color: transparent;
    color: #fff;
    font-size: 1rem;
  }
  
  input::placeholder, textarea::placeholder {
    color: #ccc;
  }
  
  .submit-button {
    background-color: #7dc7c1;
    color: #000;
    border: 2px solid #7dc7c1;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: transparent;
    color: #7dc7c1;
    border: 2px solid #7dc7c1;
  }
  </style>
  