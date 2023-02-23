const express = require('express');
const cors = require('cors');

const routerV = require('./routes/routeVeiculo');
const routerMo = require('./routes/routeMotorista');
const routerU = require('./routes/routeUsuario');
const routerMa = require('./routes/routeManutencao');
const routerO = require('./routes/routeOperacao');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerV);
app.use(routerMo);
app.use(routerU);
app.use(routerMa);
app.use(routerO);


app.listen(3000, () => { console.log("AgroTech"); })