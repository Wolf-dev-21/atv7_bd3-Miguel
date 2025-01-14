const database = 'BD3-NoSQL-Produtos'

const collection = 'bd3-nosql-atv7'

use(database);

db['bd3-nosql-atv7'].insertMany(
    [
    {
        "nome_produto": "leite",
        "desc_produto": "alimento",
        "valor": 150
        },
        {
        "nome_produto": "pão frances",
        "desc_produto": "alimento",
        "valor": 100
        },
        
        {
        "nome_produto": "pão de forma",
        "desc_produto": "alimento",
        "valor": 110
        },
    
        {
        "nome_produto": "detergente",
        "desc_produto": "limpeza",
        "valor": 200
        },
    
        {
        "nome_produto": "desinfetante",
        "desc_produto": "limpeza",
        "valor": 380
        },
    
        {
        "nome_produto": "agua sanitaria",
        "desc_produto": "limpeza",
        "valor": 650
        },
    
        {
        "nome_produto": "creme dental",
        "desc_produto": "higiene",
        "valor": 420
        },
    
        {
        "nome_produto": "escova de dentes",
        "desc_produto": "higiene",
        "valor": 520
        },
    
        {
        "nome_produto": "shampoo",
        "desc_produto": "higiene",
        "valor": 700
        },
        {
        "nome_produto": "camera",
        "desc_produto": "ferramenta",
        "valor": 1000
        }
    ]
);