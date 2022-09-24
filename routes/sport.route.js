var express = require('express');
var api=express.Router();

var sportController =require('../controllers/sport.controller');

api.post('/sport', sportController.insertSport)

module.exports=api;