const express = require('express');
const livroController = require('../controllers/LivroController');

const routes = express.Router();

routes.post('/livros', livroController.store)


module.exports = routes;