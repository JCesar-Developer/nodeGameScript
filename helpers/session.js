const helpers = {}

helpers.siSesionActiva = ( req, res, next ) => {

    if(req.isAuthenticated()) {
        return next();
    }
    req.flash( 'error_msg', 'Usuario no autorizado' );
    res.redirect( '/' );

};

helpers.siEntraSala = ( req, res, next ) => {

    if(req.isAuthenticated()) {
        return next();
    }
    req.flash( 'error_msg', 'Usuario no autorizado' );
    res.redirect( '/lobby' );

};

module.exports = helpers;