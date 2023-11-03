const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
const { fileStorage, uploadImage } = require("../middleware/upload");

router.post('/add-Product', uploadImage.array('img', 3), (req, res) => {
  // Assurez-vous que le middleware multer a correctement traité les fichiers
  if (req.files.length !== 3) {
    return res.status(400).json({ message: "Veuillez télécharger trois images" }); // Si le nombre d'images n'est pas égal à 3, renvoyez une erreur 400.
  }

  // Maintenant, vous pouvez créer un objet avec les chemins et les noms d'origine des images
  const images = [
    {
      img1: {
        src: req.files[0].path,
        alt: req.files[0].originalname,
      },
      img2: {
        src: req.files[1].path,
        alt: req.files[1].originalname,
      },
      img3: {
        src: req.files[2].path,
        alt: req.files[2].originalname,
      },
    },
  ];

  // Vous pouvez maintenant faire quelque chose avec l'objet `images`, comme l'enregistrer dans une base de données ou le traiter d'une autre manière.

  // Répondez avec succès si nécessaire
  res.status(200).json({ message: "Images téléchargées avec succès", images });
});

module.exports = router; // Nous exportons la route pour l'utiliser dans d'autres parties de l'application.

