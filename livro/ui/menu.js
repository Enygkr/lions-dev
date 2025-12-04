const readline = require("readline");
const books = require("../books/books");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// CORES
const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  magenta: "\x1b[35m",
  blue: "\x1b[34m",
};

function clear() {
  console.clear();
}

function banner() {
  console.log(
    C.cyan + C.bold +
`╔══════════════════════════════════════════════════╗
║           SISTEMA DE GERENCIAMENTO DE LIVROS     ║
╚══════════════════════════════════════════════════╝` +
    C.reset
  );
}

function menuPrincipal() {
  clear();
  banner();

  console.log(
    C.green +
`
  1. Criar Livro
  2. Listar Livros
  3. Atualizar Livro
  4. Remover Livro
  5. Buscar Livros
  6. Sair
` +
    C.reset
  );

  rl.question("Escolha uma opção: ", (op) => {
    switch (op) {
      case "1": criarLivro(); break;
      case "2": listarLivros(); break;
      case "3": atualizarLivro(); break;
      case "4": removerLivro(); break;
      case "5": buscarLivros(); break;
      case "6": sair(); break;
      default:
        console.log(C.red + "Opção inválida." + C.reset);
        voltar(menuPrincipal);
    }
  });
}

function criarLivro() {
  clear();
  banner();

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
  clear();
  banner();
  books.listarLivros();
  voltar(menuPrincipal);
}

function atualizarLivro() {
  clear();
  banner();

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
  clear();
  banner();

  rl.question("ID do livro a remover: ", (id) => {
    books.removerLivro(Number(id));
    voltar(menuPrincipal);
  });
}

function buscarLivros() {
  clear();
  banner();

  console.log(C.yellow + "Deixe em branco para ignorar o filtro.\n" + C.reset);

  rl.question("Título: ", (title) => {
    rl.question("Autor: ", (author) => {
      rl.question("Ano: ", (year) => {
        rl.question("Gênero: ", (genre) => {
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
  console.log(C.magenta + "\nPressione ENTER para continuar..." + C.reset);
  rl.question("", fn);
}

function sair() {
  clear();
  console.log(C.blue + C.bold + "Encerrando o sistema..." + C.reset);
  rl.close();
}

module.exports = { menuPrincipal };
