const express = require("express");
const route = express.Router();

// rotas LIVRO
const livroRoute = require("./livros");
route.use(livroRoute);

module.exports = route;
