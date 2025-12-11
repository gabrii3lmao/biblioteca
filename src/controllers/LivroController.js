const Livro = require("../models/Livro");
const fs = require("fs");
module.exports = {
  async store(req, res) {
    const { nome, autor, anoLancamento, preco, descricao, nota } = req.body;

    const imagem = req.file ? req.file.filename : null;

    try {
      const livro = await Livro.create({
        nome,
        autor,
        anoLancamento,
        preco,
        descricao,
        imagem,
        nota
      });
      return res.redirect("/");
    } catch (err) {
      console.error(err);
      return res.status(400).json({ err: "Falha ao cadastrar o livro" });
    }
  },

  async index(req, res) {
    try {
      const livros = await Livro.findAll();

      return res.status(200).json(livros);
    } catch (err) {
      console.error("erro ao listar livros: ", err);
      return res
        .status(500)
        .json({ err: "Falha interta ao buscar o catalogo de livros" });
    }
  },

  async show(req, res) {
    const { id } = req.params;

    try {
      const livro = await Livro.findByPk(id);

      if (!livro) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      return res.status(200).json(livro);
    } catch (err) {
      console.error("Erro ao buscar os livros: ", err);
      return res
        .status(500)
        .json({ error: "Não foi possivel encontrar o livro" });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, autor, anoLancamento, preco, descricao, nota } = req.body;
    try {
      const livro = await Livro.findByPk(id);
      if (!livro) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      let novaImagem = livro.imagem

      if (req.file) {
        novaImagem = req.file.filename;
      }

      await Livro.update(
        { nome, autor, anoLancamento, preco, descricao, nota, imagem: novaImagem },
        { where: { id } }
      );

      const livroAtualizado = await Livro.findByPk(id);
      return res.redirect("/");
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
      return res
        .status(500)
        .json({ error: "Falha interna ao atualizar o livro." });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Livro.destroy({ where: { id } });
      if (deleted === 0) {
        return res
          .status(404)
          .json({ error: "Livro não encontrado para exclusão" });
      }

      return res.redirect("/");
    } catch (error) {
      console.log("erro ao deletar livro: ", error);
      return res
        .status(500)
        .json({ error: "Falha interna ao deletar o livro" });
    }
  },

  async showCatalog(req, res) {
    try {
      const livros = await Livro.findAll();

      return res.render("catalog", {
        pageTitle: "Catálogo de livros",
        livros: livros,
      });
    } catch (error) {
      console.error("Erro ao renderizar catálogo: ", error);
      return res.status(500).send("<h1> Erro ao renderizar o catálogo </h1>");
    }
  },

  async showForm(req, res) {
    try {
      return res.render("form", {
        pageTitle: "Adicionar um novo livro",
      });
    } catch (error) {
      console.error("Erro ao renderizar a rota formulário: ", error);
      return res.status(500).send("<h1> Erro ao carregar o formulário </h1>");
    }
  },

  async showEditForm(req, res) {
    const { id } = req.params;
    try {
      const livro = await Livro.findByPk(id);
      if (!livro) {
        return res.status(404).send("<h1> Livro não encontrado </h1>");
      }

      return res.render("formEditBook", {
        pageTitle: `Editar Livro: ${livro.nome}`,
        livro: livro,
      });
    } catch (error) {
      console.error("Erro ao carregar formulário de edição:", error);
      return res
        .status(500)
        .send("<h1>Erro interno ao carregar a página de edição.</h1>");
    }
  },
};
