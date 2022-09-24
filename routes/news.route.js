'use strict'
var express = require('express');
var api=express.Router();

var newsController=require('../controllers/news.controller');

api.get('/news', newsController.getNews);
api.post('/saveSport', newsController.insertNew)
api.get('/obtener', newsController.getAll )
module.exports=api;