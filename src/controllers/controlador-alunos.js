const alunos = require("../database/alunos");

let gerarIdAluno = 1;

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
};


const obterAlunoID = (req, res) => {
    const { idAluno } = req.params;

    if (isNaN(idAluno)) {
        return res.status(400).json({ mensagem: "O id informado não é um número válido." })
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(idAluno);
    })

    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado." })
    }

    return res.status(200).json(aluno);
}


const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrigatório informar." })
    };

    if (!sobrenome) {
        return res.status(400).json({ mensagem: "O sobrenome é obrigatório informar." })
    };

    if (!idade) {
        return res.status(400).json({ mensagem: "A idade é obrigatória informar." })
    };

    if (!curso) {
        return res.status(400).json({ mensagem: "O curso é obrigatório informar." })
    };

    if (idade < 18) {
        return res.status(400).json({ mensagem: "O aluno deve ser maior de idade para ser cadastrado." })
    };

    const novoAluno = {
        id: gerarIdAluno,
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(novoAluno);
    gerarIdAluno++;

    return res.status(201).send();
};

const removerAluno = (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O id informado não é um número válido." })
    }

    const indiceAluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    })

    if (indiceAluno < 0) {
        return res.status(404).json({ mensagem: "Aluno não encontrado." })
    }

    const alunoRemovido = alunos.splice(indiceAluno, 1);

    return res.status(200).send();
};

module.exports = {
    listarAlunos,
    obterAlunoID,
    cadastrarAluno,
    removerAluno
}