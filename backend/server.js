const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const productRoute = require('./route/products');
const userRoute = require('./route/user');
const Registration = require('./models/registration');



mongoose.connect(process.env.MONGODB_URL,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log('Connexion à MongoDB échouée !' +e));



app.use(express.json());

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