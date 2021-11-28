const mongoose = require('mongoose');

const Artigo = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
    },
    valor: {
        type: Boolean,
    }
    
    
},
{
    timestamps: true,
});

mongoose.model('artigo', Artigo);