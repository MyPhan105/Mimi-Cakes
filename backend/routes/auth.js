// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db'); // Import the database connection
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    console.log('Request Body:', req.body); 
  const { first_name, last_name, email, phone, password } = req.body;

  // Check for missing fields
  if (!first_name || !last_name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    // Check if email already exists
    const [existingUser] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email already registered!' });
    }

    // Hash the password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    await pool.execute('INSERT INTO users (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)', [
      first_name,
      last_name,
      email,
      phone,
      hashedPassword
    ]);

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error!' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required!' });
  }

  try {
    // Check if the user exists in the database
    const [user] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    console.log("User from DB:", user);
    if (user.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password!' });
    }

    console.log("Entered password:", password);
    console.log("Stored hash:", user[0].password);
    
    // Compare password with the hash stored in the database
    const validPassword = await bcrypt.compare(password, user[0].password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password!' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user[0].id, email: user[0].email }, 'your_secret_key', {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error!' });
  }
});

module.exports = router;
