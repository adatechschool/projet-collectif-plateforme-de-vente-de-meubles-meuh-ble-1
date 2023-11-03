const mongoose = require('mongoose');//Tout d'abord, nous importons le module mongoose, qui est une bibliothèque permettant de travailler avec des bases de données MongoDB depuis Node.js.



// un schéma (ou modèle) de données pour nos produits en utilisant mongoose.Schema.
//  Un schéma indique à MongoDB comment les données des produits seront stockées dans la base de données. Il comprend plusieurs champs pour chaque produit,
//  chacun avec ses caractéristiques.
const registrationSchema = mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true, // Assure que chaque nom d'utilisateur est unique
      },
      email: {
        type: String,
        required: true,
        unique: true, // Assure que chaque adresse e-mail est unique
      },
      password: {
        type: String,
        required: true,
      },
})
const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration ;
// Enfin, nous créons un modèle de produit en utilisant mongoose.model en spécifiant le nom du modèle ("registration") et le schéma que nous avons défini précédemment. Ce modèle nous permettra d'effectuer des opérations de base de données sur les produits.

// Nous exportons le modèle Product pour pouvoir l'utiliser dans d'autres parties de notre application.