var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var NewsSchema= new Schema({

    Name:Schema.Types.String,
    Fecha:Schema.Types.Date,
    IdSport:{type:Schema.Types.ObjectId, ref:'Sport'},
    IdUser:{type:Schema.Types.ObjectId, ref:'User'}


}, {collection:"News" });
module.exports=mongoose.model("News", NewsSchema);