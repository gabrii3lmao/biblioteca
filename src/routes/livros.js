const express = require("express");
const livroController = require("../controllers/LivroController");

const routes = express.Router();

routes.post("/livros", livroController.store);
routes.get("/livros", livroController.index);
routes.get("/livros/:id", livroController.show);
routes.put("/livros/:id", livroController.update);
routes.delete("/livro/:id", livroController.destroy);
module.exports = routes;
