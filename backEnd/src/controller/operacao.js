const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const operacao = await prisma.Operacao.create({
        data: req.body
    })
    res.status(200).json("operacao Cadastrado " + operacao).end();
}

const read = async (req, res) => {
    const operacaos = await prisma.Operacao.findMany()
    res.status(200).json(operacaos).end()
}

const readOp = async (req, res) => {
    const operacao = await prisma.Operacao.findUnique({
        "where": {
            "id": Number(req.params.id)
        }
    })

    res.status(200).json(operacao).end()
}

const update = async (req,res) => {
    var info = req.body
    info.data_retorno = new Date(req.body.data_retorno)
    const operacao = await prisma.Operacao.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(operacao).end()
}

const readFimOp = async (req, res) => {
    const operacao = await prisma.Operacao.findMany({
        "where": {
            NOT: {
                "data_retorno": null
            }
        }
    })
    res.status(200).json(operacao).end()
}

const readEmOp = async (req, res) => {
    const operacao = await prisma.Operacao.findMany({
        "where": {
            "data_retorno": null
        }
    })
    res.status(200).json(operacao).end()
}

module.exports = {
    create,
    read,
    readOp,
    update,
    readFimOp,
    readEmOp
}