const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class Livro extends Model {}

Livro.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anoLancamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Livros",
    tableName: "livros",
    timestamps: true,
  }
);

module.exports = Livro;
