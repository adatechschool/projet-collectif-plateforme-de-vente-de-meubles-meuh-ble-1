const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

const User = require('../models/usermodel');

route.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email: email})
        if (!user){
            res.status(404).json({ message: "Utilisateur non trouvé" });
        } else {
            if (req.body.password === password) {
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