/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação. 
o arquivo que executa o servidor por trás dos panos e faz a comunicação com o json. É ele que vai levantar o serviço.
 * 
 * Data: 23/06/2022
 */

//variável que requisita o arquivo app.js
const app = require('./src/app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Aplicação executando na porta ", port);

});


