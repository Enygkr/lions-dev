import {
  adicionarLivro,
  listarLivros,
  atualizarLivro,
  removerLivro,
  buscarLivros
} from "../models/livroModel.js";

export function criarLivro(req, res) {
  const { titulo, autor, ano, genero } = req.body;

  if (!titulo || !autor || !ano || !genero) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  const novo = adicionarLivro(titulo, autor, ano, genero);
  res.status(201).json(novo);
}

export function lerLivros(req, res) {
  res.json(listarLivros());
}

export function atualizarLivroController(req, res) {
  const { id } = req.params;
  const { titulo, autor, ano, genero } = req.body;

  const livroAtualizado = atualizarLivro(id, { titulo, autor, ano, genero });

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado." });
  }

  res.json(livroAtualizado);
}

export function removerLivroController(req, res) {
  const { id } = req.params;

  const ok = removerLivro(id);

  if (!ok) {
    return res.status(404).json({ erro: "Livro não encontrado." });
  }

  res.json({ mensagem: "Livro removido com sucesso." });
}

export function buscarLivrosController(req, res) {
  const resultados = buscarLivros(req.query);
  res.json(resultados);
}
