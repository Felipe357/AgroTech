const express = require('express');

const router = express.Router();

const Operacao = require("../controller/operacao");


router.post('/cadOperacao', Operacao.create);
router.get('/readOperacao', Operacao.read);
router.get('/readAllOperacao/:id', Operacao.readOp);
router.put('/updateOperacao/:id', Operacao.update);
router.get('/readEmOperacao', Operacao.readEmOp);
router.get('/readFimOperacao', Operacao.readFimOp);


module.exports = router;