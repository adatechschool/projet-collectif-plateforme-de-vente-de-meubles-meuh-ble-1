const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const Product = require('../models/productmodel'); // Assurez-vous que le chemin vers votre modèle de produit est correct

// Configuration de stockage des fichiers téléchargés
const fileStorage = multer.diskStorage({
    destination: 'images', // Répertoire de destination pour les fichiers téléchargés
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

// Configuration de l'instance Multer pour le téléchargement de fichiers
const uploadImage = multer({
    storage: fileStorage,
    limits: {
        fileSize: 10000000, // Limite de taille maximale de fichier (10 Mo)
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error('Veuillez télécharger un fichier avec une extension jpg ou png.'));
        }
        cb(null, true);
    }
});

// Route POST pour créer un produit avec une image
router.post('/', uploadImage.single('image'), async (req, res) => {
    try {
        if (req.file) {
            
                const productData = {
                    name: req.body.name, // Champ 'name' du modèle
                    quantity: req.body.quantity, // Champ 'quantity' du modèle
                    price: req.body.price, // Champ 'price' du modèle
                    color: req.body.color, // Champ 'color' du modèle
                    dimensions: {
                        height: req.body.height, // Champ 'height' du modèle.dimensions.height
                        width: req.body.width, // Champ 'width' du modèle.dimensions.width
                        length: req.body.length, // Champ 'length' du modèle.dimensions.length
                    },
                    materials: req.body.materials, // Champ 'materials' du modèle
                    image: req.file.filename, // Nom du fichier de l'image
                };
            const product = await Product.create(productData);
            res.status(200).json(product);
        } else {
            res.status(400).json({ message: 'Aucune image n\'a été téléchargée.' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route GET pour récupérer les produits
router.get('/', async (req, res) => {
    try {
        const productCart = await Product.find();
        res.json(productCart);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route PATCH pour mettre à jour un produit
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
                res.status(404).json({ message: "Produit non trouvé" });
            }
        } else {
            res.status(400).json({ message: "Paramètre 'name' manquant" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route DELETE pour supprimer un produit
router.delete('/', async (req, res) => {
    try {
        if (req.body.name) {
            await Product.deleteOne({ name: req.body.name });
            res.json({ message: "Produit supprimé" });
        } else {
            res.status(400).json({ message: "Nom manquant" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

