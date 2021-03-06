var express = require('express');
var controlador = require('./controllers/controlador')

var router = express.Router();

router.post('/test', controlador.test);
router.post('/save_project', controlador.save_project)
router.get('/get_project/:name', controlador.get_project)
router.get('/show_projects', controlador.show_projects)
module.exports = router