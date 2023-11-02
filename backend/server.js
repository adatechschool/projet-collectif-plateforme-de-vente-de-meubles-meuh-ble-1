const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const productRoute = require('./route/products');
const userRoute = require('./route/user');
const registerRoute = require('./route/registrer'); // Assurez-vous que le chemin est correct

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((e) => console.log('Connexion à MongoDB échouée !' + e));

app.use(express.json());
app.use('/user', userRoute);
app.use('/products', productRoute);
app.use('/registrer', registerRoute); // Ajout de la route pour l'inscription

const PORT = process.env.PORT || 3005; // Port sur lequel le serveur écoutera

app.listen(PORT, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});











