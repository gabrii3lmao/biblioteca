📚 Biblioteca de Livros — Sistema Completo (Node.js + Express + Sequelize)

Aplicação completa para gerenciamento de um catálogo de livros, incluindo:

- Interface web amigável
- Upload de capa do livro
- Avaliação por estrelas
- Listagem em cards
- Sistema CRUD completo (criar, editar e excluir)
- Arquitetura MVC
- Banco SQLite automático

Desenvolvido em Node.js + Express + Sequelize.

💻 Tecnologias Utilizadas

- JavaScript (Node.js)
- Express.js
- Sequelize ORM
- SQLite3
- Multer (upload de imagens)
- EJS (templates)
- MVC (Model-View-Controller)

⬇️ Como Instalar e Rodar
1. Requisitos

- Node.js instalado
- npm ou yarn

2. Clonar o Repositório
```
git clone https://github.com/gabrii3lmao/biblioteca.git
cd biblioteca
```
4. Instalar Dependências
```
npm install
# ou
yarn install
```
4. Rodar o Servidor
```
node server.js
# ou
npm start
```

Ao iniciar, o Sequelize cria automaticamente o arquivo biblioteca.db e a tabela livros (se não existirem).

Acesse no navegador:
👉 http://localhost:3000

🌐 Funcionalidades do Sistema
✔️ Listagem de livros em cards

Com capa, título, autor, ano, preço, estrelas e descrição.

✔️ Cadastro de novos livros

Formulário com:
- título
- autor
- ano
- preço
- descrição
- avaliação por estrelas
- upload da capa

✔️ Edição completa

Permite trocar qualquer dado, inclusive a capa.

✔️ Exclusão de livros

Remoção direta pela interface.

✔️ Upload de Imagens

Usando Multer (armazenamento local na pasta uploads/).
