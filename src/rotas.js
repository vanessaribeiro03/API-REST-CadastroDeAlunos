const express = require("express");
const { validarSenha } = require("./middlewares/intermediario-alunos");
const { listarAlunos, obterAlunoID, cadastrarAluno, removerAluno } = require("./controllers/controlador-alunos");
const rotas = express();


rotas.use(validarSenha);

rotas.get('/alunos', listarAlunos)
rotas.get('/alunos/:idAluno', obterAlunoID);
rotas.post('/alunos', cadastrarAluno);
rotas.delete('/alunos/:id', removerAluno);



module.exports = rotas;