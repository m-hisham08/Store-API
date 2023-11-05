const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const products = require('./products.json');
const Product = require('./models/Products')

const populate = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(products);
        console.log("Successfully populated");
    } catch (error) {
        console.log(error);
    }
    
}

populate();