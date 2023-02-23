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

function alterRe(e) {
    document.querySelector(".efect").classList.remove("efect")
    var re = document.getElementById(e.id)
    re.classList.add("efect")

    if (e.id == "r1") {
        document.querySelector(".content2").classList.add("model")
        document.querySelector(".content3").classList.add("model")
        document.querySelector(".content4").classList.add("model")
        document.querySelector(".content").classList.remove("model")
    } else if (e.id == "r4") {
        document.querySelector(".content2").classList.remove("model")
        document.querySelector(".content3").classList.add("model")
        document.querySelector(".content4").classList.add("model")
        document.querySelector(".content").classList.add("model")
    } else if (e.id == "r3") {
        document.querySelector(".content2").classList.add("model")
        document.querySelector(".content3").classList.remove("model")
        document.querySelector(".content4").classList.add("model")
        document.querySelector(".content").classList.add("model")
    } else if (e.id == "r2") {
        document.querySelector(".content2").classList.add("model")
        document.querySelector(".content3").classList.add("model")
        document.querySelector(".content4").classList.remove("model")
        document.querySelector(".content").classList.add("model")
    }

}

function closeModal(e) {
    var modal = document.getElementById(e.id).parentNode.parentNode
    modal.classList.add("model")
}