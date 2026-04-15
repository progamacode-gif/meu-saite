// cadastro
function cadastrar() {
    let gmail = document.getElementById("gmail").value;
    let senha = document.getElementById("senha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // 🔥 verifica se já existe
    let usuarioEncontrado = usuarios.find(u => u.gmail === gmail);

    if (usuarioEncontrado) {
        alert("Esse email já existe ❌");
        return;
    }

    // adiciona novo usuário
    usuarios.push({
        gmail: gmail,
        senha: senha
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro salvo! ✅");
}

// login
function login() {
    let g = document.getElementById("loginGmail").value;
    let s = document.getElementById("loginSenha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuarioEncontrado = usuarios.find(u => u.gmail === g && u.senha === s);

    if (usuarioEncontrado) {

        document.getElementById("telaLogin").style.display = "none";
        document.getElementById("telaBemVindo").style.display = "block";

        document.getElementById("mensagem").innerText =
            "Bem-vindo, " + usuarioEncontrado.gmail + "! 🎉";

    } else {
        alert("Gmail ou senha incorretos ❌");
    }
}

// sair
function sair() {
    document.getElementById("telaLogin").style.display = "block";
    document.getElementById("telaBemVindo").style.display = "none";
}