![cadastro](https://github.com/vanessaribeiro03/API-REST-CadastroDeAlunos/assets/125810343/4d159fef-51b6-4af6-b2d4-037698816e04)

# 📋 Cadastro de Alunos
## Descrição
Esta é uma API REST simples para realização de cadastro de alunos. Nela terá funções como: Listar alunos, abter informações de um aluno através do seu ID, cadastro de alunos e remover algum aluno específico.

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

![query](https://github.com/vanessaribeiro03/cdd4.0/assets/125810343/b6622362-5a1e-48ff-95ef-6d64baef8a92)

✅ **Depois de informar a senha em todos os endpoints, agora sim terá acesso as suas funções.**
### Listar Alunos
Endpoint: `http://localhost:3000/alunos`

* Esse endpoint irá mostrar a lista de todos os alunos cadastrados, um detalhe importante é que para ter acesso a essa lista é necessário passar uma senha na url.
* GET `http://localhost:3000/alunos?senha=cubos123`

![Captura de tela 2023-10-05 184306](https://github.com/vanessaribeiro03/cdd4.0/assets/125810343/b17565d9-a57f-4438-a4b7-2d72166de685)
