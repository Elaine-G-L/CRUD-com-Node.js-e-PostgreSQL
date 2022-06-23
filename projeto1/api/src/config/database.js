/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável por fazer a conexão da API Node com o Postgre.  
 * Data: 23/06/2022
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// => Conexão com a base de dados (PostgreSQL)

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Base de dados conectada com sucesso');
});

module.exports = {
    query: (text, params) => pool.query(text.params)
};

