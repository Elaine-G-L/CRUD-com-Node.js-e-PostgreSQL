/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável por todas as rotas do crud da API products. 
 * Data: 23/06/2022
 */

const router = require('express-promise-router')();
const productController = require('../controllers/product.controllers');

// => Definindo as rotas do CRUD products.

// => Rota responsável por criar um novo Product (POST): localhost:3000/api/products

router.post('/products', productController.createProduct);

// => Rota responsável por selecionar todos os products (GET): localhost:3000/api/products

router.get('/products', productController.listAllProducts);

// => Rota responsável por selecionar um product pelo ID (GET): localhost:3000/api/products/:id

router.get('/products/:id', productController.findProductById);

// => Rota responsável por atualizar product pelo ID (GET): localhost:3000/api/products/:id

router.put('/products/:id', productController.updateProductById);

// => Rota responsável por deletar product pelo ID (GET): localhost:3000/api/products/:id

//router.delete('/products/:id', productController.deleteProductById);



module.exports = router;