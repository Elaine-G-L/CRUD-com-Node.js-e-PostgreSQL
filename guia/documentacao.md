## Documentação do projeto 

Foi realizada a criação de um CRUD  usando o postgreSQL para persistência no Banco de Dados.
durante a ciração do projeto, na pasta de projeto1 através do prompt de comando foi usado o seguinte comando:

npm i -y para criação do arquivo package.jason 

depois foram instaladas as dependênci husky e o nodemon. 

husky serve para verificar o codigo, se tudo esta escrito corretamente (dentro do padrão) e depois commitar.
o nodemon é uma dependcia que faz com que nao seja necessário iniciar o servidor node 
sempre que alguma atualização for feita.

Ambas a dependencias foram instaladas no começo do projeto através do comando:

npm i --save-dev husky nodemon

posteriormente foram instalados como dependencia:

npm i cors dotenv express express-promise-router pg

cors: 
dotenv: cria um arquivo dotenv que guarda informações de segurança na forma de variáveis locais. No arquivo .env é guardada a conexion string 
express-promise-router: 

depois foi feita a instalação do eslin e ele foi iniciado com eslint --init 

eslint: 

Depois o projeto foi estruturado em pastas. Foi criada a pasta config com o arquivo database.js  onde justamente nesse arquivo será feita a configuração de conexão da base de dados local com o postgre (connection string)

Dentro da pasta controllers é onde é feita toda a logica de programação relacionada ao crud.

tambem foi instalado o pacote node-postgres
