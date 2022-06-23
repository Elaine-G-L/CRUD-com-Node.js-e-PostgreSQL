//controla todas as rotas
/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da(s) API's da aplicação  
 * Data: 23/06/2022
 */

const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        sucess: 'true',
        message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
        version: '1.0.0'
    })
});

module.exports = router;