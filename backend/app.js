'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var rutas = require('./rutas')
app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    })
    // Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Rutas
app.use('/api', rutas);


module.exports = app;