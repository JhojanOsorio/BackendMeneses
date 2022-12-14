'use strict'
var News=require('../models/news.models')


var newscontroller={
   
    getNews:(req, res)=>{
        News.find((err, News)=>{
            if(err) return res.status(500).send({message: "Error en el servidor" + err});
            if(!News) return res.status(404).send({message:"No se encontraron Noticias"})
            if(News) return res.status(200).send({News: News})
        });

    },
    
    insertNew:(req, res)=>{
        var New=new News();
            var params= req.body;
            New.Name=params.Name;
            New.Fecha=params.Fecha;
           
            New.idSport=params.idSport,
            New.idUser= params.idUser;

            console.log(params);
            New.save((err, NewSaved)=>{
                if(err) return res.status(500).send({message:"Error en el servidor"+err});
                if(!NewSaved) return res.status(404).send("El producto no ha sido guardado");
                if(NewSaved) return res.status(200).send({New:NewSaved});
    
            });
    
    },
    getAll(req,res){
        News.find((err,News)=>{
            if(err)return res.status(500).send("Error en el servidor");
            if(!News)return res.status(404).send("No se encontraron productos");
            if(News) return res.status(200).send({News:News});
    
        });
    }

}



module.exports= newscontroller;