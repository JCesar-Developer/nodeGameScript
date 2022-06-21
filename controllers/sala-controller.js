const express   = require('express');
const Sala      = require('../models/sala-model');
const Joi       = require('@hapi/joi');
const route     = express.Router();

//DEFINICIÓN DEL VALIDADOR DE PARÁMETROS:
const schema = Joi.object({
    nomPartida: Joi.string()
        .min(4)
        .max(10),

    passPartida: Joi.string()
        .min(4)
        .max(10)

});

// --------------------------------------------------- //
// ---------------------  CREATE --------------------- //
// --------------------------------------------------- //
//- REST Post  
//- CRUD Create  


// --------------------------------------------------- //
// ----------------------  READ ---------------------- //
// --------------------------------------------------- //
//- REST Get
//- CRUD Read 


// --------------------------------------------------- //
// ---------------------  UPDATE --------------------- //
// --------------------------------------------------- //
//- REST Put 
//- CRUD Update  


// --------------------------------------------------- //
// ---------------------  DELETE --------------------- //
// --------------------------------------------------- //
//- REST Delete 
//- CRUD Delete 

module.exports = route;