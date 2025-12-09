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
};
