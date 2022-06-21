const mongoose  = require('mongoose');

const partidaSchema = new mongoose.Schema({

    //REQUIRED:
    idPartida   : { type:String, required: true },
    estado      : { type:Boolean, default: true },
    
    //NOT REQUIRED:
    jugadores   : [ { type:String, required: false } ],
    nomPartida  : { type:String, required: false },
    passPartida : { type:String, required: false },
    ganador     : { type:String, required: false }

});

module.exports = mongoose.model('Sala', partidaSchema);