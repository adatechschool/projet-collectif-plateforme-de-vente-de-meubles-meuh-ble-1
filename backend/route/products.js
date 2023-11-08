const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const Product = require('../models/productmodel'); // Assurez-vous que le chemin vers votre modèle de produit est correct

// Configuration de stockage des fichiers téléchargés
const fileStorage = multer.diskStorage({
    destination: '../frontend/vite-project/src/images',
     // Répertoire de destination pour les fichiers téléchargés
    filename: (req, file, cb) => {
        console.log("filestorage");
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
        console.log(file);
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            console.log("uploadimage");
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
                name: req.body.name,
                quantity: req.body.quantity,
                price: req.body.price,
                color: req.body.color,
                dimensions: {
                    height: req.body.height,
                    width: req.body.width,
                    length: req.body.length,
                },
                materials: req.body.materials,
                category: req.body.category,
                image: req.file.filename,
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
        const productCart = await Product.find({online: true});
        res.json(productCart);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.get('/admin', async (req, res) => {
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
        console.log(req.body.online);
        if (req.body.id) {
            const product = {}
            if (product) {
                if(req.body.name){
                    product["name"] = req.body.name;
                }
                if (req.body.quantity) {
                    product["quantity"] = req.body.quantity;
                }
                if (req.body.price) {
                    product["price"] = req.body.price;
                }
                if (req.body.color) {
                    product["color"] = req.body.color;
                }
                if (req.body.dimensions) {
                    product["dimensions"] = req.body.dimensions;
                }
                if (req.body.materials) {
                    product["materials"] = req.body.materials;
                }
                if (req.body.category){
                    product["category"] = req.body.category;
                }
                if(Object.keys(req.body).includes("online")){
                    product["online"] = req.body.online
                }
                if (req.body.image) {
                    product["image"] = req.body.image;
                }
                // await product.save();
                console.log(product)
              const result=  await Product.updateMany({_id: req.body.id}, {$set: product})
              
              console.log(result);
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
        console.log(req.body, "ok");
        if (req.body.id) {
            await Product.deleteOne({ _id: req.body.id });
            const result = await Product.find()
            console.log(result);
            res.json( result );
        } else {
            res.status(400).json({ message: "Nom manquant" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;


