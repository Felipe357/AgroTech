const express = require('express');

const router = express.Router();

const Manutencao = require("../controller/manutencao");


router.post('/cadManutencao', Manutencao.create);
router.put('/updateManutencao/:id', Manutencao.update);
router.get('/readManutencao', Manutencao.read);
router.get('/readAllManutencao/:id', Manutencao.readMa);
router.get('/readEmManutencao', Manutencao.readEmMa);
router.get('/readFimManutencao', Manutencao.readFimMa);


module.exports = router;