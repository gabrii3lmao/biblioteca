const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "/home/gabrii3l/projetos/biblioteca-livros/database/biblioteca.db",
});

module.exports = sequelize;
