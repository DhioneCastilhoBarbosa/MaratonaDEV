# **DOE** 

Aplicação web desenvolvida durante o MaratonaDev realizado pela [Rocketseat](https://rocketseat.com.br/) ministrada pelo Mayk Brito.

![](/imagem/aplicacao_DOE.png)

## **Habilidades desenvolviddas:**

Ao desenvolver esta aplicação foi possivel aumentar o aprendizado de programação e utilização de ferramentas para desenvolvimento web.

## **Tecnologias Utilizadas:** 

- [x] HTML
- [x] CSS
- [x] javaScript
- [x] Node.js
- [x] Postgres
- [x] Postbird

## **Observação**

Para executar a aplicação é necessario instalar banco de dados postgres ou equivalente e criar banco de dados com nome, email e tipo sanguineo, realizar a configuração de conexão do banco para realizar pesquisa e cadatros pela aplicação.

### Configura conexão:

```

const Pool= require('pg').Pool
const db= new Pool({
    user:'Usuario',
    password:'Senha',
    host:'localhost',
    port:5432,
    database:'doe'

})
```




