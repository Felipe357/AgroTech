var secretKey = "123456789";

function logar() {
    var email = document.querySelector("#email").value
    var pass = document.querySelector("#senha").value
    var encrypted = CryptoJS.AES.encrypt(pass, secretKey);
    var decrypted = CryptoJS.AES.decrypt(encrypted, secretKey);

    document.querySelector("#salve").innerHTML = decrypted

    var user = {
        "email" : email,
        "senha" : document.querySelector("#salve").innerHTML
    }

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      };
      
      fetch('http://localhost:3000/loginUsuario', options)
        .then(response => response.json())
        .then(response => {
            if (response.nome !== undefined) {
                localStorage.setItem('ifuser', JSON.stringify(response))
                if (response.tipo !== "funcionario") {
                    window.location.href = "../areaGerencial/index.html"
                } else {
                    window.location.href = "../areaComum/index.html"
                }
            }
        })
}