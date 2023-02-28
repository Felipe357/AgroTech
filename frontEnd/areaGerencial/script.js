function alterRe(e) {
    document.querySelector(".efect").classList.remove("efect")
    var re = document.getElementById(e.id)
    re.classList.add("efect")

    document.querySelectorAll(".page").forEach(a => a.classList.add('model'))

    if (e.id == "r1") {
        document.querySelector(".content").classList.remove("model")
    } else if (e.id == "r4") {
        document.querySelector(".content2").classList.remove("model")
    } else if (e.id == "r3") {
        document.querySelector(".content3").classList.remove("model")
    } else if (e.id == "r2") {
        document.querySelector(".content4").classList.remove("model")
    } else if (e.id == "r5") {
        document.querySelector(".content5").classList.remove("model")
    }

}

function carregarVeiculos() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readVeiculo', options)
        .then(response => response.json())
        .then(carros => {
            carros.forEach((c) => {
                var veiculo = document.querySelector(".veiculo").cloneNode(true)
                veiculo.classList.remove("model")
                veiculo.id = c.id

                veiculo.querySelector("#tipo").innerHTML = c.tipo
                veiculo.querySelector("#placa").innerHTML = c.placa
                veiculo.querySelector("#modelo").innerHTML = c.modelo
                veiculo.querySelector("#marca").innerHTML = c.marca

                if (c.disponivel !== true) {
                    veiculo.classList.add("indisponivel")
                } else {
                    veiculo.classList.add("disponivel")
                    veiculo.getElementById("disponivel").innerHTML = "Disponivel"
                }

                if (c.tipo === "visita") {
                    veiculo.querySelector("img").src = "./imgs/visita.png"
                } else if (c.tipo === "carga") {
                    veiculo.querySelector("img").src = "./imgs/carga.png"
                } else {
                    veiculo.querySelector("img").src = "./imgs/venda.png"
                }

                document.querySelector(".veiculos").appendChild(veiculo)
            })
        })
}

function carregarAlocacoes() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readOperacao', options)
        .then(response => response.json())
        .then(operacao => {
            operacao.forEach((op) => {
                var alocacao = document.querySelector(".alocacao").cloneNode(true)
                alocacao.classList.remove("model")

                alocacao.id = op.id

                alocacao.querySelector("#motorista").innerHTML = op.motorista.nome
                alocacao.querySelector("#veiculo").innerHTML = op.veiculo.placa

                alocacao.querySelector("#saida").innerHTML = new Date(op.data_saida).toLocaleDateString('pt-br', { timeZone: 'UTC' })

                if (op.data_retorno !== null) {
                    alocacao.querySelector("#retorno").innerHTML = new Date(op.data_retorno).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                    alocacao.classList.add("disponivel")
                } else {
                    alocacao.querySelector("#retorno").innerHTML = "Em uso"
                    alocacao.classList.add("indisponivel")
                }

                if (op.veiculo.tipo === "visita") {
                    alocacao.querySelector("img").src = "./imgs/visita.png"
                } else if (op.veiculo.tipo === "carga") {
                    alocacao.querySelector("img").src = "./imgs/carga.png"
                } else {
                    alocacao.querySelector("img").src = "./imgs/venda.png"
                }

                document.querySelector(".alocacoes").appendChild(alocacao)
            })
        })
}

function carregarManutencao() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readManutencao', options)
        .then(response => response.json())
        .then(manutencao => {
            manutencao.forEach((m) => {
                var manutencao = document.querySelector(".manutencao").cloneNode(true)
                manutencao.classList.remove("model")

                manutencao.querySelector("#placa").innerHTML = m.veiculo.placa
                manutencao.querySelector("#data-inicio").innerHTML = new Date(m.data_inicio).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                manutencao.querySelector("#valor").innerHTML = "R$ " + m.valor + ",00"

                if (m.data_fim !== null) {
                    manutencao.querySelector("#data-fim").innerHTML = new Date(m.data_fim).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                    manutencao.classList.add("disponivel")
                } else {
                    manutencao.querySelector("#data-fim").innerHTML = "Não Retornou"
                    manutencao.classList.add("indisponivel")
                }

                if (m.veiculo.tipo === "visita") {
                    manutencao.querySelector("img").src = "./imgs/visita.png"
                } else if (op.veiculo.tipo === "carga") {
                    manutencao.querySelector("img").src = "./imgs/carga.png"
                } else {
                    manutencao.querySelector("img").src = "./imgs/venda.png"
                }

                document.querySelector(".manutencoes").appendChild(manutencao)
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

function carregarMotoristas() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readMotorista', options)
        .then(response => response.json())
        .then(carros => {
            carros.forEach((c) => {
                var motorista = document.querySelector(".motorista").cloneNode(true)
                motorista.classList.remove("model")

                motorista.querySelector("#cpf").innerHTML = c.cpf
                motorista.querySelector("#cnh").innerHTML = c.cnh
                motorista.querySelector("#nome").innerHTML = c.nome

                if (c.disponivel !== true) {
                    motorista.classList.add("indisponivel")
                } else {
                    motorista.classList.add("disponivel")
                    motorista.getElementById("disponivel").style.color = "rgb(54, 226, 2)"
                    motorista.getElementById("disponivel").innerHTML = "Disponivel"
                }

                document.querySelector(".motoristas").appendChild(motorista)
            })
        })
}

function alterResult(e) {
    if (e.id === "motorista-btn") {
        document.querySelector(".disponibilidade").querySelector(".results").classList.remove("model")
        document.querySelector(".disponibilidade").querySelector(".results2").classList.add("model")
    } else {
        document.querySelector(".disponibilidade").querySelector(".results").classList.add("model")
        document.querySelector(".disponibilidade").querySelector(".results2").classList.remove("model")
    }
}

function showModal(e) {
    document.querySelector(".info").classList.toggle("bluer")
    document.querySelector("#" + e.id).parentNode.parentNode.classList.toggle("model")
}

var idVeiculo

function showVeiculo(e) {

    idVeiculo = e.id

    document.querySelector(".info").classList.toggle("bluer")
    document.querySelector(".modal-disponivel").classList.remove("model")

    const options = { method: 'GET' };

    fetch('http://localhost:3000/readAllVeiculo/'+e.id, options)
        .then(response => response.json())
        .then(vei => {
            var veiculo = document.querySelector(".info-veiculo")
            veiculo.querySelector("#placa").value = vei.placa
            veiculo.querySelector("#tipo").value = vei.tipo
            veiculo.querySelector("#modelo").value = vei.modelo
            veiculo.querySelector("#marca").value = vei.marca
        })

}

function atualizarVeiculo() {
    var placa = document.querySelector("#placa").value
    var tipo = document.querySelector("#placa").value
    var modelo = document.querySelector("#placa").value
    var marca = document.querySelector("#placa").value
    var dis = document.querySelector("#disponibilidade")
    console.log(dis);
}