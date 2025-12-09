const Livro = require("../models/Livro");

module.exports = {
  async store(req, res) {
    const { nome, autor, anoLancamento, preco, descricao } = req.body;

    try {
      const livro = await Livro.create({
        nome,
        autor,
        anoLancamento,
        preco,
        descricao,
      });
      return res.status(201).json(livro);
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
    const { nome, autor, anoLancamento, preco, descricao } = req.body;
    try {
      const livro = await Livro.findByPk(id);
      if (!livro) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      await Livro.update(
        { nome, autor, anoLancamento, preco, descricao },
        { where: { id } }
      );

      const livroAtualizado = await Livro.findByPk(id);
      return res.status(200).json(livroAtualizado);
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

      return res.status(204).send();
    } catch (error) {
      console.log("erro ao deletar livro: ", error);
      return res
        .status(500)
        .json({ error: "Falha interna ao deletar o livro" });
    }
  },
};
