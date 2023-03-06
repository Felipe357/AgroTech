var add = "veiculoDisponivel"

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

function carregarVeiculos() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/readVeiculo', options)
        .then(response => response.json())
        .then(carros => {
            carros.forEach((c) => {
                var veiculo = document.querySelector(".veiculo").cloneNode(true)
                veiculo.classList.remove("model")
                veiculo.id = "V" + c.id

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

                alocacao.id = "O" + op.id

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

                manutencao.id = "M" + m.id

                manutencao.querySelector("#placa").innerHTML = m.veiculo.placa
                manutencao.querySelector("#data-inicio").innerHTML = new Date(m.data_inicio).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                manutencao.querySelector("#valor").innerHTML = "R$ " + m.valor + ",00"

                if (m.data_fim !== null) {
                    manutencao.querySelector("#data-fim").innerHTML = new Date(m.data_fim).toLocaleDateString('pt-br', { timeZone: 'UTC' })
                    manutencao.classList.add("disponivel")
                } else {
                    manutencao.querySelector("#data-fim").innerHTML = "Não Retornou"
                    manutencao.classList.add("indisponivel");
                    ([...manutencao.querySelectorAll('span')]).at(-1).style.color = "#A50000"
                }



                if (m.veiculo.tipo === "visita") {
                    manutencao.querySelector("img").src = "./imgs/visita.png"
                } else if (m.veiculo.tipo === "carga") {
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
                motorista.id = "M" + c.id

                motorista.querySelector("#cpf").innerHTML = c.cpf
                motorista.querySelector("#cnh").innerHTML = c.cnh
                motorista.querySelector("#nome").innerHTML = c.nome

                if (c.disponivel !== true) {
                    motorista.classList.add("indisponivel")
                } else {
                    motorista.classList.add("disponivel")
                    motorista.querySelector("#disponivel").style.color = "#2dc200"
                    motorista.querySelector("#disponivel").innerHTML = "Disponivel"
                }

                document.querySelector(".motoristas").appendChild(motorista)
            })
        })
}

function alterResult(e) {
    if (e.id === "motorista-btn") {
        document.querySelector(".disponibilidade").querySelector(".results2").classList.remove("model")
        document.querySelector(".disponibilidade").querySelector(".results").classList.add("model")
        add = "motoristaDisponivel"
    } else {
        document.querySelector(".disponibilidade").querySelector(".results2").classList.add("model")
        document.querySelector(".disponibilidade").querySelector(".results").classList.remove("model")
        add = "veiculoDisponivel"
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

// function checkDisponivel(e) {
//     var check = document.getElementById(e.id)
//     check.classList.toggle("s")
//     if (check.classList[0] == "s") {
//         document.querySelector("#dis-alter").innerHTML = "Disponível"
//     } else {
//         document.querySelector("#dis-alter").innerHTML = "Indisponível"
//     }
// }

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
                window.location.reload()
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
                            console.log(veiculo);
                            if (veiculo.id !== undefined) {
                                console.log("veiculo ok");

                                if (veiculo.disponivel === false) {
                                    cadastrar.querySelector(".tipo3").classList.remove("model")
                                    cadastrar.querySelector(".tipo3").innerHTML = "Veiculo já está operação!"
                                } else {
                                    var alocacao = {
                                        "motorista_id": parseInt(motorista[0].id),
                                        "veiculo_id": parseInt(veiculo.id),
                                        "descricao": descricao
                                    }

                                    console.log(alocacao);

                                    const options3 = {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(alocacao)
                                    };

                                    fetch('http://localhost:3000/cadOperacao', options3)
                                        .then(response => response.json())
                                        .then(response => {
                                            const options4 = {
                                                method: 'PUT',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: `{"disponivel":${false}}`
                                            };
                
                                            fetch('http://localhost:3000/updateVeiculo/' + veiculo.id, options4)
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
        body: JSON.stringify(veiculo)
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
                        "veiculo_id": parseInt(veiculo.id),
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

                            fetch('http://localhost:3000/updateVeiculo/' + veiculo.id, options)
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
            if (response !== undefined) {
                window.location.reload()
            }
        })
}