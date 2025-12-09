// Banco de dados em memória
export let livros = [];

export function adicionarLivro(titulo, autor, ano) {
  livros.push({ id: Date.now(), titulo, autor, ano });
}

export function listarLivros() {
  return livros;
}

export function atualizarLivro(id, novosDados) {
  const index = livros.findIndex(l => l.id === id);
  if (index === -1) return false;

  livros[index] = { ...livros[index], ...novosDados };
  return true;
}

export function removerLivro(id) {
  const index = livros.findIndex(l => l.id === id);
  if (index === -1) return false;

  livros.splice(index, 1);
  return true;
}
