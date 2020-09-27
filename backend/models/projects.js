var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
        name: String,
        descripcion: String,
        year: Number,
        lenguajes: String
    })
    // El argumento depende del nombre de la db en singular y mayuscula
module.exports = mongoose.model('proyectos', projectSchema)