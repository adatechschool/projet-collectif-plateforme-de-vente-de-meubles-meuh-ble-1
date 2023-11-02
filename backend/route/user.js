const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// Importez votre modèle User
const User = require('../models/usermodel');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
    // console.log(User);
  try {
    const { firstName, lastName, email, password } = req.body;
    if (firstName && lastName && email && password) {
      const newUser = new User({ firstName, lastName, email, password });
      await newUser.save();
      res.json(newUser);
      res.status(200)
    } else {
      res.status(400).json({ message: "Missing parameters" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;
        if (password.length < 8){
            return res.status(400).json({ message: "Password less than 6 characters" });
        };
    try {
        await User.create({
            email,
            password,
        }).then(user => {
            
        })
    } catch (error) {
        
    }
})

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

