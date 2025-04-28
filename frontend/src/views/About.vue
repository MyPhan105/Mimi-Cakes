<template>
    <div class="about-page">
      <!-- Page Header -->
      <header>
        <br><br>
        <h1 class="about-heading">Welcome to Mimi Cakes</h1>
        <p class="about-subheading">Where Every Bite is a Slice of Heaven</p>
      </header>
      <br>

  
      <!-- About Section -->
      <section class="about-section">
        <div class="about-text">
          <br><br>
          <h2>Our Story</h2>
          <p>
            At Mimi Cakes, we believe that cake is not just a dessert, 
            but an experience that brings joy and happiness to any occasion. 
            Our journey started with a passion for creating beautiful, 
            delicious, and memorable cakes and cupcakes that capture the essence 
            of celebration. Whether it's a birthday, wedding, or just because, 
            we craft each treat with love and care to ensure every bite is a moment 
            of pure bliss.
          </p>
          <p>
            From our signature chiffon cakes topped with dreamy Italian meringue 
            buttercream to our delicate floral cupcakes, Mimi Cakes is dedicated 
            to delivering sweetness and elegance in every bite. We pride 
            ourselves on using only the finest ingredients to create irresistible 
            treats that make your special moments even more unforgettable.
          </p>
        </div>
  
        <div class="about-image">
          <img src="@/assets/about-image.jpg" alt="Mimi Cakes Bakery" />
        </div>
      </section>
  
      <!-- Our Mission -->
      <section class="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to provide our customers with the highest quality, 
          handcrafted cakes and desserts that bring a smile to their faces. At 
          Mimi Cakes, we value creativity, quality, and customer satisfaction above 
          all else. Every cake is a masterpiece made to order with your unique 
          celebration in mind.
        </p>
        <p>
          Whether you’re ordering a wedding cake that will be the centerpiece of 
          your big day, cupcakes for a fun event, or a sweet treat just for you, 
          we promise you’ll love every bite.
        </p>
      </section>
  
      <!-- Testimonials Section -->
<!-- Testimonials Section -->
<section class="testimonials-section">
  <h2>What Our Customers Are Saying</h2>
  <br>

  <div class="testimonials-wrapper">
  <table class="testimonials-table">
    <tbody>
      <tr>
        <td class="testimonial-cell">
          <div class="stars">
            ⭐⭐⭐⭐⭐
          </div>
          <p>
            "Cupcakes were gorgeous, delicious and on time as promised. 
            Guests were delighted and amazed by how stunning and how good they were. 
            Everyone commented, many asked how to order them for their own special occasions, 
            and they were the star of our table full of party foods. Highly, highly recommend!"
          </p>
          <p><strong>- Anne M.</strong></p>
        </td>

        <td class="testimonial-cell divider">
          <div class="stars">
            ⭐⭐⭐⭐⭐
          </div>
          <p>
            "Phan is a talented lady. I have never seen such beautiful cupcakes in my life. 
            I happened to find her on marketplace as I was searching for customed cookies/cupcakes 
            for my SIL's baby shower. Her cupcakes are a piece of art and she will work on the colors 
            exactly the way you want it! Normally a nice looking cake is too heavy to eat but this one 
            is just so delicious too! They are just too cute to eat!"
          </p>
          <p><strong>- Mary T.</strong></p>
        </td>

        <td class="testimonial-cell">
          <div class="stars">
            ⭐⭐⭐⭐⭐
          </div>
          <p>
            <!-- Empty for now -->
            "These are the most beautiful cup cakes! Mimi is not only a great cake maker but she is also 
            an artist! I can’t believe how beautiful these cup cakes are! How tasteful, how meticulously 
            crafted and packaged, and how delicious they are! 
            Mimi was great to deal with, very flexible, polite, considerate, and she brought the cake 
            down herself on pickup to the car, she made sure that they are all securely packaged and you 
            can tell that this is art to her not only cake, she cared for every little detail.
            Good luck Mimi! Thank you for the delicious cup cakes!"
          </p>
          <p><strong>- Hind H.</strong></p>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</section>
  

  

    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  
  <style scoped>
  /* About Page Styles */
  .about-page {
    font-family: 'Poppins', sans-serif;
    color: #fff;
    background-color: #000000;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Header */
  .about-heading {
    font-size: 3rem;
    color: #7dc7c1;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }
  
  .about-subheading {
    font-size: 1.5rem;
    color: #eae2b0;
    text-align: center;
    margin-top: 10px;
    font-style: italic;
  }
  
  /* About Section */
  .about-section {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    width: 100%;
    max-width: 1500px;
    padding: 20px;
    background-color: #000000;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .about-text {
    flex: 1;
    padding-right: 40px;
    font-size: 1.2rem;
    color: #fffdfd;
  }
  
  .about-text h2 {
    color: #7dc7c1;
    font-size: 2rem;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
  }
  
  .about-image {
  flex: 1; /* Make the image side take up equal space */
  display: flex;
  align-items: center; /* Center the image vertically */
  justify-content: center; /* Optional: center horizontally */
  }

.about-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* Ensures the image covers nicely without distortion */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
  
  /* Mission Section */
  .mission-section {
    text-align: center;
    margin-top: 60px;
    padding: 100px;
  }
  
  .mission-section h2 {
    color: #7dc7c1;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .mission-section p {
    font-size: 1.1rem;
    color: #ffffff;
    line-height: 1.5;
  }
  
  /* Testimonials Section */
  .testimonials-section {
    margin-top: 60px;
    text-align: center;
  }
  
  .testimonials-section h2 {
    font-size: 2rem;
    color: #7dc7c1;
  }
  
  .testimonial {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    margin-top: 20px;
  }
  
  .testimonial p {
    font-size: 1.1rem;
  }
  
  .testimonial strong {
    display: block;
    margin-top: 10px;
    color: #7dc7c1;
  }
  
  /* Footer */
  footer {
    margin-top: 80px;
    font-size: 1rem;
    color: #eae2b0;
    text-align: center;
  }

/* Testimonials Table */
.testimonials-section {
  margin-top: 60px;
  text-align: center;
}

.testimonials-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  margin-bottom: 30px;
}

.testimonial-cell {
  padding: 20px;
  text-align: center;
  color: #fff;
  vertical-align: top;
}

.divider {
  border-left: 2px solid rgb(88, 87, 87); /* Only middle column has left divider */
  border-right: 2px solid rgb(88, 87, 87); /* Only middle column has right divider */
}

.stars {
  font-size: 1rem;
  margin-bottom: 10px;
  color: rgb(239, 243, 134);
}

.testimonials-table tbody {
  border-top: 2px solid rgb(88, 87, 87);
  border-bottom: 2px solid rgb(88, 87, 87);
}

.testimonials-wrapper {
  width: 100%;
  max-width: 1700px; /* Bigger than about-section */
  padding: 0 30px; /* Slightly more breathing room */
  margin: 0 auto; /* Center the wrapper */
}


  </style>
  