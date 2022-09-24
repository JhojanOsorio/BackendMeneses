'use strict'
var Registration=require('../models/registration.model')


var registrationcontroller={
   
    getRegistration:(req, res)=>{
        Registration.find((err, Registration)=>{
            if(err) return res.status(500).send({message: "Error en el servidor" + err});
            if(!Registration) return res.status(404).send({message:"No se encontraron registros"})
            if(Registration) return res.status(200).send({Registration:Registration})
        });

    }

    


    
    


}




module.exports= registrationcontroller;
