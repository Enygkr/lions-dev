import {
    getBaralhos,
    getFlashcards,
    getNextBaralhoId
  } from "./database.js";
  
  // CREATE
  export function criarBaralho({ titulo }) {
    const baralhos = getBaralhos();
    const novo = {
      id: getNextBaralhoId(),
      titulo
    };
    baralhos.push(novo);
    return novo;
  }
  
  // READ
  export function listarBaralhos() {
    return getBaralhos();
  }
  
  // UPDATE
  export function atualizarBaralho({ id, titulo }) {
    const baralhos = getBaralhos();
    const baralho = baralhos.find(b => b.id === id);
    if (!baralho) return null;
  
    baralho.titulo = titulo;
    return baralho;
  }
  
  // DELETE
  export function removerBaralho({ id }) {
    const baralhos = getBaralhos();
    const flashcards = getFlashcards();
  
    const index = baralhos.findIndex(b => b.id === id);
    if (index !== -1) baralhos.splice(index, 1);
  
    for (let i = flashcards.length - 1; i >= 0; i--) {
      if (flashcards[i].idBaralho === id) flashcards.splice(i, 1);
    }
  }
  