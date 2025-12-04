const readline = require("readline");
const books = require("../books/books");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function clear() {
  console.clear();
}

function menuPrincipal() {
  clear();
  console.log(`
===============================
     GERENCIAMENTO DE LIVROS
===============================

1. Criar Livro
2. Listar Livros
3. Atualizar Livro
4. Remover Livro
5. Buscar Livros
6. Sair
`);

  rl.question("Escolha uma opção: ", (op) => {
    switch (op) {
      case "1": criarLivro(); break;
      case "2": listarLivros(); break;
      case "3": atualizarLivro(); break;
      case "4": removerLivro(); break;
      case "5": buscarLivros(); break;
      case "6": rl.close(); break;
      default:
        console.log("Opção inválida.");
        voltar(menuPrincipal);
    }
  });
}

function criarLivro() {
  rl.question("Título: ", (title) => {
    rl.question("Autor: ", (author) => {
      rl.question("Ano: ", (year) => {
        rl.question("Gênero: ", (genre) => {
          books.criarLivro(title, author, Number(year), genre);
          voltar(menuPrincipal);
        });
      });
    });
  });
}

function listarLivros() {
  books.listarLivros();
  voltar(menuPrincipal);
}

function atualizarLivro() {
  rl.question("ID do livro: ", (id) => {
    rl.question("Novo título: ", (title) => {
      rl.question("Novo autor: ", (author) => {
        rl.question("Novo ano: ", (year) => {
          rl.question("Novo gênero: ", (genre) => {
            books.atualizarLivro(Number(id), title, author, Number(year), genre);
            voltar(menuPrincipal);
          });
        });
      });
    });
  });
}

function removerLivro() {
  rl.question("ID do livro a remover: ", (id) => {
    books.removerLivro(Number(id));
    voltar(menuPrincipal);
  });
}

function buscarLivros() {
  rl.question("Título (vazio para ignorar): ", (title) => {
    rl.question("Autor (vazio para ignorar): ", (author) => {
      rl.question("Ano (vazio para ignorar): ", (year) => {
        rl.question("Gênero (vazio para ignorar): ", (genre) => {
          books.buscarLivros({
            title,
            author,
            year: year ? Number(year) : null,
            genre
          });
          voltar(menuPrincipal);
        });
      });
    });
  });
}

function voltar(fn) {
  console.log("\nPressione ENTER para continuar...");
  rl.question("", fn);
}

module.exports = { menuPrincipal };
