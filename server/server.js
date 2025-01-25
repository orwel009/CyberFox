const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Server is running and MongoDB is connected.');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
