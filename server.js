require('dotenv').config(); // Load local .env during development

const express = require('express');
const cors = require('cors');
const path = require('path');

const productsRoute = require('./routes/products');
const customerRoute = require('./routes/customers');
const ordersRoute = require('./routes/orders');
const customerORoute = require('./routes/customers_orders');
const authRoute = require('./routes/auth');
const feedbackRoute = require('./routes/feedback');
const statisticsRoutes = require('./routes/statistics');
const overview = require('./routes/overview');
const stores_backup = require('./routes/stores_backup');
const customerAuthRoutes = require('./routes/cus_auth');

const app = express();

// ✅ CORS setup with explicit origin (important for Render)
app.use(cors({
  origin: ['https://ecommerce-client-2au9.onrender.com'], // Frontend domain
  credentials: true, // Allow cookies and tokens
}));

// ✅ Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Routes
app.use('/api/products', productsRoute);
app.use('/api/customers', customerRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/customers_orders', customerORoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/auth', authRoute);
app.use('/api/statistics', statisticsRoutes);
app.use('/api/overview', overview);
app.use('/api/customer/auth', customerAuthRoutes);
app.use('/api', stores_backup);

// ✅ Health check route
app.get('/', (req, res) => {
  res.send('✅ Server is up and running on Render!');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
