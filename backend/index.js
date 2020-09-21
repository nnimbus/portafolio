var express = require('express')
var mongoose = require('mongoose')
const port = 3700
var app = require('./app')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("Conexion a la basa de datos realizada")
})
app.listen(port, ()=>{
  console.log(`Servidor escuchando en el puerto ${port}`)
})
