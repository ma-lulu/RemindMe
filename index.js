// index.js
const express = require('express');
const loginController = require ('./')
const cadastroController = require('./controller/cadastro');

const app = express();
const PORT = 5173;

app.use(express.json());

// Rota de cadastro
app.post('index.html', cadastroController.cadastrarUsuario);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
