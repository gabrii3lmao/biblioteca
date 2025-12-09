const express = require("express");
const routes = require("./routes"); // carrega o index de rotas
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "public")));
app.use(routes);

app.set("views", path.resolve(__dirname, "views"));
app.set("views engine", "ejs");

const connection = require("./database/connection");

async function startServer() {
  try {
    // 1. Tenta autenticar/conectar ao banco de dados
    await connection.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");

    await connection.sync({ force: false });
    console.log("Tabelas sincronizadas (criadas se não existiam).");

    // 3. Inicia o servidor Express APENAS após o banco estar pronto
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Falha ao iniciar o servidor ou conectar ao DB:", error);
  }
}

startServer();
