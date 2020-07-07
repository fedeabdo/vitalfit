var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');
var session = require("express-session");

var app = express();
var port = process.env.PORT || 3001;
app.use(serveStatic(path.join(__dirname, 'www')));

app.listen(port,  function () {  
	console.log('http://localhost:' + port);
});

//importing routes
const indexRoutes = require('./src/routes/index');//le aviso que aca estan las rutas
//routes
app.use('/', indexRoutes);