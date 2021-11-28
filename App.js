const express = require('express');
const mongoose = require('mongoose');

require("./models/Artigo");
const Artigo = mongoose.model('artigo');

const app = express();

//usar o formata json
app.use(express.json());

//conexão com o banco de dados
mongoose.connect('mongodb://localhost/celke', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});


app.get("/1", (req, res) =>{
    res.send("Introdução a api");
});


app.get("/", (req, res) =>{
  //return res.json({titulo: "Como criar uma API"});
  Artigo.find({}).then((artigo) =>{
    return res.json(artigo);
  }).catch((erro) =>{
    return res.status(400).json({error: "true", message: "Nenhuem artigo encontrado!"})
  })
});


app.post("/artigo", (req, res) =>{
  const artigo = Artigo.create(req.body, (err) =>{
    if(err) return res.status(400).json({
      error: true,
      message: "Artigo não foi cadastrado"
    })

    return res.status(200).json({
      error: false,
      message: "Artigo foi cadastrado com sucesso!"
    })
  })

  console.log(req.body)
});


//criar servidor na porta 8080
app.listen(8080, () =>{
  console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});

