const express = require("express");
const livroController = require("../controllers/LivroController");
const multer = require("multer");
const path = require("path");
const routes = express.Router();
const UPLOADS_FOLDER = path.join(__dirname, "..", "public", "uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_FOLDER);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// renderizar html
// renderiza a página de livro
routes.get("/", livroController.showCatalog);

//renderiza o formulário
routes.get("/livros/novo", livroController.showForm);
routes.get("/livros/editar/:id", livroController.showEditForm);

routes.post("/livros", upload.single("foto"), livroController.store);
routes.post(
  "/livros/editar/:id",
  upload.single("foto"),
  livroController.update
);

// rotas dos controllers
routes.post("/livros", livroController.store);
routes.get("/livros", livroController.index);
routes.get("/livros/:id", livroController.show);
routes.put("/livros/:id", livroController.update);
routes.delete("/livros/:id", livroController.destroy);

module.exports = routes;
