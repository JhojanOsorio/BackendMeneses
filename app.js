'use strict'


var express= require('express');
var bodyParser= require('body-parser');
var app= express();

//archivos de rutas rutas 
var userRoute=require('./routes/user.route');
var registrationRoute=require('./routes/registration.route');
var NewsRoute=require('./routes/news.route');
var SportRoute=require('./routes/sport.route.js');
//middlewares se ejecuta antes de la acción de un controlador

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/api', userRoute);
app.use('/api', registrationRoute);
app.use('/api', NewsRoute);
app.use('/api', SportRoute);
//Exportar

module.exports=app; 