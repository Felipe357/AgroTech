const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const manutencao = await prisma.Manutencao.create({
        data: req.body
    })
    res.status(200).json("manutencao Cadastrado " + manutencao).end();
}

const read = async (req, res) => {
    const manutencaos = await prisma.Manutencao.findMany({
        select : {
            veiculo: true,
            descricao: true,
            valor: true,
            data_inicio: true,
            data_fim: true,
            id: true
        }
    })
    res.status(200).json(manutencaos).end()
}

const readEmMa = async (req, res) => {
    const manutencaos = await prisma.Manutencao.findMany({
        "where": {
            "data_fim": null
        }
    })
    res.status(200).json(manutencaos).end()
}

const readFimMa = async (req, res) => {
    const manutencaos = await prisma.Manutencao.findMany({
        "where": {
            NOT: {
                "data_fim": null
            }
        }
    })
    res.status(200).json(manutencaos).end()
}


const readMa = async (req, res) => {
    const manutencao = await prisma.Manutencao.findUnique({
        "where": {
            "id": Number(req.params.id)
        },
        select : {
            veiculo: true,
            descricao: true,
            valor: true,
            data_inicio: true,
            data_fim: true
        }
    })

    res.status(200).json(manutencao).end()
}

const update = async (req, res) => {
    var info = req.body
    info.data_fim = new Date(req.body.data_fim)
    const manutencao = await prisma.Manutencao.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(manutencao).end()
}


module.exports = {
    create,
    read,
    readMa,
    readEmMa,
    readFimMa,
    update
}