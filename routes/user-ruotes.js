const {Router}  = require ('express');
const user      = require('../controllers/user-controller');
const router    = Router();

const { siSesionActiva } = require('../helpers/session');

//LOGIN & LOGOUT
router.post("/user/login", user.userLogin);
router.get("/user/logout", siSesionActiva, user.userLogout);

//RUTAS PRINCIPALES
router.get("/lobby", siSesionActiva, user.renderLobby);
router.get("/playroom", siSesionActiva, user.renderPlayroom);

//CRUD
router.post('/user/register', user.userPost);
router.get('/user/all', user.userGetAll);
router.put('/user/:id', user.userUpdate);
router.delete('/user/:id', user.userDelete);

module.exports = router;


