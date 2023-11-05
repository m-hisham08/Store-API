const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Enter a product name"]
    },
    price : {
        type: Number,
        required: [true, "Enter a value for price"]
    },
    rating : {
        type: Number,
        default: 4.5
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported!'
        }
        //enum: ['ikea', 'liddy', 'caressa', 'marcos']
    },
    featured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}) 

module.exports = mongoose.model('Prodcuts', productSchema);