import {
    baralhos,
    flashcards,
    proximoIdBaralho,
    setProximoIdBaralho,
    setBaralhos,
    setFlashcards
  } from "./data.js";
  
  export function criarBaralho(titulo) {
    const novo = {
      id: proximoIdBaralho,
      titulo
    };
  
    baralhos.push(novo);
    setProximoIdBaralho(proximoIdBaralho + 1);
  
    return novo;
  }
  
  export function listarBaralhos() {
    return baralhos;
  }
  
  export function atualizarBaralho(id, novoTitulo) {
    const baralho = baralhos.find(b => b.id === id);
    if (!baralho) return null;
  
    baralho.titulo = novoTitulo;
    return baralho;
  }
  
  export function removerBaralho(id) {
    setBaralhos(baralhos.filter(b => b.id !== id));
    setFlashcards(flashcards.filter(f => f.idBaralho !== id));
  }
  