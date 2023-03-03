const express = require('express');

const router = express.Router();

const Veiculo = require("../controller/veiculo");


router.post('/cadVeiculo', Veiculo.create);
router.delete('/deleteVeiculo/:id', Veiculo.remove);
router.put('/updateVeiculo/:id', Veiculo.update);
router.get('/readVeiculo', Veiculo.read);
router.get('/readAllVeiculo/:id', Veiculo.readVe);
router.post('/readAllVeiculo', Veiculo.readVeiculo);


module.exports = router;