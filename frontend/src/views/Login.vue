<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="loginUser">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <router-link to="/signup">Sign up here</router-link></p>
    </div>
  </template>
  
  <script>
export default {
  name: "Login",
  data() {
    return {
      // Your login form data goes here, e.g., username and password
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Simulate login process (replace this with actual logic, such as API calls)
      const token = "some-token";  // You'd get this from your API response upon successful login

      if (token) {
        // Store the token in localStorage (or wherever your app keeps auth data)
        localStorage.setItem("token", token);

        // Check if there's a redirect path stored
        const redirectPath = localStorage.getItem("redirectAfterLogin");

        if (redirectPath) {
          // Redirect to the stored path (e.g., /checkout)
          this.$router.push(redirectPath);

          // Clear the redirect path from localStorage after using it
          localStorage.removeItem("redirectAfterLogin");
        } else {
          // If there's no stored redirect path, you can redirect to a default page, like the homepage
          this.$router.push("/");
        }
      } else {
        // Handle login failure
        alert("Login failed! Please try again.");
      }
    },
  },
};
</script>

  
  
  <style scoped>
  .login-container {
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
    color: #7dc7c1; 
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
  