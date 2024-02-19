const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://usermongodb:TMeT1olbq9rit5FC@cluster0.ivuy4wj.mongodb.net/lutteurdb?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const db = mongoose.connection;
module.exports = db
