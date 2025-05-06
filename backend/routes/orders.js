// routes/orders.js
const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController'); // Import the controller

// POST route to create an order
router.post('/createOrder', createOrder);


module.exports = router;
