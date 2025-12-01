import {
    baralhos,
    flashcards,
    proximoIdFlashcard,
    setProximoIdFlashcard
  } from "./data.js";
  
  export function criarFlashcard(pergunta, resposta, idBaralho) {
    const existe = baralhos.find(b => b.id === idBaralho);
    if (!existe) return null;
  
    const novo = {
      id: proximoIdFlashcard,
      pergunta,
      resposta,
      idBaralho
    };
  
    flashcards.push(novo);
    setProximoIdFlashcard(proximoIdFlashcard + 1);
  
    return novo;
  }
  
  export function listarFlashcards() {
    return flashcards;
  }
  
  export function listarFlashcardsPorBaralho(idBaralho) {
    return flashcards.filter(f => f.idBaralho === idBaralho);
  }
  
  export function atualizarFlashcard(id, pergunta, resposta, idBaralho) {
    const card = flashcards.find(f => f.id === id);
    if (!card) return null;
  
    const existe = baralhos.find(b => b.id === idBaralho);
    if (!existe) return null;
  
    card.pergunta = pergunta;
    card.resposta = resposta;
    card.idBaralho = idBaralho;
  
    return card;
  }
  
  export function removerFlashcard(id) {
    const index = flashcards.findIndex(f => f.id === id);
    if (index !== -1) flashcards.splice(index, 1);
  }
  
  export function buscarPorPergunta(pergunta) {
    return flashcards.filter(f => f.pergunta === pergunta);
  }
  
  export function buscarPorBaralho(idBaralho) {
    return flashcards.filter(f => f.idBaralho === idBaralho);
  }
  