let livros = [];
let idAtual = 1;

export function listarLivros() {
  return livros;
}

export function adicionarLivro(titulo, autor, ano, genero) {
  const novo = {
    id: idAtual++,
    titulo,
    autor,
    ano: Number(ano),
    genero
  };

  livros.push(novo);
  return novo;
}

export function atualizarLivro(id, dados) {
  id = Number(id);
  const index = livros.findIndex(l => l.id === id);
  if (index === -1) return null;

  livros[index] = { ...livros[index], ...dados };
  return livros[index];
}

export function removerLivro(id) {
  id = Number(id);
  const index = livros.findIndex(l => l.id === id);
  if (index === -1) return false;

  livros.splice(index, 1);
  return true;
}

export function buscarLivros(filtros) {
  const { titulo, autor, ano, genero } = filtros;

  return livros.filter(l => {
    return (
      (!titulo || l.titulo.toLowerCase().includes(titulo.toLowerCase())) &&
      (!autor || l.autor.toLowerCase().includes(autor.toLowerCase())) &&
      (!ano || l.ano === Number(ano)) &&
      (!genero || l.genero.toLowerCase().includes(genero.toLowerCase()))
    );
  });
}
