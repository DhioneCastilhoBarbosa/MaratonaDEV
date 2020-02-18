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
- [x] Dotenv

## **Observação:**

Para executar a aplicação é necessario instalar banco de dados postgres ou equivalente e criar banco de dados com nome, email e tipo sanguineo, realizar a configuração de conexão do banco para realizar pesquisa e cadatros pela aplicação.

### Configura conexão:

```

const Pool= require('pg').Pool
const db= new Pool({
    user:'Usuario',
    password:'Senha',
    host:'localhost',
    port:'numero da porta',
    database:'nome do banco de dados'

})
```
## **Extras:**

Adicionado arquivo .env , este arquivo e responsvel por guarda dados sensiveis como informações de acesso do banco de dados, chaves, senhas e demais informações que não são relevantes ficar expostas no codigo. 

Nesta aplicação ele esta visivel caso use em uma aplicação em produção e deseja subir ela para um repositorio github basta adicionar ao **.gitignore** o arquivo **.env** e ele não vai suber para repositorio.

### Alteração do codigo: ###

```
require('dotenv/config')
const user= (process.env.DB_NAME)
const pass= (process.env.DB_PASS)
const host= (process.env.DB_HOST)
const port= (process.env.DB_PORTA)
const data= (process.env.DB_DATABASE)

```
```
const db= new Pool({
    user:user,
    password:pass,
    host:host,
    port:port,
    database: data

})
```
