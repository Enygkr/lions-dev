const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../data/livros.json");

function ler() {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function salvar(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function criarLivro(title, author, year, genre) {
  const livros = ler();
  const id = livros.length ? livros[livros.length - 1].id + 1 : 1;

  livros.push({ id, title, author, year, genre });
  salvar(livros);

  console.log("\nLivro criado com sucesso!");
}

function listarLivros() {
  const livros = ler();
  if (livros.length === 0) return console.log("\nNenhum livro cadastrado.");

  console.log("\nLISTA DE LIVROS:");
  livros.forEach(l => {
    console.log(`${l.id}. ${l.title} - ${l.author} (${l.year}) [${l.genre}]`);
  });
}

function atualizarLivro(id, title, author, year, genre) {
  const livros = ler();
  const livro = livros.find(l => l.id === id);
  if (!livro) return console.log("\nLivro não encontrado.");

  livro.title = title;
  livro.author = author;
  livro.year = year;
  livro.genre = genre;

  salvar(livros);
  console.log("\nLivro atualizado.");
}

function removerLivro(id) {
  let livros = ler();
  const tamanhoInicial = livros.length;

  livros = livros.filter(l => l.id !== id);

  if (livros.length === tamanhoInicial)
    return console.log("\nLivro não encontrado.");

  salvar(livros);
  console.log("\nLivro removido.");
}

function buscarLivros({ title, author, year, genre }) {
  const livros = ler();

  const filtrados = livros.filter(l => {
    return (
      (!title || l.title.toLowerCase().includes(title.toLowerCase())) &&
      (!author || l.author.toLowerCase().includes(author.toLowerCase())) &&
      (!year || l.year === year) &&
      (!genre || l.genre.toLowerCase().includes(genre.toLowerCase()))
    );
  });

  if (filtrados.length === 0)
    return console.log("\nNenhum livro encontrado com esses filtros.");

  console.log("\nRESULTADOS DA BUSCA:");
  filtrados.forEach(l => {
    console.log(`${l.id}. ${l.title} - ${l.author} (${l.year}) [${l.genre}]`);
  });
}

module.exports = {
  criarLivro,
  listarLivros,
  atualizarLivro,
  removerLivro,
  buscarLivros
};
