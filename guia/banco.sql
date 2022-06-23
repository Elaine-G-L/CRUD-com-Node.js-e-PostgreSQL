Entidades: 
usuario(campo para dizer se é ou nao admin), 
produto,



classe produto

propriedades: 
- produto_id interger primary key
- nome_produto varchar 
- quantidade int 
- preço real 

USE supermercado; 

-- nome da classe sempre começa em letra minuscula
-- nome da tabela sempre no plural
CREATE TABLE produtos (
    produto_id SERIAL PRIMARY KEY,
    nome_produto VARCHAR (60) NOT NULL,
    grupo_alimentar VARCHAR (60) NOT NULL,
    ingredientes  TEXT NOT NULL
);
    
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome_usuario VARCHAR (60) NOT NULL,
    tipo_admin BOOLEAN NOT NULL,
    possui_restricao BOOLEAN NOT NULL,
    tipo_restricao VARCHAR (60)
); 

