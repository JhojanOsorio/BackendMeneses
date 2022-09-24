'use strict'
var User = require('../models/user.model.js')
var bcrypt = require('bcrypt-nodejs')
var jwt = require('../Services/jwt.js')

//Funcion registro de usuario
function prueba(req, res) {
    res.status(200).send({ message: "BIENVENIDO" });
}


function register(req, res) {


    var params = req.body;
    var user = new User();

    user.Username = params.Username;
    user.Role = "Admin";

    if (params.Password) {
        bcrypt.hash(params.Password, null, null, (err, hash) => {

            user.Password = hash;

            user.save((err, user) => {
                if (err) return res.status(500).send({ message: "Error en el servidor" + err });
                if (!user) return res.status(404).send({ message: "No se puede gaurdar usuario" + err })
                if (user) return res.status(200).send({ user: user })




            });
        });
    }

}

function login(req, res) {

    var params = req.body;

    var Username = params.Username;

    var Password = params.Password;

    User.findOne({ Username: Username }, (err, user) => {
        if (err) return res.status(500).send({ message: "Error en el servidor" + err });
        if (!user) return res.status(404).send({ message: "No existe el usuario" })
        if (user) {
            bcrypt.compare(Password, user.Password, function (err, check) {
                if (check) {


                    if (params.gethash) {
                        return res.status(200).send({ token: jwt.createToken(user) })
                    } else {
                        return res.status(200).send({ user: user });
                    }

                }
            });
        }

    });
}

function updateUser(req, res) {
    let id = req.params.id;
    let params = req.body;

    if (req.user.sub != id) {
        return res.status(404).send({ message: "No esta autorizado para entrar" })
    }
    User.findByIdAndUpdate(id, params, (err, userupdate) => {
        if (err) return res.status(500).send({ message: "Error en el servidor" + err });
        if (!userupdate) return res.status(404).send({ message: "No se puede gaurdar usuario" + err })
        if (userupdate) return res.status(200).send({ userupdate: userupdate })

    });







}
module.exports = { register, login, prueba, updateUser };