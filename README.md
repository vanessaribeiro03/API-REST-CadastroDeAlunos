![cadastro](https://github.com/vanessaribeiro03/API-REST-CadastroDeAlunos/assets/125810343/4d159fef-51b6-4af6-b2d4-037698816e04)

# 📋 Cadastro de Alunos
## Descrição
Esta é uma API REST simples para realização de cadastro de alunos. Nela terá funções como: Listar alunos, obter informações de um aluno através do seu ID, cadastro de alunos e remover algum aluno específico.

## Tecnologias e Ferramentas Utilizadas
* [Node.js](https://nodejs.org/pt-br)
* [Express](https://expressjs.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Insomnia](https://insomnia.rest/download)

## Como executar o projeto
* [1° passo] É necessário realizar o clone desse repositório para sua máquina, então no seu terminal navegue até o diretório onde deseja clonar o projeto e execute o seguinte comando:
```
git@github.com:vanessaribeiro03/API-REST-CadastroDeAlunos.git
```
* [2° passo] Após isso, instale pacotes NPM executando o comando abaixo:
```
npm install
```
> com o comando acima executado, as tecnologias utilizadas nesse projeto serão instaladas, o express e o nodemon.
* [3° passo] Com tudo instalado e devidamente configurado, para rodar o projeto execute o seguinte comando:
```
npm run start
```
✅ **É necessário que o insomnia esteja instalado em seu computador para testar os endpoints dessa API.**
## Uso
⚠️ **Importante:** Para ter acesso a todas as funcionalidades dos endpoints, é necessario passar uma senha como parametro, em cada endpoint dentro do insomnia, como mostra abaixo.

![query](https://res.cloudinary.com/dnuhmdhlu/image/upload/v1697844119/Captura_de_tela_2023-10-05_185432_aa1ism.png)

✅ **Depois de informar a senha em todos os endpoints, agora sim terá acesso as suas funções.**
### Listar Alunos
Endpoint: `http://localhost:3000/alunos`

* Mostra a lista de todos os alunos cadastrados.
* GET `http://localhost:3000/alunos?senha=cubos123`

![Captura de tela 2023-10-05 184306](https://res.cloudinary.com/dnuhmdhlu/image/upload/v1697844878/listar_ir3d1e.png)

### Cadastrar Alunos
Endpoint: `http://localhost:3000/alunos/`

* Cadastra um aluno.
* Por se tratar de um endpoint do verbo POST, é necessário passar as informações no body.

![Alunocadastro](https://res.cloudinary.com/dnuhmdhlu/image/upload/v1697844562/cadastrar_ahaq4v.png)

### Obter Aluno por ID
Endpoint: `http://localhost:3000/alunos/<id do aluno>`

* Mostra todas as informações do aluno informado pelo ID
* GET `http://localhost:3000/alunos/1`

![alunoID](https://res.cloudinary.com/dnuhmdhlu/image/upload/v1697844621/obter_jn6ur3.png)

### Remover aluno
Endpoint: `http://localhost:3000/alunos/<id do aluno>`

* Remove o aluno do ID informado
* DELETE `http://localhost:3000/alunos/1`

![apagarAluno](https://res.cloudinary.com/dnuhmdhlu/image/upload/v1697844656/remover_klgvlk.png)

# Faça bom uso! 
