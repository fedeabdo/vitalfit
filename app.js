var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');
var UUID = require("uuid");
var bodyParser = require("body-parser");
var bCrypt = require("bcryptjs");

var app = express();
var port = process.env.PORT || 3001;
app.use(serveStatic(path.join(__dirname, 'www')));

app.listen(port,  function () {  
	console.log('http://localhost:' + port);
});

//conectar a bdd
mongoose.connect('mongodb://localhost/vitalfit', { useUnifiedTopology: true , useNewUrlParser: true })
    .then(db => console.log('DB connected'))//tira este mensaje si se conecto
    .catch(err => console.log(err))//tira esto si no conecto

//importing routes
const indexRoutes = require('./src/routes/index');//le aviso que aca estan las rutas
//routes
app.use('/', indexRoutes);