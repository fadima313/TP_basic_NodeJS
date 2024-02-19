const mongoose = require('mongoose')

const LutteurSchema = mongoose.Schema({
    pseudo : {type: String},
    poids  : {type: Number , min:60 , max:250},
    taille : {type: Number , min:1.5 , max:2.5}
})

const Lutteur = mongoose.model("Lutter" , LutteurSchema)
module.exports = Lutteur;