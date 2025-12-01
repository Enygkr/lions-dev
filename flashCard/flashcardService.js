import {
    getFlashcards,
    getNextFlashcardId
  } from "./database.js";
  
  export function criarFlashcard({ pergunta, resposta, idBaralho }) {
    const flashcards = getFlashcards();
    const novo = {
      id: getNextFlashcardId(),
      pergunta,
      resposta,
      idBaralho
    };
    flashcards.push(novo);
    return novo;
  }
  
  export function listarFlashcards() {
    return getFlashcards();
  }
  
  export function listarFlashcardsPorBaralho({ idBaralho }) {
    return getFlashcards().filter(f => f.idBaralho === idBaralho);
  }
  
  export function atualizarFlashcard({ id, pergunta, resposta, idBaralho }) {
    const flashcards = getFlashcards();
    const flash = flashcards.find(f => f.id === id);
    if (!flash) return null;
  
    flash.pergunta = pergunta;
    flash.resposta = resposta;
    flash.idBaralho = idBaralho;
    return flash;
  }
  
  export function removerFlashcard({ id }) {
    const flashcards = getFlashcards();
    const index = flashcards.findIndex(f => f.id === id);
    if (index !== -1) flashcards.splice(index, 1);
  }
  
  export function buscarPorPergunta({ pergunta }) {
    return getFlashcards().filter(f => f.pergunta === pergunta);
  }
  