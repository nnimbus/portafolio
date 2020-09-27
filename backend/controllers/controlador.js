var Project = require('../models/projects')
var controlador = {
    test: function(req, res) {
        return res.send({
            mensaje: 'Controlador funciona hola',
            parametros: req.body
        });
    },
    save_project: function(req, res) {
        var project = new Project();
        var params = req.body;
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.year = params.year;
        project.lenguajes = params.lenguajes;

        project.save((err, projectSaved) => {
            if (err) return res.status(500).send({
                mensaje: 'Error al guardar la entrada'
            });
            if (!projectSaved) return res.status(404).send({
                mensaje: 'No se pudo guardar el documento'
            });
            return res.status(200).send({
                mensaje: 'Proyecto Guardado en la base de datos',
                projecto: projectSaved
            })
        })
    },
    get_project: function(req, res) {
        var project_name = req.params.name;
        Project.find({ name: project_name }, (err, project) => {
            if (err) return res.status(500).send({ mensaje: 'Error al hacer la request' })
            if (!project) return res.status(404).send({ mensaje: 'No se encontro el proyecto' })
            return res.status(200).send(project)
        })
    },
    show_projects: function(req, res) {
        Project.find({}).exec((err, project) => {
            return res.status(200).send({ project })
        })
    }
};
module.exports = controlador;