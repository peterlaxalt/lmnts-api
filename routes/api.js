// Dependencies
const express = require('express');
const router = express.Router();

// Models
const Product = require('../models/product');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Return router
module.exports = router;
