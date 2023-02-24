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
            if (response !== undefined) {
                window.location.href = "../areaComum/index.html"
            }
        })
}