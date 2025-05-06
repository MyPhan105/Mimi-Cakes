<template>
    <div class="signup-container">
      <h1>Sign Up</h1>
      <form @submit.prevent="signUpUser">
        <div class="input-group">
          <label for="name">Full Name</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUp",
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      signUpUser() {
        // Simulate user signup process (replace this with actual logic or API calls)
        const token = "some-token"; // Typically you'd get this from your API
  
        if (token) {
          // Store the token in localStorage (or wherever your app keeps auth data)
          localStorage.setItem("token", token);
  
          // Redirect to login page or a default page
          this.$router.push("/login");
        } else {
          // Handle signup failure (e.g., show error message)
          alert("Signup failed! Please try again.");
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
  </style>
  