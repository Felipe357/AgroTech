var add = "veiculoDisponivel"

function gerarGraficoVeiculo(visita, venda, carga) {
    const data = {
        labels: ["Visita", "Venda", "Carga"],
        datasets: [
            {
                label: "Veiculos disponível",
                data: [visita, venda, carga],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }
        ]
    };

    const myChart = new Chart(document.querySelector("#graficoVeiculo"), {
        type: "bar",
        data: data,
        options: {}
    });
    const myChart2 = new Chart(document.querySelector("#veiculoA"), {
        type: "bar",
        data: data,
        options: {}
    });
}

function gerarGraficoVeiculo2(visita, venda, carga) {
    const data = {
        labels: ["Visita", "Venda", "Carga"],
        datasets: [
            {
                label: "Veiculos em uso",
                data: [visita, venda, carga],
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                borderColor: "rgba(255, 0, 0, 1)",
                borderWidth: 1
            }
        ]
    };

    // Opções do gráfico
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Criação do gráfico de barras
    const myChart = new Chart(document.querySelector("#graficoVeiculo2"), {
        type: "bar",
        data: data,
        options: options
    });
}

function gerarGraficoMotorista(disponivel, uso) {
    const data = {
        labels: ["Disponível", "Em Uso"],
        datasets: [
            {
                label: "Motoristas disponível",
                data: [disponivel, uso],
                backgroundColor: ["rgba(000, 255, 000, 0.2)", "rgba(255, 000, 000, 0.2)"],
                borderColor: ["rgba(000, 255, 000, 1)", "rgba(255, 000, 000, 1)"],
                borderWidth: 1
            }
        ]
    };

    // Opções do gráfico
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Criação do gráfico de barras
    const myChart = new Chart(document.querySelector("#graficoMotorista"), {
        type: "bar",
        data: data,
        options: options
    });
    const myChart2 = new Chart(document.querySelector("#motoristaA"), {
        type: "bar",
        data: data,
        options: options
    });
}

function gerarGraficoManutencao(uso, dis) {
    const data = {
        labels: ["Em manutenção", "Concluidas"],
        datasets: [
            {
                label: "Manutenção",
                data: [uso, dis],
                backgroundColor: "rgba(235, 250, 32, 0.2)",
                borderColor: "rgba(235, 250, 32, 1)",
                borderWidth: 1
            }
        ]
    };

    // Opções do gráfico
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Criação do gráfico de barras
    const myChart = new Chart(document.querySelector("#graficoManutencao"), {
        type: "bar",
        data: data,
        options: options
    });
}

function gerarGraficoOperacao(uso, dis) {
    const data = {
        labels: ["Em uso", "Finalizadas"],
        datasets: [
            {
                label: "Operação",
                data: [uso, dis],
                backgroundColor: "rgba(48, 242, 152, 0.2)",
                borderColor: "rgba(48, 242, 152, 1)",
                borderWidth: 1
            }
        ]
    };

    // Opções do gráfico
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Criação do gráfico de barras
    const myChart = new Chart(document.querySelector("#graficoOperacao"), {
        type: "bar",
        data: data,
        options: options
    });
}

function formatarCPF(e) {
    let cpf = e.querySelector("#cpf").value;
    cpf = cpf.replace(/\D/g, ''); // remove todos os caracteres não numéricos
    cpf = cpf.replace(/^(\d{3})(\d)/g, '$1.$2'); // coloca um ponto após os primeiros 3 dígitos
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3'); // coloca um ponto após os próximos 3 dígitos
    cpf = cpf.replace(/\.(\d{3})(\d)/g, '.$1-$2'); // coloca um traço após os últimos 2 dígitos
    e.querySelector("#cpf").value = cpf;
}

function formatarPlaca(e) {
    let placa = e.querySelector("#placa").value;
    placa = placa.replace(/\W/g, ''); // remove todos os caracteres não alfanuméricos
    placa = placa.replace(/(\w{3})(\w)/, '$1-$2'); // adiciona traço após os primeiros 3 caracteres
    e.querySelector("#placa").value = placa.toUpperCase(); // transforma tudo em maiúsculo e atualiza o valor do input
};

function formatarCNH(e) {
    // Obter o valor atual do input
    let value = e.querySelector("#cnh").value;

    // Remover todos os caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Aplicar a máscara
    if (value.length > 0) {
        value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9, 11);
    }

    // Definir o valor do input para a string formatada
    e.querySelector("#cnh").value = value;
}


function alterRe(e) {
    document.querySelector(".efect").classList.remove("efect")
    var re = document.getElementById(e.id)
    re.classList.add("efect")

    document.querySelectorAll(".page").forEach(a => a.classList.add('model'))

    if (e.id == "r1") {
        document.querySelector(".content").classList.remove("model")
        add = "veiculoDisponivel"
    } else if (e.id == "r4") {
        document.querySelector(".content2").classList.remove("model")
        add = "manutencao"
    } else if (e.id == "r3") {
        document.querySelector(".content3").classList.remove("model")
        add = "geral"
    } else if (e.id == "r2") {
        document.querySelector(".content4").classList.remove("model")
        add = "alocacao"
    } else if (e.id == "r5") {
        document.querySelector(".content5").classList.remove("model")
        add = "indisponivel"
    }

}

function alterarDashboard(e) {
    console.log(e);
    document.querySelectorAll(".dash").forEach(a => a.classList.add('model'))
    document.querySelector(".graficos").querySelector("." + e.classList[1]).classList.remove("model")
}

var arrayMotoristaAlocacao = []
var arrayMotoristaNomeAlocacao = []
var arrayVeiculoAlocacao = []
var arrayVeiculoNomeAlocacao = []
var arrayContMotorista = []
var arrayContVeiculo = []
var arrayMesV = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var arrayMesVe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var arrayMesC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var arrayManutencao = []
var arrayNomeManutencao = []
var qntdManuMes = 0
var emManu = [0, 0, 0]
var custoVisita = 0
var custoVenda = 0
var custoCarga = 0
var arrayMesVOp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var arrayMesVeOp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var arrayMesCOp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var qndtOpMes = 0
var arrayOp = []
var arrayNomeOp = []

function carregarVeiculos() {

    var visita = 0
    var venda = 0
    var carga = 0

    var visitaF = 0
    var vendaF = 0
    var cargaF = 0

    const options = { method: 'GET' };

    fetch('http://localhost:3000/readVeiculo', options)
        .then(response => response.json())
        .then(carros => {
            carros.forEach((c) => {
                var veiculo = document.querySelector(".veiculo").cloneNode(true)
                veiculo.classList.remove("model")
                veiculo.id = "V" + c.id

                arrayVeiculoAlocacao.push(c.operacoa.length)
                arrayVeiculoNomeAlocacao.push(c.placa)

                arrayManutencao.push(c.manutencao.length)
                arrayNomeManutencao.push(c.placa)

                arrayOp.push(c.operacoa.length)
                arrayNomeOp.push(c.placa)

                veiculo.querySelector("#tipo").innerHTML = c.tipo
                veiculo.querySelector("#placa").innerHTML = c.placa
                veiculo.querySelector("#modelo").innerHTML = c.modelo
                veiculo.querySelector("#marca").innerHTML = c.marca

                if (c.disponivel !== true) {
                    veiculo.classList.add("indisponivel")
                } else {
                    veiculo.classList.add("disponivel")
                    veiculo.querySelector("#disponivel").innerHTML = "Disponivel"
                    veiculo.querySelector("#disponivel").style.color = "#00f"
                }

                if (c.tipo === "visita") {
                    veiculo.querySelector("img").src = "./imgs/visita.png"
                } else if (c.tipo === "carga") {
                    veiculo.querySelector("img").src = "./imgs/carga.png"
                } else {
                    veiculo.querySelector("img").src = "./imgs/venda.png"
                }



                if (c.disponivel !== false) {
                    if (c.tipo === "visita") {
                        visita++
                    } else if (c.tipo === "carga") {
                        carga++
                    } else {
                        venda++
                    }
                } else {
                    if (c.tipo === "visita") {
                        visitaF++
                    } else if (c.tipo === "carga") {
                        cargaF++
                    } else {
                        vendaF++
                    }
                }

                document.querySelector(".veiculos").appendChild(veiculo)
            })
            gerarGraficoVeiculo(visita, venda, carga)
            gerarGraficoVeiculo2(visitaF, vendaF, cargaF)
        })
}

function carregarAlocacoes() {
    var al = 0
    var al2 = 0
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readOperacao', options)
        .then(response => response.json())
        .then(operacao => {
            var emAl = [0, 0, 0]
            operacao.forEach((op) => {
                var alocacao = document.querySelector(".alocacao").cloneNode(true)
                alocacao.classList.remove("model")

                alocacao.id = "O" + op.id

                arrayContMotorista.push(op.motorista.nome)
                arrayContVeiculo.push(op.veiculo.placa)

                alocacao.querySelector("#motorista").innerHTML = op.motorista.nome
                alocacao.querySelector("#veiculo").innerHTML = op.veiculo.placa

                alocacao.querySelector("#saida").innerHTML = new Date(op.data_saida).toLocaleDateString('pt-br', { timeZone: 'UTC' })

                if (op.data_retorno !== null) {
                    alocacao.querySelector("#retorno").innerHTML = new Date(op.data_retorno).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                    alocacao.classList.add("disponivel")
                    al2++
                } else {
                    alocacao.querySelector("#retorno").innerHTML = "Em uso"
                    alocacao.classList.add("indisponivel")
                    al++
                    if (op.veiculo.tipo === "visita") {
                        emAl[0]++
                    } else if (op.veiculo.tipo === "venda") {
                        emAl[1]++
                    } else {
                        emAl[2]++
                    }

                }

                var dt = new Date(op.data_saida).getMonth()

                const nomeMes = new Date().toLocaleString('pt-BR', { month: 'long' });
                const nomeMesVe = new Date(op.data_saida).toLocaleDateString('pt-br', { month: 'long' })

                if (nomeMes == nomeMesVe) {
                    qndtOpMes++
                }

                if (op.veiculo.tipo === "visita") {
                    alocacao.querySelector("img").src = "./imgs/visita.png"
                    arrayMesVOp[dt]++
                } else if (op.veiculo.tipo === "carga") {
                    alocacao.querySelector("img").src = "./imgs/carga.png"
                    arrayMesCOp[dt]++
                } else {
                    alocacao.querySelector("img").src = "./imgs/venda.png"
                    arrayMesVeOp[dt]++
                }

                document.querySelector(".alocacoes").appendChild(alocacao)
            })
            gerarGraficoOperacao(al, al2)
            dashboardAlocacao2(emAl)
        })
}

function carregarManutencao() {
    var ma = 0
    var ma2 = 0
    const options = { method: 'GET' }

    fetch('http://localhost:3000/readManutencao', options)
        .then(response => response.json())
        .then(manutencao => {
            manutencao.forEach((m) => {
                var manutencao = document.querySelector(".manutencao").cloneNode(true)
                manutencao.classList.remove("model")

                manutencao.id = "M" + m.id

                manutencao.querySelector("#placa").innerHTML = m.veiculo.placa
                manutencao.querySelector("#data-inicio").innerHTML = new Date(m.data_inicio).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                manutencao.querySelector("#valor").innerHTML = "R$ " + m.valor + ",00"

                if (m.data_fim !== null) {
                    manutencao.querySelector("#data-fim").innerHTML = new Date(m.data_fim).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                    manutencao.classList.add("disponivel")
                    ma2++
                } else {
                    manutencao.querySelector("#data-fim").innerHTML = "Não Retornou"
                    manutencao.classList.add("indisponivel");
                    ma++
                    ([...manutencao.querySelectorAll('span')]).at(-1).style.color = "#A50000"

                    if (m.veiculo.tipo === "visita") {
                        emManu[0]++
                    } else if (m.veiculo === "venda") {
                        emManu[1]++
                    } else {
                        emManu[2]++
                    }

                }

                var dt = new Date(m.data_inicio).getMonth()

                const nomeMes = new Date().toLocaleString('pt-BR', { month: 'long' });
                const nomeMesVe = new Date(m.data_inicio).toLocaleDateString('pt-br', { month: 'long' })

                if (nomeMes == nomeMesVe) {
                    qntdManuMes++
                }

                if (m.veiculo.tipo === "visita") {
                    manutencao.querySelector("img").src = "./imgs/visita.png"
                    arrayMesV[dt]++
                    custoVisita = parseFloat(custoVisita) + parseFloat(m.valor)
                } else if (m.veiculo.tipo === "carga") {
                    manutencao.querySelector("img").src = "./imgs/carga.png"
                    arrayMesC[dt]++
                    custoCarga = parseFloat(custoCarga) + parseFloat(m.valor)
                } else {
                    manutencao.querySelector("img").src = "./imgs/venda.png"
                    arrayMesVe[dt]++
                    custoVenda = parseFloat(custoVenda) + parseFloat(m.valor)
                }
                document.querySelector(".manutencoes").appendChild(manutencao)
            })
            gerarGraficoManutencao(ma, ma2)
            dashboardManutencao2(emManu)
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

    var uso = 0
    var dis = 0
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readMotorista', options)
        .then(response => response.json())
        .then(motorista => {
            motorista.forEach((m) => {
                var motorista = document.querySelector(".motorista").cloneNode(true)
                motorista.classList.remove("model")
                motorista.id = "M" + m.id

                arrayMotoristaAlocacao.push(m.operacao.length)
                arrayMotoristaNomeAlocacao.push(m.nome)

                motorista.querySelector("#cpf").innerHTML = m.cpf
                motorista.querySelector("#cnh").innerHTML = m.cnh
                motorista.querySelector("#nome").innerHTML = m.nome

                if (m.disponivel !== true) {
                    motorista.classList.add("indisponivel")
                    uso++
                } else {
                    dis++
                    motorista.classList.add("disponivel")
                    motorista.querySelector("#disponivel").style.color = "#2dc200"
                    motorista.querySelector("#disponivel").innerHTML = "Disponivel"
                }

                document.querySelector(".motoristas").appendChild(motorista)
            })
            gerarGraficoMotorista(dis, uso)
        })
}

function alterResult(e) {
    if (e.id === "motorista-btn") {
        document.querySelector(".disponibilidade").querySelector(".results2").classList.remove("model")
        document.querySelector(".disponibilidade").querySelector(".results").classList.add("model")
        document.querySelector("#graficoDis").classList.add("model")
        document.querySelector("#graficoDis2").classList.remove("model")
        add = "motoristaDisponivel"
    } else {
        document.querySelector(".disponibilidade").querySelector(".results2").classList.add("model")
        document.querySelector(".disponibilidade").querySelector(".results").classList.remove("model")
        add = "veiculoDisponivel"
        document.querySelector("#graficoDis2").classList.add("model")
        document.querySelector("#graficoDis").classList.remove("model")
    }
    console.log(document.querySelector(".add").id)
    console.log(document.querySelector(".add"))
}

function showModal(e) {
    document.querySelector(".info").classList.toggle("bluer")
    document.querySelector(".add").classList.toggle("bluer")
    document.querySelector("#" + e.id).parentNode.parentNode.classList.toggle("model")
}

var idVeiculo

function showVeiculo(e) {

    idVeiculo = e.id.slice(1)

    console.log(idVeiculo)
    document.querySelector(".info").classList.toggle("bluer")
    document.querySelector(".add").classList.toggle("bluer")
    document.querySelector(".modal-disponivel").classList.remove("model")

    const options = { method: 'GET' };

    fetch('http://localhost:3000/readAllVeiculo/' + idVeiculo, options)
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
    var placa = document.querySelector(".info-veiculo").querySelector("#placa").value
    var tipo = document.querySelector(".info-veiculo").querySelector("#tipo").value
    var modelo = document.querySelector(".info-veiculo").querySelector("#modelo").value
    var marca = document.querySelector(".info-veiculo").querySelector("#marca").value

    var veiculo = {
        "placa": placa,
        "tipo": tipo,
        "modelo": modelo,
        "marca": marca
    }

    if (tipo == "venda" || tipo == "carga" || tipo == "visita") {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(veiculo)
        };

        fetch('http://localhost:3000/updateVeiculo/' + idVeiculo, options)
            .then(response => response.json())
            .then(response => {
                if (response !== undefined) {
                    window.location.reload()
                }
            })

    } else {
        document.querySelector("#AlertTipo").classList.toggle("model")
    }

}

function cadastrar() {
    document.querySelector(".info").classList.toggle("bluer")
    document.querySelector(".add").classList.toggle("bluer")
    console.log(add)
    if (add == "veiculoDisponivel") {
        document.querySelector(".modal-cadastrar-veiculo").classList.toggle("model")
    } else if (add == "motoristaDisponivel") {
        document.querySelector(".modal-cadastrar-motorista").classList.toggle("model")
    } else if (add == "alocacao") {
        document.querySelector(".modal-cadastrar-alocacao").classList.toggle("model")
    } else if (add == "manutencao") {
        document.querySelector(".modal-cadastrar-manutencao").classList.toggle("model")
    } else {
        console.log(add)
    }
}

function cadastrarVeiculo() {
    var placa = document.querySelector(".info-cadastrar-veiculo").querySelector("#placa").value
    var tipo = document.querySelector(".info-cadastrar-veiculo").querySelector("#tipo").value
    var modelo = document.querySelector(".info-cadastrar-veiculo").querySelector("#modelo").value
    var marca = document.querySelector(".info-cadastrar-veiculo").querySelector("#marca").value

    var veiculo = {
        "placa": placa,
        "tipo": tipo,
        "modelo": modelo,
        "marca": marca
    }

    if (placa == "" || modelo == "" || marca == "") {
        document.querySelector(".info-cadastrar-veiculo").querySelector("#AlertTipo").classList.toggle("model")
        document.querySelector(".info-cadastrar-veiculo").querySelector("#AlertTipo").innerHTML = "Favor inserir todos os dados!"
    } else {
        if (tipo == "venda" || tipo == "carga" || tipo == "visita") {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(veiculo)
            };

            fetch('http://localhost:3000/cadVeiculo', options)
                .then(response => response.json())
                .then(response => {
                    if (response !== undefined) {
                        window.location.reload()
                    }
                })
        } else {
            document.querySelector(".info-cadastrar-veiculo").querySelector("#AlertTipo").classList.toggle("model")
        }
    }
}

function cadastrarMotorista() {

    var cpf = document.querySelector(".info-cadastrar-motorista").querySelector("#cpf").value
    var cnh = document.querySelector(".info-cadastrar-motorista").querySelector("#cnh").value
    var nome = document.querySelector(".info-cadastrar-motorista").querySelector("#nome").value

    var motorista = {
        "cpf": cpf,
        "cnh": cnh,
        "nome": nome
    }

    if (cpf == "" || cnh == "" || nome == "") {

    } else {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(motorista)
        };

        fetch('http://localhost:3000/cadMotorista', options)
            .then(response => response.json())
            .then(response => {
                if (response !== undefined) {
                    window.location.reload()
                }
            })
    }


}

var idMotorista

function showMotorista(e) {

    idMotorista = e.id.slice(1)

    console.log(idMotorista)
    document.querySelector(".info").classList.toggle("bluer")
    document.querySelector(".modal-atualizar-motorista").classList.remove("model")

    const options = { method: 'GET' };

    fetch('http://localhost:3000/readAllMotorista/' + idMotorista, options)
        .then(response => response.json())
        .then(mot => {
            var veiculo = document.querySelector(".info-motorista")
            veiculo.querySelector("#cpf").value = mot.cpf
            veiculo.querySelector("#cnh").value = mot.cnh
            veiculo.querySelector("#nome").value = mot.nome
        })

    console.log(idMotorista)

}

function atualizarMotorista() {
    var cpf = document.querySelector(".info-motorista").querySelector("#cpf").value
    var cnh = document.querySelector(".info-motorista").querySelector("#cnh").value
    var nome = document.querySelector(".info-motorista").querySelector("#nome").value

    var motorista = {
        "cpf": cpf,
        "cnh": cnh,
        "nome": nome
    }

    if (cpf == "" || cnh == "" || nome == "") {

    } else {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(motorista)
        };

        fetch('http://localhost:3000/updateMotorista/' + idMotorista, options)
            .then(response => response.json())
            .then(response => {
                if (response !== undefined) {
                    window.location.reload()
                }
            })
    }
}

var idOperacao

function showOperacao(e) {
    idOperacao = e.id.slice(1)

    document.querySelector(".info").classList.toggle("bluer")
    document.querySelector(".add").classList.toggle("bluer")
    document.querySelector(".modal-atualizar-alocacao").classList.remove("model")

    const options = { method: 'GET' };

    fetch('http://localhost:3000/readAllOperacao/' + idOperacao, options)
        .then(response => response.json())
        .then(al => {
            var alocacao = document.querySelector(".info-alocacao")
            alocacao.querySelector("#nome").value = al.motorista.nome
            alocacao.querySelector("#placa").value = al.veiculo.placa
            alocacao.querySelector("#descricao").value = al.descricao

            if (al.data_retorno === null) {
                alocacao.parentNode.querySelector(".opa").classList.remove("model")
            } else {
                alocacao.parentNode.querySelector(".opa").classList.add("model")
            }
        })
}

function atualizarAlocacao() {
    var descricao = document.querySelector(".info-alocacao").querySelector("#descricao").value

    var des = {
        "descricao": descricao
    }

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(des)
    };

    fetch('http://localhost:3000/updateOperacao/' + idOperacao, options)
        .then(response => response.json())
        .then(response => {
            if (response !== undefined) {
                window.location.reload()
            }
        })
}

function atualizarDataAlocacao() {

    var date = new Date(Date.now())

    console.log(date);
    var data = {
        "data_retorno": date
    }

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch('http://localhost:3000/updateOperacao/' + idOperacao, options)
        .then(response => response.json())
        .then(response => {
            if (response !== undefined) {
                const options2 = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: '{"disponivel":true}'
                };

                fetch('http://localhost:3000/updateVeiculo/' + response.veiculo_id, options2)
                    .then(response => response.json())
                    .then(response2 => {
                        if (response2.id !== undefined) {
                            const options3 = {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: '{"disponivel":true}'
                            };

                            fetch('http://localhost:3000/updateMotorista/' + response.motorista_id, options3)
                                .then(response => response.json())
                                .then(response => {
                                    if (response.id !== undefined) {
                                        window.location.reload()
                                    }
                                })
                        }
                    })
            }
        })
}

function cadastrarAlocacao() {
    var cadastrar = document.querySelector(".info-cadastrar-alocacao")

    var motorista = {
        "nome": cadastrar.querySelector("#nome").value
    }
    console.log(motorista);
    var veiculo = {
        "placa": cadastrar.querySelector("#placa").value
    }
    console.log(veiculo);
    var descricao = cadastrar.querySelector("#descricao").value

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(motorista)
    };

    fetch('http://localhost:3000/readAllMotorista', options)
        .then(response => response.json())
        .then(motorista => {
            if (motorista[0].id !== undefined) {
                console.log("teste1");
                if (motorista.disponivel === false) {
                    cadastrar.querySelector(".tipo2").classList.remove("model")
                    cadastrar.querySelector(".tipo2").innerHTML = "Motorista já está operação!"
                } else {

                    const options2 = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(veiculo)
                    };

                    fetch('http://localhost:3000/readAllVeiculo', options2)
                        .then(response => response.json())
                        .then(veiculo => {
                            console.log(veiculo[0].id);
                            if (veiculo[0].id !== undefined) {
                                console.log("veiculo ok");

                                if (veiculo[0].disponivel === false) {
                                    cadastrar.querySelector(".tipo3").classList.remove("model")
                                    cadastrar.querySelector(".tipo3").innerHTML = "Veiculo já está operação!"
                                } else {
                                    var alocacao = {
                                        "motorista_id": parseInt(motorista[0].id),
                                        "veiculo_id": parseInt(veiculo[0].id),
                                        "descricao": descricao
                                    }

                                    const options3 = {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(alocacao)
                                    };

                                    fetch('http://localhost:3000/cadOperacao', options3)
                                        .then(response => response.json())
                                        .then(response => {
                                            console.log(response);
                                            if (response !== undefined) {
                                                const options3 = {
                                                    method: 'PUT',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: '{"disponivel":false}'
                                                };

                                                fetch('http://localhost:3000/updateMotorista/' + motorista[0].id, options3)
                                                    .then(response => response.json())
                                                    .then(response => { console.log(response); })
                                                const options4 = {
                                                    method: 'PUT',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: `{"disponivel":${false}}`
                                                };

                                                fetch('http://localhost:3000/updateVeiculo/' + veiculo[0].id, options4)
                                                    .then(response => response.json())
                                                    .then(response => {
                                                        window.location.reload()
                                                    })
                                            } else {
                                                console.log("OPa lele");
                                            }
                                        })
                                }
                            } else {
                                cadastrar.querySelector("#AlertTipo").classList.toggle("model")
                            }
                        })
                }
            } else {
                cadastrar.querySelector("#AlertTipo").classList.toggle("model")
            }
        })
}

var idManutencao

function showManutencao(e) {

    idManutencao = e.id.slice(1)

    document.querySelector(".info").classList.toggle("bluer")
    document.querySelector(".add").classList.toggle("bluer")
    document.querySelector(".modal-atualizar-manutencao").classList.remove("model")

    const options = { method: 'GET' };

    fetch('http://localhost:3000/readAllManutencao/' + idManutencao, options)
        .then(response => response.json())
        .then(ma => {
            var manutencao = document.querySelector(".info-manutencao")
            manutencao.querySelector("#placa").value = ma.veiculo.placa
            manutencao.querySelector("#valor").value = ma.valor
            manutencao.querySelector("#descricao").value = ma.descricao

            if (ma.data_fim === null) {
                manutencao.parentNode.querySelector(".opa").classList.remove("model")
            } else {
                manutencao.parentNode.querySelector(".opa").classList.add("model")
            }
        })

}

function atualizarManutencao() {
    var descricao = document.querySelector(".info-manutencao").querySelector("#descricao").value

    var des = {
        "descricao": descricao
    }

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(des)
    };

    fetch('http://localhost:3000/updateManutencao/' + idManutencao, options)
        .then(response => response.json())
        .then(response => {
            if (response !== undefined) {
                window.location.reload()
            }
        })
}

function cadastrarManutencao() {
    var cadastrar = document.querySelector(".info-cadastrar-manutencao")
    var veiculo = {
        "placa": cadastrar.querySelector("#placa").value
    }
    var descricao = cadastrar.querySelector("#descricao").value
    var valor = cadastrar.querySelector("#valor").value

    const options2 = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: [JSON.stringify(veiculo)]
    };

    fetch('http://localhost:3000/readAllVeiculo', options2)
        .then(response => response.json())
        .then(veiculo => {
            console.log(veiculo)
            if (veiculo !== null) {
                console.log("veiculo ok")

                if (veiculo.disponivel === false) {
                    cadastrar.querySelector(".tipo2").classList.remove("model")
                    cadastrar.querySelector(".tipo2").innerHTML = "Veiculo já está em uso!"
                } else {
                    var alocacao = {
                        "valor": parseFloat(valor),
                        "veiculo_id": parseInt(veiculo[0].id),
                        "descricao": descricao
                    }

                    const options3 = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(alocacao)
                    };

                    fetch('http://localhost:3000/cadManutencao', options3)
                        .then(response => response.json())
                        .then(response => {
                            const options = {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: `{"disponivel":${false}}`
                            };

                            fetch('http://localhost:3000/updateVeiculo/' + veiculo[0].id, options)
                                .then(response => response.json())
                                .then(response => {
                                    window.location.reload()
                                })
                        })
                }
            } else {
                cadastrar.querySelector("#AlertTipo").classList.toggle("model")
            }
        })


}

function atualizarDataManutencao() {

    var date = new Date(Date.now())

    var data = {
        "data_fim": date
    }

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch('http://localhost:3000/updateManutencao/' + idManutencao, options)
        .then(response => response.json())
        .then(response => {
            if (response.id !== undefined) {
                console.log(response);
                const options2 = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: '{"disponivel":true}'
                };

                fetch('http://localhost:3000/updateVeiculo/' + response.veiculo_id, options2)
                    .then(response => response.json())
                    .then(response2 => {
                        if (response2.id !== undefined) {
                            window.location.reload()
                        }
                    })
            }
        })
}

setTimeout(() => {
    dashboardMotorista()
    dashboardVeiculo()
    mostCommonName()
    dashboardManutencao()
    encontrarMaiorValor()
    dashboardManutencao3()
    dashboardManutencao4()
    dashboardAlocacao()
    dashboardAlocacao3()
}, 1500)

function dashboardMotorista() {
    var ctx = document.getElementById('motoristaU').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',

        data: {
            labels: arrayMotoristaNomeAlocacao,
            datasets: [{

                data: arrayMotoristaAlocacao,
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function dashboardVeiculo() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',

        data: {
            labels: arrayVeiculoNomeAlocacao,
            datasets: [{

                data: arrayVeiculoAlocacao,
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function dashboardMotorista() {
    var ctx = document.getElementById('motoristaU').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',

        data: {
            labels: arrayMotoristaNomeAlocacao,
            datasets: [{

                data: arrayMotoristaAlocacao,
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function mostCommonName() {
    var names = arrayContMotorista
    let counts = {};
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name in counts) {
            counts[name] += 1;
        } else {
            counts[name] = 1;
        }
    }
    let mostCommonName = null;
    let highestCount = 0;
    for (let name in counts) {
        let count = counts[name];
        if (count > highestCount) {
            mostCommonName = name;
            highestCount = count;
        }
    }
    document.querySelector("#contMt").innerHTML = mostCommonName

    var names2 = arrayContVeiculo
    let counts2 = {};
    for (let i = 0; i < names2.length; i++) {
        let name2 = names2[i];
        if (name2 in counts2) {
            counts2[name2] += 1;
        } else {
            counts2[name2] = 1;
        }
    }
    let mostCommonName2 = null;
    let highestCount2 = 0;
    for (let name2 in counts2) {
        let count2 = counts2[name2];
        if (count2 > highestCount2) {
            mostCommonName2 = name2;
            highestCount2 = count2;
        }
    }
    document.querySelector("#contVe").innerHTML = mostCommonName2
}

function dashboardManutencao() {
    let data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Vendas',
                data: arrayMesVe,
                backgroundColor: "rgb(99, 132, 255, 0.0)",
                borderColor: 'rgb(255, 99, 132)',
                fill: false
            },
            {
                label: 'Visitas',
                data: arrayMesV,
                backgroundColor: "rgb(99, 132, 255, 0.0)",
                borderColor: 'rgb(255, 255, 0)',
                fill: false
            },
            {
                label: 'Carga',
                data: arrayMesC,
                backgroundColor: "rgb(99, 132, 255, 0.0)",
                borderColor: 'rgb(99, 132, 255)',
                fill: false
            }
        ]
    };

    // Opções do gráfico
    let options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        aspecRatio: 1 / 10
    };

    // Criação do gráfico
    let ctx = document.getElementById('ma5').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

function dashboardManutencao2(uso) {
    console.log([uso[0], uso[1], uso[2]])
    const myChart = new Chart(document.getElementById("ma1"), {
        type: "bar",
        data: {
            labels: ["Visita", "Venda", "Carga"],
            datasets: [
                {
                    label: "Visita",
                    data: [uso[0], 0, 0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                    ],
                    borderWidth: 1,
                    barPercentage: 10,
                },
                {
                    label: "Venda",
                    data: [0, uso[1], 0],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                    ],
                    borderWidth: 1,
                    barPercentage: 10,
                },
                {
                    label: "Carga",
                    data: [0, 0, uso[2]],
                    backgroundColor: [
                        'rgba(255, 205, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 205, 86)'
                    ],
                    borderWidth: 1,
                    barPercentage: 10,
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function encontrarMaiorValor() {
    let maiorValor = Math.max(...arrayManutencao);
    let menorValor = Math.min(...arrayManutencao)

    let posicao = arrayManutencao.indexOf(maiorValor);
    let posicao2 = arrayManutencao.indexOf(menorValor);

    document.querySelector("#contManu").innerHTML = arrayNomeManutencao[posicao]
    document.querySelector("#contManu2").innerHTML = arrayNomeManutencao[posicao2]

    let maiorValor2 = Math.max(...arrayOp);
    let menorValor2 = Math.min(...arrayOp)

    let posicao3 = arrayOp.indexOf(maiorValor2);
    let posicao4 = arrayOp.indexOf(menorValor2);

    document.querySelector("#contAl").innerHTML = arrayNomeOp[posicao3]
    document.querySelector("#contAl2").innerHTML = arrayNomeOp[posicao4]
}

function dashboardManutencao3() {
    const data = new Date();
    const nomeMes = data.toLocaleString('pt-BR', { month: 'long' });

    document.querySelector("#nomeMes").innerHTML = nomeMes
    document.querySelector("#qntdMesAtual").innerHTML = qntdManuMes

    var ctx = document.querySelector('#dash3').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [nomeMes],
            datasets: [{
                data: [qntdManuMes],
                backgroundColor: "rgba(000,000,255, 0.2)",
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function dashboardManutencao4() {
    var ctx = document.getElementById('custoManutencao').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',

        data: {
            labels: ["Visita", "Carga", "Venda"],
            datasets: [{

                data: [custoVisita, custoCarga, custoVenda],
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
        }
    });
}

function dashboardAlocacao() {
    let data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Vendas',
                data: arrayMesVeOp,
                backgroundColor: "rgb(99, 132, 255, 0.0)",
                borderColor: 'rgb(255, 99, 132)',
                fill: false
            },
            {
                label: 'Visitas',
                data: arrayMesVOp,
                backgroundColor: "rgb(99, 132, 255, 0.0)",
                borderColor: 'rgb(255, 255, 0)',
                fill: false
            },
            {
                label: 'Carga',
                data: arrayMesCOp,
                backgroundColor: "rgb(99, 132, 255, 0.0)",
                borderColor: 'rgb(99, 132, 255)',
                fill: false
            }
        ]
    };

    // Opções do gráfico
    let options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        aspecRatio: 1 / 10
    };

    // Criação do gráfico
    let ctx = document.getElementById('al5').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

function dashboardAlocacao3() {
    const data = new Date();
    const nomeMes = data.toLocaleString('pt-BR', { month: 'long' });

    document.querySelector("#nomeMes2").innerHTML = nomeMes
    document.querySelector("#qntdMesAtual2").innerHTML = qndtOpMes

    var ctx = document.querySelector('#dashOp').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [nomeMes],
            datasets: [{
                data: [qndtOpMes],
                backgroundColor: "rgba(000,000,255, 0.2)",
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function dashboardAlocacao2(uso) {
    
    document.getElementById("qntdVeiOp").innerHTML = uso[0] + uso[1] + uso[2]

    var ctx = document.querySelector('#al1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Visita", "Venda", "Carga"],
            datasets: [{
                data: uso,
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}