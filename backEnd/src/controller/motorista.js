const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const motorista = await prisma.Motorista.createMany({
        data: req.body
    })
    res.status(200).json("Motorista Cadastrado " + motorista).end();
}

const read = async (req,res) => {
    const motoristas = await prisma.Motorista.findMany({
        select: {
            id: true,
            cpf: true,
            cnh: true,
            nome: true,
            disponivel: true,
            operacao: true
        }
    })
    res.status(200).json(motoristas).end()
}

const readMoto = async (req,res) => {
    const motorista = await prisma.Motorista.findUnique({
        "where": {
            "id": Number(req.params.id)
        }
    })

    res.status(200).json(motorista).end()
}

const readMotorista = async (req,res) => {
    const motorista = await prisma.Motorista.findMany({
        "where": req.body
        
    })

    res.status(200).json(motorista).end()
}

const update = async (req,res) => {
    const motorista = await prisma.Motorista.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(motorista).end()
}

const remove = async (req,res) => {
    const motorista = await prisma.Motorista.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(motorista).end()
}

module.exports = {
    create,
    read,
    readMoto,
    update,
    remove,
    readMotorista
}