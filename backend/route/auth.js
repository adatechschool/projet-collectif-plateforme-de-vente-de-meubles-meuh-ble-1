const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/usermodel'); // Nous importons le modèle User depuis un autre fichier.

route.post('/', async (req, res) => {
    const { email, password } = req.body; // Nous extrayons les valeurs 'email' et 'password' de la requête.
    
    try {
        const user = await User.findOne({ email: email }); // Nous cherchons un utilisateur avec l'email fourni.
        const authToken = await user.generateAuthTokenAndSaveUser();

        if (!user) {
            res.status(404).json({ message: "Utilisateur non trouvé" }); // Si l'utilisateur n'existe pas, nous renvoyons une erreur 404.
        } else {
            // Nous comparons le mot de passe fourni par l'utilisateur avec le hachage stocké en base de données.
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                res.send({user, authToken});
                // res.json({ message: "Authentifié" }); // Si les mots de passe correspondent, l'authentification est réussie.
            } else {
                res.status(401).json({ message: "L'authentification a échoué" }); // Si les mots de passe ne correspondent pas, l'authentification a échoué.
            }
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" }); // En cas d'erreur serveur, nous renvoyons une erreur 500.
    }
});

module.exports = route; // Nous exportons la route pour l'utiliser dans d'autres parties de l'application.
