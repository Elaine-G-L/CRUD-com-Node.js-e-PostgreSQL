/**
 * Arquivo: src/controllers/product.controller.js
 * Descrição: arquivo responsável pela lógica do CRUD da API Products.  
 * Data: 23/06/2022
 */

// => Fazendo a conexão com o Banco de Dados:

const db = require('../config/database.js');

// => Método responsável por criar um novo product.

exports.createProduct = async(req, res) => {
    const { nome_produto, grupo_alimentar, ingredientes } = req.body;
    const response = await db.query (
        'INSERT INTO produtos (nome_produto, grupo_alimentar, ingredientes) VALUES ($1, $2, $3)',
        [nome_produto, grupo_alimentar, ingredientes]
    );

    res.status(201).send({
        message: 'Produto adicionado com sucesso',
        body: {
            product: { nome_produto, grupo_alimentar, ingredientes }
        },
    });
};

// => Método responsável por listar todos os products. 

exports.listAllProducts = async(req, res) => {
    const response = await db.query('SELECT * FROM produtos ORDER BY nome_produto ASC');
    res.status(200).send(response.rows);
}