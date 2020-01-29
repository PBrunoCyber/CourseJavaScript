const express = require('express');
const cors = require('cors');
//Serve pra importar todas as models de uma vez sem precisar criar vários require separados!
const requireDir = require('require-dir');

//Acessa o banco de dados mongo remotamente
const mongoose = require('mongoose');

//Iniciando o app
const app = express();
app.use(cors());


//Permite que a aplicação possa receber dados no formato JSON
app.use(express.json());
app.listen(3001);

//Iniciando o DB
var url = 'mongodb+srv://cyber:pb2588@node-api-ohla1.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

//Importando todas as models
requireDir('./src/models');
const Product = mongoose.model('Product');

//Importando as rotas.
app.use('/api', require('./src/routes'));
