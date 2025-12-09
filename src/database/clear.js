const database = require('./connection');
const Books = require('../models/Livro');

async function clear() {
  try {
    await database.sync(); // garante que a tabela existe

    await Books.destroy({
      where: {},
      truncate: true
    });

    console.log("Tabela limpa com sucesso!");
  } catch (err) {
    console.log("Erro ao limpar:", err);
  }
}

clear();