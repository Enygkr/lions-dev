import express from "express";
import {
  listarLivros,
  adicionarLivro,
  atualizarLivro,
  deletarLivro,
  buscarLivros
} from "../models/livroModel.js";

const router = express.Router();

// LISTAR
router.get("/", (req, res) => {
  res.json(listarLivros());
});

// CRIAR
router.post("/", (req, res) => {
  const { titulo, autor, ano, genero } = req.body;
  const novo = adicionarLivro(titulo, autor, ano, genero);
  res.status(201).json(novo);
});

// ATUALIZAR
router.put("/:id", (req, res) => {
  const atualizado = atualizarLivro(req.params.id, req.body);
  if (!atualizado) return res.status(404).json({ erro: "Livro não encontrado" });
  res.json(atualizado);
});

// DELETAR
router.delete("/:id", (req, res) => {
  const ok = deletarLivro(req.params.id);
  if (!ok) return res.status(404).json({ erro: "Livro não encontrado" });
  res.json({ mensagem: "Livro removido" });
});

// BUSCAR
router.get("/busca/query", (req, res) => {
  const resultados = buscarLivros(req.query);
  res.json(resultados);
});

export default router;
