const express = require('express');

const app = express();

app.get("/1", (req, res) =>{
    res.send("Introdução a api");
});

app.get("/", (req, res) =>{
  return res.json({titulo: "Como criar uma API"});
});





app.listen(8080, ()=>{
    console.log("servidor iniciado na porta 8080: http://localhost:8080/");
})

