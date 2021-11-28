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

//solicitar todos dados salvos no banco de dados
app.get("/", (req, res) =>{
  //return res.json({titulo: "Como criar uma API"});
  Artigo.find({}).then((artigo) =>{
    return res.json(artigo);
  }).catch((erro) =>{
    return res.status(400).json({error: "true", message: "Nenhuem artigo encontrado!"})
  })
});

//solicitar um dados especificado dentro do banco de dados utilizando _ID
app.get("/artigo/:id", (req, res)=>{
  console.log(req.params.id)

  Artigo.findOne({_id:req.params.id}).then((artigo)=>{
    return res.json(artigo);
  }).catch((erro)=>{
    return res.status(400).json({error: true, message:"Nenhuem artigo encontardo"})
  })
  
})

//solicitar somente 1 dado pelo cpf ou nome
app.get("/cpf/:cpf", (req, res)=>{
  console.log(req.params.cpf);

  Artigo.findOne({cpf:req.params.cpf}).then((artigo)=>{
    return res.json(artigo);
  }).catch((erro)=>{
    return res.status(400).json({error: true, message:"Nenhuem artigo encontardo"})
  })
  
})

//solicitar todos os dados com o mesmo cpf ou nome
app.get("/nome/:nome", (req, res)=>{
  console.log(req.params.nome);

  Artigo.find({nome:req.params.nome}).then((artigo)=>{
    return res.json(artigo);
  }).catch((erro)=>{
    return res.status(400).json({error: true, message:"Nenhuem artigo encontardo"})
  })
  
})

//solicitar todos os dados com o mesmo cpf ou nome
app.get("/valor/:valor", (req, res)=>{
  console.log(req.params.valor);

  Artigo.find({valor:req.params.valor}).then((artigo)=>{
    return res.json(artigo);
  }).catch((erro)=>{
    return res.status(400).json({error: true, message:"Nenhuem artigo encontardo"})
  })
  
})


//salvar dados no banco de dados
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

//Alterando um valor no banco de dados
app.put("/cpf/:cpf", (req, res) =>{
  const artigo = Artigo.updateOne({cpf:req.params.cpf}, req.body, (err) =>{
    if(err) return res.status(400).json({
      error: true,
      message: "Artigo não foi possivel editar!"
    });

    return res.json({
      error: false,
      message: "Artigo iditado com sucesso!"
    })

  });

})

//Excluir informação dentro do banco de dados
app.delete("/cpf/:cpf", (req, res) =>{
  const artigo = Artigo.deleteOne({cpf:req.params.cpf}, req.body, (err) =>{
    if(err) return res.status(400).json({
      error: true,
      message: "Artigo não foi possivel deletar!"
    });

    return res.json({
      error: false,
      message: "Artigo deletado com sucesso!"
    })

  });

})


//criar servidor na porta 8080
app.listen(8080, () =>{
  console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});

