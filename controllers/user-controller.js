const User      = require("../models/user-model");
const Joi       = require('@hapi/joi');
const passport  = require('passport');


//DEFINICIÓN DE REGLAS DE VALIDACIÓN:
const userValidateSchema = Joi.object({

    username: Joi.string()
        .min(3)
        .required(),
    
    password: Joi.string()
        .min(4)
        .required(),

});

// async function incrementScore(value) {

//     await User.findOneAndUpdate({ "username" : "Julito "}, {
//         $set: { score: value }})

// };

// --------------------------------------------------- //
// ---------------  RUTAS PRINCIPALES ---------------- //
// --------------------------------------------------- //
const renderLobby = (req, res) => {
    res.render("users/lobby");
};
const renderPlayroom = (req, res) => {
    res.render("users/playroom");
};

// --------------------------------------------------- //
// ----------------  LOGIN & LOGOUT ------------------ //
// --------------------------------------------------- //
//MEDIANTE FRAMEWORK PASSPORT
const userLogin = passport.authenticate("local", {
    successRedirect : "/lobby",
    failureRedirect : "/",
    failureFlash    : true,
});

const userLogout = (req, res) => {
    req.logout()
    res.redirect('/');
};

// --------------------------------------------------- //
// ---------------------  CREATE --------------------- //
// --------------------------------------------------- //

//- REST Post  
const userPost = (req, res) => {

    const body  = req.body;

    //VALIDACIÓN
    const { error, value } =  userValidateSchema.validate({ 
        username    : body.username,
        password    : body.password
    });

    //EJECUCIÓN DEL MÉTODO
    if(!error) {   
        crearUsuario(body)
            .then ( valor => {
                req.flash('success_msg', 'El usuario se ha creado correctamente'),
                console.log(`El USUARIO ${valor.username} SE HA CREADO CORRECTAMENTE`),
                res.redirect('/')
            })
            .catch ( err => {
                res.status(400),
                req.flash('error_msg', 'ERROR: Ya existe un usuario con esté nombre, porfavor, vuelva a intentarlo con otro nombre'),
                res.redirect('/')
            })
    } else {
        res.status(400),
        req.flash('error_msg', `ERROR: ${error.details[0].message}`),
        res.redirect('/')
    }
};

//- CRUD Create  
crearUsuario = async(body) => {

    let user = new User({
        username    : body.username,
        password    : body.password,
    });
    
    return await user.save();

};

// --------------------------------------------------- //
// ----------------------  READ ---------------------- //
// --------------------------------------------------- //

//- REST GET-ALL
const userGetAll = (req, res) => {

    listarUsuarios()
        .then( valor => res.send({ valor }))
        .catch( err => res.status(400).json({ err }));

};

//- CRUD READ-ALL
listarUsuarios = async() => {

    return User.find()

};


// --------------------------------------------------- //
// ---------------------  UPDATE --------------------- //
// --------------------------------------------------- //

//- REST Put 
const userUpdate = (req, res) => {

    let id      = req.params.id;
    let body    = req.body;

    actualizarUser(id, body)
        .then( valor => res.json({ valor }))
        .catch( err => res.status(400).json({ err }));

};

//- CRUD Update  
actualizarUser = async(id, body) => {

    return await User.findOneAndUpdate({ "_id" : id}, {
        $set: {
            username: body.username,
            password: body.password
        }
    }, { new: true });
     
};


// --------------------------------------------------- //
// ---------------------  DELETE --------------------- //
// --------------------------------------------------- //

//- REST Delete 
//RECUERDA: En las bases de datos reales, no es usual eliminar un dato.
//          Por ello, lo que se suele hacer, es desactivar dichos usuarios.
const userDelete = (req, res) => {

    desactivarUsuario(req.params.id)
        .then( valor => res.json({ valor }))
        .catch( err => res.status(400).json({ err }));

};

//- CRUD Delete  
desactivarUsuario = async(id) => {

    return usuario = await User.findOneAndUpdate({ "_id": id }, {
        $set: { estado : false }
    }, { new: true });

}

module.exports = {
    renderLobby,
    renderPlayroom,
    userLogin,
    userLogout,
    userPost,
    userGetAll,
    userUpdate,
    userDelete
};

/* CÓDIGO DESCARTADO
//MÉTODO 1 (DESCARTADO)
route.post('/user/login', ( req, res )=>{

    const{username,password}=req.body;
    User.findOne({username},(err,User)=>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
        }else if(!User){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else{
            User.isCorrectPassword(password,(err,result)=>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR');
                }else if(result){
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            });
        }
    });
});

//MÉTODO 2: DESCARTADO
route.get('/user/login', (req, res) => {

    const { username, password } = req.body;

    validacion( username, password )
        .then( valor => {
            res.json({ valor })
            console.log(valor);
        })
        .catch( error => res.status(400).json({ error }))

});

validacion = async ( username, password ) => {

    return await User.find({ "username": username, "password": password });

};
 */