// Importe as bibliotecas necessárias
const mongoose = require('mongoose');

// Conecte-se ao banco de dados MongoDB
mongoose.connect('mongodb://localhost/cadastro', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Defina o esquema do usuário
const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    celular: String,
    endereco: String,
    complemento: String,
    numero: String,
    bairro: String,
    cidade: String,
    uf: String,
    cep: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Lidar com o envio do formulário
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const endereco = document.getElementById('endereco').value;
    const complemento = document.getElementById('complemento').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const cep = document.getElementById('cep').value;

    // Crie um novo documento de usuário
    const novoUsuario = new Usuario({
        nome,
        email,
        celular,
        endereco,
        complemento,
        numero,
        bairro,
        cidade,
        uf,
        cep
    });

    // Salve o usuário no banco de dados
    novoUsuario.save((err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Usuário cadastrado com sucesso!');
            // Limpe o formulário após o cadastro
            document.getElementById('cadastroForm').reset();
        }
    });
});
