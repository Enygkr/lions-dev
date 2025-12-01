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
    buscarPorPergunta,
    buscarPorBaralho
  } from "./flashcardService.js";
  
  // Testes
  
  console.log("Criando baralhos...");
  console.log(criarBaralho("JavaScript Básico"));
  console.log(criarBaralho("Algoritmos"));
  
  console.log("Criando flashcards...");
  console.log(criarFlashcard("O que é variável?", "Armazena valores.", 1));
  console.log(criarFlashcard("O que é constante?", "Valor imutável.", 1));
  
  console.log("Listar baralhos:");
  console.log(listarBaralhos());
  
  console.log("Listar flashcards:");
  console.log(listarFlashcards());
  
  console.log("Flashcards do baralho 1:");
  console.log(listarFlashcardsPorBaralho(1));
  
  console.log("Atualizar baralho:");
  console.log(atualizarBaralho(1, "JS Avançado"));
  
  console.log("Atualizar flashcard:");
  console.log(
    atualizarFlashcard(
      1,
      "O que é uma variável?",
      "Um local que guarda valores.",
      1
    )
  );
  
  console.log("Buscar por pergunta:");
  console.log(buscarPorPergunta("O que é constante?"));
  
  console.log("Remover baralho 2:");
  removerBaralho(2);
  
  console.log("Remover flashcard 1:");
  removerFlashcard(1);
  
  console.log("Flashcards restantes:");
  console.log(listarFlashcards());
  