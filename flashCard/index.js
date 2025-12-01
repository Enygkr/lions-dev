import readline from "readline";
import {
  criarBaralho,
  listarBaralhos,
  atualizarBaralho,
  removerBaralho
} from "./deckService.js";

import {
  criarFlashcard,
  listarFlashcards,
  listarFlashcardsPorBaralho,
  atualizarFlashcard,
  removerFlashcard,
  buscarPorPergunta
} from "./flashcardService.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("\n=== SISTEMA DE FLASHCARDS ===");
  console.log("1. Criar Baralho");
  console.log("2. Listar Baralhos");
  console.log("3. Atualizar Baralho");
  console.log("4. Remover Baralho");
  console.log("5. Criar Flashcard");
  console.log("6. Listar Flashcards");
  console.log("7. Listar Flashcards por Baralho");
  console.log("8. Atualizar Flashcard");
  console.log("9. Remover Flashcard");
  console.log("10. Buscar Flashcards por Pergunta");
  console.log("0. Sair");

  rl.question("Escolha uma opção: ", opcao => {
    switch (opcao) {
      case "1": return criarBaralhoMenu();
      case "2": return listarBaralhosMenu();
      case "3": return atualizarBaralhoMenu();
      case "4": return removerBaralhoMenu();
      case "5": return criarFlashcardMenu();
      case "6": return listarFlashcardsMenu();
      case "7": return listarPorBaralhoMenu();
      case "8": return atualizarFlashcardMenu();
      case "9": return removerFlashcardMenu();
      case "10": return buscarPerguntaMenu();
      case "0": rl.close(); return;
      default: console.log("Opção inválida."); return menu();
    }
  });
}

// ------------------- MENU FUNÇÕES -------------------

function criarBaralhoMenu() {
  rl.question("Título: ", titulo => {
    console.log("Criado:", criarBaralho({ titulo }));
    menu();
  });
}

function listarBaralhosMenu() {
  console.log(listarBaralhos());
  menu();
}

function atualizarBaralhoMenu() {
  rl.question("ID: ", id => {
    rl.question("Novo título: ", titulo => {
      console.log(atualizarBaralho({ id: Number(id), titulo }));
      menu();
    });
  });
}

function removerBaralhoMenu() {
  rl.question("ID: ", id => {
    removerBaralho({ id: Number(id) });
    console.log("Removido.");
    menu();
  });
}

function criarFlashcardMenu() {
  rl.question("Pergunta: ", pergunta => {
    rl.question("Resposta: ", resposta => {
      rl.question("ID do Baralho: ", idBaralho => {
        console.log(
          criarFlashcard({
            pergunta,
            resposta,
            idBaralho: Number(idBaralho)
          })
        );
        menu();
      });
    });
  });
}

function listarFlashcardsMenu() {
  console.log(listarFlashcards());
  menu();
}

function listarPorBaralhoMenu() {
  rl.question("ID do Baralho: ", id => {
    console.log(listarFlashcardsPorBaralho({ idBaralho: Number(id) }));
    menu();
  });
}

function atualizarFlashcardMenu() {
  rl.question("ID: ", id => {
    rl.question("Nova pergunta: ", pergunta => {
      rl.question("Nova resposta: ", resposta => {
        rl.question("ID Baralho: ", idBaralho => {
          console.log(
            atualizarFlashcard({
              id: Number(id),
              pergunta,
              resposta,
              idBaralho: Number(idBaralho)
            })
          );
          menu();
        });
      });
    });
  });
}

function removerFlashcardMenu() {
  rl.question("ID: ", id => {
    removerFlashcard({ id: Number(id) });
    console.log("Removido.");
    menu();
  });
}

function buscarPerguntaMenu() {
  rl.question("Pergunta exata: ", pergunta => {
    console.log(buscarPorPergunta({ pergunta }));
    menu();
  });
}

menu();
