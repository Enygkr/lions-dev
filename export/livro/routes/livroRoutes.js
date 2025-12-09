import express from "express";
import { listarLivros } from "../models/livroModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  const livros = listarLivros();
  let html = `
    <h1>Lista de Livros</h1>
    <a href="/novo">Adicionar Livro</a>
    <ul>
  `;
  for (const l of livros) {
    html += `<li>${l.titulo} - ${l.autor} (${l.ano})</li>`;
  }
  html += "</ul>";

  res.send(html);
});

export default router;

import { adicionarLivro } from "../models/livroModel.js";

router.get("/novo", (req, res) => {
  res.send(`
    <h1>Novo Livro</h1>
    <form method="POST" action="/create">
      <input name="titulo" placeholder="Título" required><br>
      <input name="autor" placeholder="Autor" required><br>
      <input name="ano" type="number" placeholder="Ano" required><br>
      <button type="submit">Salvar</button>
    </form>
  `);
});

router.post("/create", (req, res) => {
  const { titulo, autor, ano } = req.body;
  adicionarLivro(titulo, autor, ano);
  res.redirect("/");
});
