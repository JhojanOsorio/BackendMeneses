var Sport= require('../models/sport.models')

function insertSport(req, res){
    var params=req.body;
    var sport = Sport();

    sport.Name=params.Name;
    sport.Type= params.Type;

    sport.save((err, sport)=>{
        if(err)return res.status(500).send({message:"Error en el servidor"});
        if(!sport) return res.status(404).send({message:"Error al guardar"});
        if(sport) return res.status(200).send({Sport: sport});
    })
    

}
module.exports={insertSport}