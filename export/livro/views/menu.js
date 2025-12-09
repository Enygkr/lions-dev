import readline from "readline";
import * as Livro from "../controllers/livroController.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function limpar() {
  console.clear();
}

function exibirMenu() {
  limpar();
  console.log("==============================");
  console.log("      SISTEMA DE LIVROS       ");
  console.log("==============================");
  console.log("1 - Cadastrar Livro");
  console.log("2 - Listar Livros");
  console.log("3 - Atualizar Livro");
  console.log("4 - Remover Livro");
  console.log("5 - Sair");
  console.log("==============================");
}

export function mostrarMenu() {
  exibirMenu();

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Título: ", (titulo) => {
          rl.question("Autor: ", (autor) => {
            rl.question("Ano: ", (ano) => {
              Livro.criar(titulo, autor, ano);
              retornarMenu();
            });
          });
        });
        break;

      case "2":
        Livro.listar();
        retornarMenu();
        break;

      case "3":
        rl.question("ID do livro: ", (id) => {
          rl.question("Novo título: ", (titulo) => {
            rl.question("Novo autor: ", (autor) => {
              rl.question("Novo ano: ", (ano) => {
                Livro.atualizar(Number(id), titulo, autor, ano);
                retornarMenu();
              });
            });
          });
        });
        break;

      case "4":
        rl.question("ID do livro: ", (id) => {
          Livro.remover(Number(id));
          retornarMenu();
        });
        break;

      case "5":
        console.log("\nSaindo...\n");
        rl.close();
        break;

      default:
        console.log("\nOpção inválida.\n");
        retornarMenu();
        break;
    }
  });
}

function retornarMenu() {
  rl.question("\nPressione ENTER para voltar ao menu.", () => {
    mostrarMenu();
  });
}
