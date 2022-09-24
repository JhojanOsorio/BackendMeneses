'use strict'
var express = require('express');
var api=express.Router();
var registrationController=require('../controllers/registration.controller');


api.get('/Registration', registrationController.getRegistration);
module.exports=api;