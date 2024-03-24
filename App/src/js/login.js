function cadastrarUsuario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('emailCadastro').value;
    var senha = document.getElementById('criarSenha').value;
    var repetirSenha = document.getElementById('repetirSenha').value;

    // Verifica se foi passado o nome
    if (!nome.trim()) {
        alert('Por favor, insira seu nome.');
        return;
    }

    // Verifica se as senhas são iguais
    if (senha !== repetirSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    // Obtém os dados do localStorage e verifica se o email já foi cadastrado
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var emailExistente = usuarios.some(function(usuario) {
        return usuario.email === email;
    });

    if (emailExistente) {
        alert('Já existe um cadastro para o email informado!');
        return;
    }

    // Cria um usuário
    var usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Adiciona o usuário a lista e atuliza-a no localStorage
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuário cadastrado com sucesso!');
}

function validarLogin() {
    var email = document.getElementById('emailLogin').value;
    var senha = document.getElementById('senhaLogin').value;

    // Obtém os dados do localStorage e verifica se email e senha correspodem a algum usuário
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
        window.location.href = 'estoque.html';
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
}