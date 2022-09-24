var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var RegistrationSchema= new Schema({

    Name:Schema.Types.String,
    LastName:Schema.Types.String,
    Addres:Schema.Types.String,
    Email:Schema.Types.String,
    Password:Schema.Types.String,
    Telephone:Schema.Types.String


}, {collection:"Registration" });
module.exports=mongoose.model("Registration", RegistrationSchema);