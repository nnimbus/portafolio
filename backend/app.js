'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var rutas = require('./rutas')
// Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// Rutas
app.use('/api', rutas);

module.exports = app;