const mongoose = require('mongoose');

const Artigo = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    conteudo:{
        type: String,
        required: true
    }

},
{
    timestamp: true,
});

mongoose.model('artigo', Artigo);