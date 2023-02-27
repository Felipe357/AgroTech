function checkDisponibilidade(e) {
    var radio = document.getElementById(e.id)
    var carros = document.querySelector(".disponibilidade").querySelectorAll(".carro")
    if (e.id === "radioD") {
        radio.style.backgroundColor = "#fff"
        radio.id = "radioDi"
        carros.forEach(c => {
            c.classList.remove("model")
        })
    } else {
        radio.style.backgroundColor = "#ff844b"
        radio.id = "radioD"
        carros.forEach(c => {
            if (c.classList[1] != "ind") {
                c.classList.add("model")
            }
        })
    }
}

function checkOp(e) {
    var radio = document.getElementById(e.id)
    var carros = document.querySelector(".alocacao").querySelectorAll(".carro")
    if (e.id === "radioO") {
        radio.style.backgroundColor = "#fff"
        radio.id = "radioOp"
        carros.forEach(c => {
            c.classList.remove("model")
        })
    } else {
        radio.style.backgroundColor = "#ff844b"
        radio.id = "radioO"
        carros.forEach(c => {
            if (c.classList[1] != "ind") {
                c.classList.add("model")
            }
        })
    }
}

function checkManutencao(e) {
    var radio = document.getElementById(e.id)
    var carros = document.querySelector(".manutencao").querySelectorAll(".carro")
    if (e.id === "radioM") {
        radio.style.backgroundColor = "#fff"
        radio.id = "radioMa"
        carros.forEach(c => {
            c.classList.remove("model")
        })
    } else {
        radio.style.backgroundColor = "#ff844b"
        radio.id = "radioM"
        carros.forEach(c => {
            if (c.classList[1] != "ind") {
                c.classList.add("model")
            }
        })
    }
}

var filtro1 = "n"
var filtro2 = "n"

function checkManutencaoGeral(e) {
    var radio = document.querySelector("." + e.classList[1])
    var radios = radio.parentNode.parentNode.querySelectorAll(".radio2")

    if (radio.classList[2] !== undefined) {
        radio.classList.remove("geral")
        filtro1 = "n"
    } else {
        radios.forEach(r => {
            if (r.classList[2] !== undefined) {
                r.classList.remove("geral")
                filtro1 = "n"
            }
        })
        radio.classList.add("geral")
        filtro1 = radio.getAttribute("data")
    }
    filtroManutencao()
}

function checkManutencaoGeral2(e) {
    var radio = document.querySelector("." + e.classList[1])
    var radios = radio.parentNode.parentNode.querySelectorAll(".radio2")

    if (radio.classList[2] !== undefined) {
        radio.classList.remove("geral")
        filtro2 = "n"
    } else {
        radios.forEach(r => {
            if (r.classList[2] !== undefined) {
                r.classList.remove("geral")
                filtro2 = "n"
            }
        })
        radio.classList.add("geral")
        filtro2 = radio.getAttribute("data")
    }

    filtroManutencao()
}

function filtroManutencao() {
    var carros = document.querySelector(".manutencaoGeral").querySelectorAll(".carro")

    carros.forEach(c => {
        console.log(c);

        if (filtro1 != "n" && filtro2 != "n") {
            if (filtro1 !== c.getAttribute("data") || filtro2 !== c.getAttribute("dis")) {
                c.classList.add("model")
            } else {
                c.classList.remove("model")
            }
        } else if (filtro1 != "n") {
            if (filtro1 !== c.getAttribute("data")) {
                c.classList.add("model")
            } else {
                c.classList.remove("model")
            }
        } else if (filtro2 != "n") {
            if (filtro2 !== c.getAttribute("dis")) {
                c.classList.add("model")
            } else {
                c.classList.remove("model")
            }
        } else {

            c.classList.remove("model")
        }


    })
}

function alterRe(e) {
    document.querySelector(".efect").classList.remove("efect")
    var re = document.getElementById(e.id)
    re.classList.add("efect")

    document.querySelectorAll(".page").forEach(a => a.classList.add('model'))

    if (e.id == "r1") {
        document.querySelector(".content").classList.remove("model")
    } else if (e.id == "r4") {
        document.querySelector(".content4").classList.remove("model")
    } else if (e.id == "r3") {
        document.querySelector(".content3").classList.remove("model")
    } else if (e.id == "r2") {
        document.querySelector(".content2").classList.remove("model")
    } else if (e.id == "r5") {
        document.querySelector(".content5").classList.remove("model")
    }

}

function closeModal(e) {
    var modal = document.getElementById(e.id).parentNode.parentNode
    modal.classList.add("model")
}

function showModalOp(e) {
    var modal = document.querySelector(".modalOp")
    modal.classList.remove("model")

    const options = { method: 'GET' };

    fetch('http://localhost:3000/readAllOperacao/' + e.id, options)
        .then(response => response.json())
        .then(operacao => {
            document.querySelector("#nomeOp").innerHTML = operacao.motorista.nome
            document.querySelector("#cpfOp").innerHTML = operacao.motorista.cpf
            document.querySelector("#placaOp").innerHTML = operacao.veiculo.placa
            document.querySelector("#modeloOp").innerHTML = operacao.veiculo.modelo
            document.querySelector("#saidaOp").innerHTML = new Date(operacao.data_saida).toLocaleDateString('pt-br', { timeZone: 'UTC' })

            if (operacao.data_retorno !== null) {
                document.querySelector("#retornoOp").innerHTML = new Date(operacao.data_retorno).toLocaleDateString('pt-br', { timeZone: 'UTC' })
            } else {
                document.querySelector("#retornoOp").innerHTML = "Em uso"
            }

            document.querySelector("#descricaoOp").innerHTML = operacao.descricao
        })
}

function showModalMaGeral(e) {
    var modal = document.querySelector(".modalMa")
    modal.classList.remove("model")

    const options = { method: 'GET' };

    fetch('http://localhost:3000/readAllManutencao/' + e.id, options)
        .then(response => response.json())
        .then(response => {
            document.querySelector("#descricaoMaGeral").innerHTML = response.descricao
        })

}

function carregarVe() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readVeiculo', options)
        .then(response => response.json())
        .then(carros => {
            carros.forEach((c) => {
                var carro = document.querySelector(".disponibilidade").querySelector(".carro").cloneNode(true)
                carro.classList.remove("model2")

                carro.querySelector("#tipo").innerHTML = c.tipo
                carro.querySelector("#placa").innerHTML = c.placa
                carro.querySelector("#modelo").innerHTML = c.modelo
                carro.querySelector("#marca").innerHTML = c.marca

                if (c.disponivel !== true) {
                    carro.classList.add("ind")
                }

                if (c.tipo === "visita") {
                    carro.querySelector("img").src = "./imgs/visita.png"
                } else if (c.tipo === "carga") {
                    carro.querySelector("img").src = "./imgs/carga.png"
                } else {
                    carro.querySelector("img").src = "./imgs/venda.png"
                }

                document.querySelector(".disponibilidade").appendChild(carro)
            })
        })
}

function carregarOp() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readOperacao', options)
        .then(response => response.json())
        .then(operacao => {
            operacao.forEach((op) => {
                var carro = document.querySelector(".alocacao").querySelector(".carro").cloneNode(true)
                carro.classList.remove("model2")

                carro.id = op.id

                carro.querySelector("#motorista").innerHTML = op.motorista.nome
                carro.querySelector("#veiculo").innerHTML = op.veiculo.placa

                carro.querySelector("#saida").innerHTML = new Date(op.data_saida).toLocaleDateString('pt-br', { timeZone: 'UTC' })

                if (op.data_retorno !== null) {
                    carro.querySelector("#retorno").innerHTML = new Date(op.data_retorno).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                } else {
                    carro.querySelector("#retorno").innerHTML = "Em uso"
                    carro.classList.add("ind")
                }

                if (op.veiculo.tipo === "visita") {
                    carro.querySelector("img").src = "./imgs/visita.png"
                } else if (op.veiculo.tipo === "carga") {
                    carro.querySelector("img").src = "./imgs/carga.png"
                } else {
                    carro.querySelector("img").src = "./imgs/venda.png"
                }

                document.querySelector(".alocacao").appendChild(carro)
            })
        })
}

function carregarMa() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readManutencao', options)
        .then(response => response.json())
        .then(manutencao => {
            manutencao.forEach((m) => {
                var carro = document.querySelector(".manutencao").querySelector(".carro").cloneNode(true)
                carro.classList.remove("model2")

                carro.querySelector("#placa2").innerHTML = m.veiculo.placa
                carro.querySelector("#inicio").innerHTML = new Date(m.data_inicio).toLocaleDateString('pt-br', { timeZone: 'UTC' })

                if (m.data_fim !== null) {
                    carro.querySelector("#fim").innerHTML = new Date(m.data_fim).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                } else {
                    carro.querySelector("#fim").innerHTML = "Não Retornou"
                    carro.classList.add("ind")
                }

                document.querySelector(".manutencao").appendChild(carro)
            })
        })
}

function carregarMaGeral() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readManutencao', options)
        .then(response => response.json())
        .then(manutencao => {
            manutencao.forEach((m) => {
                var carro = document.querySelector(".manutencaoGeral").querySelector(".carro").cloneNode(true)
                carro.classList.remove("model2")
                carro.id = m.id

                if (m.veiculo.tipo === "visita") {
                    carro.querySelector("img").src = "./imgs/visita.png"
                    carro.setAttribute("data", "visita")
                } else if (m.tipo === "carga") {
                    carro.querySelector("img").src = "./imgs/carga.png"
                    carro.setAttribute("data", "carga")
                } else {
                    carro.querySelector("img").src = "./imgs/venda.png"
                    carro.setAttribute("data", "venda")
                }

                carro.querySelector("#placa2").innerHTML = m.veiculo.placa
                carro.querySelector("#inicio").innerHTML = new Date(m.data_inicio).toLocaleDateString('pt-br', { timeZone: 'UTC' })

                if (m.data_fim !== null) {
                    carro.querySelector("#fim").innerHTML = new Date(m.data_fim).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                    carro.setAttribute("dis", "di")
                } else {
                    carro.querySelector("#fim").innerHTML = "Não Retornou"
                    carro.classList.add("ind")
                    carro.setAttribute("dis", "ma")
                }

                carro.querySelector("#valor").innerHTML = parseFloat(m.valor)

                document.querySelector(".manutencaoGeral").appendChild(carro)
            })
        })
}