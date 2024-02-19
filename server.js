const express = require('express')
const routes = require("./routage")
const db = require('./connectdb')
const app = express()

db.on('error' , () => console.log("Database failed"))
db.once('open' , () => console.log("Database success"))

app.use(express.json({extended : false}))
app.use('/api/' , routes);
app.use('/' , routes);


app.listen("4000" , () => {
    console.log("Bienvenue sur express , j'ecoute sur le port 4000")
    console.log("Acceder au site a l'adresse suivant http://localhost:4000");
})