require('dotenv').config();

const express = require('express');
const app = express();
const customerAuthRoutes = require('./routes/customerAuth'); // adjust path

app.use(express.json());
app.use('/api/customers', customerAuthRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
