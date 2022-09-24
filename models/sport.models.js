var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sportSchema = new Schema({

    Name: Schema.Types.String,
    Type: Schema.Types.String,
    
}, {collection:"Sport"})

module.exports=mongoose.model('Sport', sportSchema);