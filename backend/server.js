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

<<<<<<< HEAD
=======

mongoose.connect(process.env.MONGODB_URL,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log('Connexion à MongoDB échouée !' +e));



>>>>>>> aa389e32fdb090845f8facb06f7dd7c2d75c20b0
app.use(express.json());
app.use('/user', userRoute);
app.use('/products', productRoute);
app.use('/registrer', registerRoute); // Ajout de la route pour l'inscription

<<<<<<< HEAD
const PORT = process.env.PORT || 3005; // Port sur lequel le serveur écoutera

app.listen(PORT, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});











=======
app.use('/user', userRoute);
app.use("/product", productRoute);

app.get('/',async (req,res) =>{
    console.log(req.query);
    console.log(res);
})
app.get('*', (req,res) =>{
    res.status(404).send('error');
})
app.post('/',(req,res) =>{
    console.log(req.body);
    res.send('ok')
})

app.listen(process.env.PORT, () => {
    console.log(`Le serveur Express est en cours d'écoute sur le port ${process.env.PORT} `);
  });
>>>>>>> aa389e32fdb090845f8facb06f7dd7c2d75c20b0
