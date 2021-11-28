const express = require('express');
const mongoose = require('mongoose');

require("./models/Artigo");
const Artigo = mongoose.model('artigo');

const app = express();

app.use(express.json());

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
  return res.json({titulo: "Como criar uma API"});
});

app.post("/artigo", (req, res) =>{
  console.log(req.body);
  return res.json(req.body);
});


app.listen(8080, () =>{
  console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});

