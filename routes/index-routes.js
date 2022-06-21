const {Router}  = require ('express');
const index     = require('../controllers/index-controller');
const router    = Router();

router.get("/", index.renderIndex);
router.get("/contact", index.renderContact);

module.exports = router;