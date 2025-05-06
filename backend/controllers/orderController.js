// controllers/orderController.js
const db = require('../db'); // Adjust path if necessary

const createOrder = (req, res) => {
    const { userId, deliveryOption, due_date, due_time, total, cart } = req.body;

    if (!userId || !deliveryOption || !due_date || !due_time || !total || !cart || cart.length === 0) {
        return res.status(400).json({ error: 'Missing required order information' });
      }

  // Insert into orders table
  const orderQuery = `
    INSERT INTO orders (user_id, method, due_date, due_time, total)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(orderQuery, [userId, deliveryOption, due_date, due_time, total], (err, result) => {
    if (err) {
      console.error('Error inserting order:', err);
      return res.status(500).json({ error: 'Error inserting order' });
    }

    const orderId = result.insertId;

    // Prepare multiple order_details entries
    const orderDetails = cart.map(item => [
      orderId,
      item.cake_id,
      item.size,
      item.quantity
    ]);

    const orderDetailsQuery = `
      INSERT INTO order_details (order_id, cake_id, size, quantity)
      VALUES ?
    `;

    db.query(orderDetailsQuery, [orderDetails], (err) => {
      if (err) {
        console.error('Error inserting order details:', err);
        return res.status(500).json({ error: 'Error inserting order details' });
      }

      res.status(200).json({ message: 'Order successfully placed' });
    });
  });
};

module.exports = { createOrder };
