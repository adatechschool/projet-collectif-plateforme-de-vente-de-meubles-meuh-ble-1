const express = require('express');
const app = express();

const port =  3004;


app.listen(port, () => {
    console.log(`Le serveur Express est en cours d'écoute sur le port  ${port}`);
  });


