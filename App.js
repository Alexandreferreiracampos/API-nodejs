const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/celke', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log('Conexão com bando de dados com o MongoDB realizado com sucesso!');
}).catch(()=>{
  console.log("Erro: Conexão com o MongoDB não foi realizado com sucesso!");
});

app.get("/1", (req, res) =>{
    res.send("Introdução a api");
});

app.get("/", (req, res) =>{
  return res.json({titulo: "Como criar uma API"});
});


app.listen(8080, ()=>{
    console.log("servidor iniciado na porta 8080: http://localhost:8080/");
})

