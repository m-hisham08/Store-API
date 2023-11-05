const express = require('express');
const mongoose = require('mongoose')

const products = require("./routes/products")
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/v1/products', products);





const PORT = process.env.PORT || 5000;
const start = async (url) =>{
    if(url){
        await mongoose.connect(url);
        app.listen(PORT, ()=> console.log(`Server listening at port ${PORT}`));
    }
}
start(process.env.MONGO_URI);