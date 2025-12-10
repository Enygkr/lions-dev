import {
  adicionarLivro,
  listarLivros,
  atualizarLivro,
  removerLivro as removerLivroModel
} from "../models/livroModel.js";

export function criar(titulo, autor, ano) {
  adicionarLivro(titulo, autor, ano);
  console.log("\nLivro adicionado com sucesso.\n");
}

export function listar() {
  const livros = listarLivros();

  if (livros.length === 0) {
    console.log("\nNenhum livro cadastrado.\n");
    return;
  }

  console.table(livros);
}

export function atualizar(id, titulo, autor, ano) {
  const ok = atualizarLivro(id, { titulo, autor, ano });

  if (!ok) {
    console.log("\nID não encontrado.\n");
    return;
  }

  console.log("\nLivro atualizado.\n");
}

export function remover(id) {
  const ok = removerLivroModel(id);

  if (!ok) {
    console.log("\nID não encontrado.\n");
    return;
  }

  console.log("\nLivro removido.\n");
}
