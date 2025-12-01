export let baralhos = [];
export let flashcards = [];

export let proximoIdBaralho = 1;
export let proximoIdFlashcard = 1;

// Funções para atualizar as variáveis
export function setProximoIdBaralho(valor) {
  proximoIdBaralho = valor;
}

export function setProximoIdFlashcard(valor) {
  proximoIdFlashcard = valor;
}

export function setBaralhos(novo) {
  baralhos = novo;
}

export function setFlashcards(novo) {
  flashcards = novo;
}
