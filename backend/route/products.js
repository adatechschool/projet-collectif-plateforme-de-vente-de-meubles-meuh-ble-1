const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

const Product = require('../models/productmodel');

router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

router.get('/', async (req, res) => {
    try {
        const productCart = await Product.find();
        res.json(productCart);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

router.put('/', async (req, res) => {
    try {
        if(req.body.id){
            const products = await Product.findOne({ _id: req.body.id })
            await products.save();
            res.json(products);
        }else {
            res.status(400).json({ message: "Missing parameter" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/', async (req, res) => {
    try {
        if(req.body.id){
            await Product.findByIdAndDelete(req.body.id);
            res.json({ message: "Product removed" });
        }else{
            res.status(400).json({ message: "Missing id" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

module.exports = router;