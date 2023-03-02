const express = require('express');

const router = express.Router();

const Motorista = require("../controller/motorista");


router.post('/cadMotorista', Motorista.create);
router.delete('/deleteMotorista/:id', Motorista.remove);
router.put('/updateMotorista/:id', Motorista.update);
router.get('/readMotorista', Motorista.read);
router.get('/readAllMotorista/:id', Motorista.readMoto);
router.get('/readAllMotorista', Motorista.readMotorista);


module.exports = router;