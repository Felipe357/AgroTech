const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const veiculo = await prisma.Veiculo.createMany({
        data: req.body
    })
    res.status(200).json("Veiculo Cadastrado " + veiculo).end();
}

const read = async (req,res) => {
    const veiculo = await prisma.Veiculo.findMany({
        select: {
            id: true,
            placa: true,
            modelo: true,
            marca: true,
            tipo:true,
            disponivel: true,
            operacoa: true,
            manutencao: true
        }
    })
    res.status(200).json(veiculo).end()
}

const readVe = async (req,res) => {
    const veiculo = await prisma.Veiculo.findUnique({
        "where": {
            "id": Number(req.params.id)
        }
    })

    res.status(200).json(veiculo).end()
}

const readVeiculo = async (req,res) => {
    const veiculo = await prisma.Veiculo.findUnique({
        "where": req.body
    })

    res.status(200).json(veiculo).end()
}

const update = async (req,res) => {
    const veiculo = await prisma.Veiculo.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(veiculo).end()
}

const remove = async (req,res) => {
    const veiculo = await prisma.Veiculo.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(veiculo).end()
}

module.exports = {
    create,
    read,
    readVe,
    update,
    remove,
    readVeiculo
}