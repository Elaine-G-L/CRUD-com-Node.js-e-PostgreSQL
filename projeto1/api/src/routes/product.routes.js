/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável por todas as rotas do crud da API products. 
 * Data: 23/06/2022
 */

const router = require('express-promise-router')();
const productController = require('../controllers/product.controllers');

// => Definindo as rotas do CRUD products.

// => Rota responsável por criar um novo Product (POST): localhost/3000/api/products

router.post('/products', productController.createProduct);

module.exports = router;