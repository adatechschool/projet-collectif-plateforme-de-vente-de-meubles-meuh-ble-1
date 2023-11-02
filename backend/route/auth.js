const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/usermodel');

route.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email: email})
        if (!user){
            res.status(404).json({ message: "Utilisateur non trouvé" });
        } else {
            // Comparez le mot de passe fourni par l'utilisateur avec le hachage stocké en base de données
            const passwordMatch = await bcrypt.compare(password, user.password);
            
            if (passwordMatch) {
                res.json({ message: "Authentifié" });
            } else {
                res.status(401).json({ message: "L'authentification a échoué" });
            }
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = route;