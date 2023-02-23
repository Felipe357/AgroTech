const express = require('express');

const router = express.Router();

const Usuario = require("../controller/usuario");
const middle = require("../middleware/middleware")

router.post('/loginUsuario', Usuario.validate);
router.post('/cadUsuario', Usuario.create);


module.exports = router;