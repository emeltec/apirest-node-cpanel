const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./src/routes/routes');

const PORT = process.env.PORT || 3000;

// SERVIDOR
const app = express();

// habilitar body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Habiliar los cors
app.use(cors());

// Rutas del app
app.use('/msbm/', routes());

app.listen(PORT, () => {
  console.log('Running server on port', PORT)
});