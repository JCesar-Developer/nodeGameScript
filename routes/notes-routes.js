const {Router}  = require ('express');
const nota      = require('../controllers/notes-controller');
const router    = Router();

const { siSesionActiva } = require('../helpers/session');

//Agregar nueva nota
router.post("/notes/agregarNota", siSesionActiva, nota.agregarNota);

//Ver todas las notas
router.get("/notes/mostrarNotas", siSesionActiva, nota.mostrarNotas);

//Editar una nota
router.get("/notes/editarNota/:id", siSesionActiva, nota.formularioEditarNota);
router.put("/notes/editarNota/:id", siSesionActiva, nota.editarNota)

//Eliminar una nota
router.delete("/notes/eliminarNota/:id", siSesionActiva, nota.eliminarNota);


module.exports = router;