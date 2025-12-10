const express = require("express");
const livroController = require("../controllers/LivroController");
const Livro = require("../models/Livro");

const routes = express.Router();

// renderizar html
// renderiza a página de livro
routes.get("/", livroController.showCatalog);

//renderiza o formulário
routes.get("/livros/novo", livroController.showForm);
routes.get("/livros/editar/:id", livroController.showEditForm);

// rotas dos controllers
routes.post("/livros", livroController.store);
routes.get("/livros", livroController.index);
routes.get("/livros/:id", livroController.show);
routes.put("/livros/:id", livroController.update);
routes.delete("/livros/:id", livroController.destroy);

module.exports = routes;
