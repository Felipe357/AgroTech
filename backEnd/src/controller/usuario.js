const { PrismaClient } = require('@prisma/client');

const jwt = require('jsonwebtoken')
require('dotenv').config()

const prisma = new PrismaClient();

const create = async (req, res) => {
    let funcionario = await prisma.Usuario.createMany({
        data: req.body
    })
    res.status(200).json("Funcionario Cadastrado " + funcionario).end();
}

const validate = async (req, res) => {
    let funcionario = await prisma.Usuario.findMany({
        where: {
            email: req.body.email,
            senha: req.body.senha
        },
        select: {
            nome: true,
            tipo: true
        }
    })
    jwt.sign(funcionario[0], process.env.KEY, { expiresIn: '8m' }, function (err, token) {
        if (err === null) {
            funcionario[0]["token"] = token
            res.status(200).json(funcionario[0]).end()
        } else {
            res.status(404).json(err).end()
        }
    });
}

module.exports = {
    validate,
    create
}