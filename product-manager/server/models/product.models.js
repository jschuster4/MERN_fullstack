const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Product Title is required"],
        minlength: [3, "Product must be at least 3 characters long"]
    },
    price : {
        type: Number, 
        required: [true, "Product must have a price"],
        min: [0, "Product cost must be a positive number"]
    },
    description: {
        type : String, 
        required: [true, "Product must have a description"],
        minlength: [3, "description must be at least 3 characters"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;
