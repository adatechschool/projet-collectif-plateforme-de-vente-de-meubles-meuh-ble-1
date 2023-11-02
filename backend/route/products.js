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

router.patch('/', async (req, res) => {
    try {
        // Vérifiez si le champ 'name' est fourni dans le corps de la requête
        if (req.body.name) {
            // Recherchez le produit en fonction de son nom
            const product = await Product.findOne({ name: req.body.name });

            // Si le produit est trouvé, mettez à jour ses propriétés
            if (product) {
                if (req.body.quantity) {
                    product.quantity = req.body.quantity;
                }

                if (req.body.price) {
                    product.price = req.body.price;
                }

                if (req.body.color) {
                    product.color = req.body.color;
                }

                if (req.body.dimensions) {
                    // Vous devrez gérer la mise à jour des dimensions de manière appropriée
                    product.dimensions = req.body.dimensions;
                }

                if (req.body.materials) {
                    product.materials = req.body.materials;
                }

                if (req.body.image) {
                    product.image = req.body.image;
                }

                // Enregistrez les modifications
                await product.save();
                res.json(product);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } else {
            res.status(400).json({ message: "Missing parameter 'name'" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/', async (req, res) => {
    try {
        if(req.body.name){
            await Product.deleteOne({name: req.body.name});
            res.json({ message: "Product removed" });
        }else{
            res.status(400).json({ message: "Missing name" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

module.exports = router;