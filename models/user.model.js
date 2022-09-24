'use strict'

var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var UserSchema= new Schema({

    Username:Schema.Types.String,
    Password:Schema.Types.String,
    Role:Schema.Types.String,

}, {collection:"User" });
module.exports=mongoose.model("User", UserSchema);