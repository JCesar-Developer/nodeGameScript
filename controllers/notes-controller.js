const Note  = require("../models/note-model");

// --------------------------------------------------- //
// ---------------------  CREATE --------------------- //
// --------------------------------------------------- //

const agregarNota = async( req, res ) => {
    const { title, description } = req.body;
    const errors = [];

    if ( !title ) {
        errors.push({text: 'Por favor, agregue un título'});
    } 
    if ( !description ) {
        errors.push({text: 'Por favor, agregue una descripción'});
    }
    if ( errors.length > 0 ){
        res.render('users/lobby', { errors });
    } else {
        const newNote = new Note({ title, description });
        newNote.user = req.user.id;
        await newNote.save();
        console.log(`\n${req.user.username} ha agregado una nueva nota:\n${newNote}`);
        req.flash('succes_msg', 'Nota agregada exitosamente');
        res.redirect('/lobby');
    };

};

// --------------------------------------------------- //
// ----------------------  READ ---------------------- //
// --------------------------------------------------- //

const mostrarNotas = async( req, res ) => {
    
    const notes = await Note.find({ user: req.user.id }).sort({date: "-1"});
    res.render("notes/all-notes", { notes });

};

// --------------------------------------------------- //
// ---------------------  UPDATE --------------------- //
// --------------------------------------------------- //

const formularioEditarNota = async( req, res) => {

    const note = await Note.findById( req.params.id )
    res.render( 'notes/edit-note', { note } );

}

const editarNota = async( req, res) => {

    const { title, description } = req.body;
    
    notaCambiada = await Note.findByIdAndUpdate( req.params.id, { title, description });
    req.flash("success_msg", "Nota actualizada, satisfactoriamente.");
    res.redirect("/notes/mostrarNotas");

};

// --------------------------------------------------- //
// ---------------------  DELETE --------------------- //
// --------------------------------------------------- //

const eliminarNota = async( req, res ) => {

    await Note.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Nota eliminada, satisfactoriamente.");
    res.redirect('/notes/mostrarNotas');

};


module.exports = {
    agregarNota,
    mostrarNotas,
    formularioEditarNota,
    editarNota,
    eliminarNota,
};

