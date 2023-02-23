const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(req.body)
    
    jwt.verify(token, process.env.KEY, (err, data) => {
        if (err != null) res.status(404).json(err).end()
        else {
            if (data.tipo === "gerente") {
                next();
            } else {
                res.status(401).end();
            }
        }
    })
    res.status(200).end();
}

module.exports = {
    validaAcesso
}