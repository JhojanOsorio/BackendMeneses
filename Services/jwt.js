var jwt = require('jwt-simple');
var moment = require('moment')
var clave="Clave-Secreta";

exports.createToken=function(user){
    var payload={
        sub:user._id,
        name:user.Username,
        role:user.Role,
        iat:moment().unix(),
        exp:moment().add(30, 'days').unix



    };
    return jwt.encode(payload, clave);

}