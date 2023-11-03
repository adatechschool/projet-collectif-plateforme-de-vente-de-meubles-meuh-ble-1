const mongoose = require("mongoose");//Tout d'abord, nous importons le module mongoose, qui est une bibliothèque permettant de travailler avec des bases de données MongoDB depuis Node.js.


// un schéma (ou modèle) de données pour nos produits en utilisant mongoose.Schema.
//  Un schéma indique à MongoDB comment les données des produits seront stockées dans la base de données. Il comprend plusieurs champs pour chaque produit,
//  chacun avec ses caractéristiques.
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
    image1: {
        type: "String",
        required: false
    },
    image2: {
        type: "String",
        required: false
    },
    image3: {
        type: "String",
        required: false
    }
},
    {timestamps: true},
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


// Enfin, nous créons un modèle de produit en utilisant mongoose.model en spécifiant le nom du modèle ("Product") et le schéma que nous avons défini précédemment. Ce modèle nous permettra d'effectuer des opérations de base de données sur les produits.

// Nous exportons le modèle Product pour pouvoir l'utiliser dans d'autres parties de notre application.