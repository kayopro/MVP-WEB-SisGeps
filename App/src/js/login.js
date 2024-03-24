// CADASTRAR USUARIO
function cadastrarUsuario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('emailCadastro').value;
    var senha = document.getElementById('criarSenha').value;
    var repetirSenha = document.getElementById('repetirSenha').value;

    // VERIFICAÇÃO DO NOME
    if (!nome.trim()) {
        alert('Por favor, insira seu nome.');
        return;
    }

    // VERIFICAÇÃO DE SENHAS
    if (senha !== repetirSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    // OBTEM OS DADOS DO LOCAL STORAGE E VERIFICA A EXISTENCIA DO EMAIL
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var emailExistente = usuarios.some(function(usuario) {
        return usuario.email === email;
    });

    if (emailExistente) {
        alert('Já existe um cadastro para o email informado!');
        return;
    }

    // CRIA USUARIO
    var usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // ADICIONA O USUÁRIO AO LOCAL STORAGE
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuário cadastrado com sucesso!');
}

// VALIDAR USUARIO E REDIRECIONAR
function validarLogin() {
    var email = document.getElementById('emailLogin').value;
    var senha = document.getElementById('senhaLogin').value;

    // OBTEM OS DADOS DO LOCAL STORAGE SE O EMAIL E A SENHA CORRESPONDEM A ALGUM USUARIO
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    // REDIRECIONA A PAGINA OU ALERTA
    if (usuarioEncontrado) {
        window.location.href = 'estoque.html';
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
}
