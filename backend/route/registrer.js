const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Registration = require('../models/registration'); // Utilisez un nom différent pour le modèle
const { register } = require('module');

// Route GET pour récupérer des utilisateurs
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route POST pour l'inscription (utilisation d'un chemin différent)
router.post('/', async (req, res) => {
    try {
      const register = await Registration.create(req.body); // Create and initialize 'register' here
      res.status(200).json(register);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;



