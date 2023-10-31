const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Importez votre modèle User
const User = require('./Admin');
// Importez votre modèle NewUser
const NewUser = require('./mode');

router.get('/user', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/create', async (req, res) => {
  try {
    const { Name, lastName, email, age } = req.body;
    if (Name && lastName && email && age) {
      const newUser = new NewUser({ Name, lastName, email, age });
      await newUser.save();
      res.json(newUser);
    } else {
      res.status(400).json({ message: "Missing parameters" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/update', async (req, res) => {
  try {
    if (req.body.id && req.body.Name && req.body.lastName && req.body.email && req.body.age) {
      const user = await User.findOne({ _id: req.body.id });
      if (user) {
        user.Name = req.body.Name;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.age = req.body.age;
        await user.save();
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } else {
      res.status(400).json({ message: "Missing parameters" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/user', async (req, res) => {
  try {
    if (req.body.id) {
      await User.findByIdAndDelete(req.body.id);
      res.json({ message: "User removed" });
    } else {
      res.status(400).json({ message: "Missing id" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
