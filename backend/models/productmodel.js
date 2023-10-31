const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: "String",
        required: [true, "Please enter a product name"]
    },
    quantity: {
        type: "Number",
        required: true,
        default: 0
    },
    price: {
        type: "Number",
        required: true
    },
    color: {
        type: "String",
        required: true
    },
    dimensions: {
        height: {
            type: "Number",
            required: true
        },
        width: {
            type: "Number",
            required: true
        },
        length: {
            type: "Number",
            required: true
        },
    },
    materials: {
        type: "String",
        required: true
    },
    image: {
        type: "String",
        required: true
    }
},
    {timestamps: true},
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;