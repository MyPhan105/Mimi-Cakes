<template>
    <div class="signup-container">
      <h1>Sign Up</h1>
      <form @submit.prevent="signupUser">
        <!-- First Name Field -->
        <div class="input-group">
          <label for="firstName" class="green-text">First Name</label>
          <input type="text" v-model="first_name" id="firstName" required />
        </div>
        
        <!-- Last Name Field -->
        <div class="input-group">
          <label for="lastName" class="green-text">Last Name</label>
          <input type="text" v-model="last_name" id="lastName" required />
        </div>
        
        <!-- Email Field -->
        <div class="input-group">
          <label for="email" class="green-text">Email</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        
        <!-- Phone Field -->
        <div class="input-group">
          <label for="phone" class="green-text">Phone</label>
          <input type="tel" v-model="phone" id="phone" required />
        </div>
        
        <!-- Password Field -->
        <div class="input-group">
          <label for="password" class="green-text">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <router-link to="/login">Log in here</router-link></p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; 
  
  export default {
    name: "SignUp",
    data() {
      return {
        first_name: "",  // Make sure this matches with v-model
        last_name: "",   // Make sure this matches with v-model
        email: "",
        phone: "",
        password: "",
      };
    },
    methods: {
      async signupUser() {
        // Prepare the signup data
        const userData = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        };
        console.log(userData); 
        try {
          // Send the data to the backend API
          const response = await axios.post('http://localhost:3000/api/auth/signup', userData);
  
          // On successful signup, show a message and redirect
          alert(response.data.message); // Show the success message from the backend
          this.$router.push("/login"); // Redirect to login page
        } catch (error) {
          // Handle error (e.g., email already exists)
          console.error('Signup Error:', error); // Log the error to the console for debugging
          if (error.response) {
            alert(error.response.data.message || "Signup error occurred.");
          } else {
            alert("An error occurred during signup. Please try again.");
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 90px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    color: #7dc7c1; /* Customize the color */
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #7dc7c1;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #5da39e;
  }
  
  p {
    text-align: center;
    margin-top: 15px;
  }
  
  /* Add green text color to labels */
  .green-text {
    color: #7dc7c1;
  }
  </style>
  