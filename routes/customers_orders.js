require('dotenv').config(); // Load local .env during dev

const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// ✅ Use env variables for production deployment
const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST || 'localhost',
  user: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  database: process.env.MYSQL_ADDON_DB || 'e-commerce-db',
  port: process.env.MYSQL_ADDON_PORT || 3306
});

// ✅ Route to get all customers (ID + Name)
router.get('/', (req, res) => {
  db.query('SELECT customer_id, customer_name FROM customers', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
