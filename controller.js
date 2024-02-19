const Lutteur = require('./model');

exports.getHomePage = function(req , res) {
    return res.status(200).json({
        "message" : "API de gestion de lutter",
        "version" :  "1.0",
        "author" : "LutteurApp"
    })
}

exports.createLutter = function(req , res) {
    let newLutteur = new Lutteur(req.body);
    newLutteur.save(function(err) {
        if (err) return res.send(err)
        res.send(newLutteur);
    })
}

exports.getAllLutteur = function(req , res) {
    Lutteur.find(function(err , lutteurs) {
        if (err) return res.send(err)
        res.send(lutteurs);
})
}

exports.updateLutteur = function(req , res) {
    Lutteur.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err , updatedLutteur ) =>{
        if (err) return res.send(err)
        res.send(updatedLutteur);
    })
}

exports.deleteLutteur = function(req , res) {
    Lutteur.findByIdAndRemove(
        req.params.id,
        (err , lutteur ) =>{
        if (err) return res.send(err)
        const response = {
            message : "Le lutteur a été supprimé",
            lutteur : lutteur
        }
        return res.send(response);
    })
}
