// configurar o servidor 
const express = require("express")
const server = express()

// TESTE DE ARQUIVO .ENV

require('dotenv/config')
const user= (process.env.DB_NAME)
const pass= (process.env.DB_PASS)
const host= (process.env.DB_HOST)
const port= (process.env.DB_PORTA)
const data= (process.env.DB_DATABASE)
// configurar servidor para apresentar arquivos estaticos
server.use(express.static('public'))

// habilitar body do formulario 
server.use(express.urlencoded({extended:true}))

// configurar a conexao com banco de dados 
const Pool= require('pg').Pool
const db= new Pool({
    user:user,
    password:pass,
    host:host,
    port:port,
    database: data

})
// configurando a template engine 
const nunjucks =require("nunjucks")
nunjucks.configure("./",{
    express:server,
    noCache: true,
})



// configurar a apresentação da pagina 
server.get("/",function(req,res){
    db.query("SELECT * FROM donor", function(err,result){
        if(err) return res.send("Erro de pesquisa no banco de dados.")

        const donors=result.rows
        return res.render("index.html",{ donors})

    })
   

})

server.post("/", function(req, res){
    // pegar dados do formulario 
    const name= req.body.name
    const email= req.body.email
    const blood= req.body.blood

    if(name==""||email==""||blood==""){

        return res.send("Todos os campos são obrigatórios.")
    }
   
    // coloco valores dentro do banco de dados
    const query=`
        INSERT INTO donor ("name","email","blood")
        VALUES ($1, $2, $3)`

    const values=[name, email, blood]

    db.query(query, values, function(err){
        // fluxo de erro
        if(err) return res.send("Erro no banco de dados.")

        // fluxo ideal
        return res.redirect("/")
    })
    

})

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){
    console.log("iniciei o servidor.")
})
