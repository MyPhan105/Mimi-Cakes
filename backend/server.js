// server.js

require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const pool = require('./db'); // Use the shared pool from db.js

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Test the database connection using a simple query
pool.query('SELECT 1')
  .then(() => console.log('Successfully connected to the database'))
  .catch(err => console.error('Error connecting to the database:', err));

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Example route to fetch cakes from the cakes table
app.get('/cakes', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM cakes');
    res.json(results);
  } catch (err) {
    console.error('Error retrieving cakes:', err);
    res.status(500).send('Error retrieving data');
  }
});

// Mount authentication routes
app.use('/api/auth', authRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
