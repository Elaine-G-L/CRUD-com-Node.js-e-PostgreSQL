/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por fazer a comunicação entre o server e o restante da aplicação. 
 * Data: 23/06/2022
 */

const express = require('express');
const cors = require('cors');
const app = express();

// => Rotas da API
const index = require('./routes/index');
const productRoute = require('./routes/product.routes')

app.use(express.urlencoded ({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);
app.use('/api/', productRoute);

//para poder exportar os arquivos
module.exports = app;
