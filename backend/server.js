const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/productmodel');

mongoose.connect(process.env.MONGODB_URL,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log('Connexion à MongoDB échouée !' +e));



app.use(express.json());

app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

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









