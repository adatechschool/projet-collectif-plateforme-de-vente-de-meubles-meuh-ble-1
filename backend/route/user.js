const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Importez votre modèle User
const User = require('../models/usermodel'); // Assurez-vous que le chemin vers votre modèle d'utilisateur est correct

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    // Vérifiez la longueur du mot de passe
    if (password.length < 8) {
      return res.status(400).json({ message: "Le mot de passe doit contenir au moins 8 caractères" });
    }

    if (firstName && lastName && email && password) {
      // Hachez le mot de passe avant de le stocker dans la base de données
      const hash = await bcrypt.hash(password, 13);
      // Créez un nouvel utilisateur avec les données fournies
      const newUser = new User({ firstName, lastName, email, password: hash });
      // Enregistrez le nouvel utilisateur dans la base de données
      await newUser.save();
      res.status(200).json(newUser);
    } else {
      res.status(400).json({ message: "Paramètres manquants" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// router.put('/', async (req, res) => {
//     console.log(req.body.id);
//   try {
//     if (req.body.id && req.body.firstName && req.body.lastName && req.body.email) {
//       const user = await User.findOne({ _id: req.body.id });
//       if (user) {
//         user.firstName = req.body.firstName;
//         user.lastName = req.body.lastName;
//         user.email = req.body.email;
//         await user.save();
//         res.json(user);
//       } else {
//         res.status(404).json({ message: "User not found" });
//       }
//     } else {
//       res.status(400).json({ message: "Missing parameters" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.delete('/', async (req, res) => {
//   try {
//     if (req.body.id) {
//       await User.findByIdAndDelete(req.body.id);
//       res.json({ message: "User removed" });
//     } else {
//       res.status(400).json({ message: "Missing id" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;

