let baralhos = [];
let flashcards = [];

let proximoIdBaralho = 1;
let proximoIdFlashcard = 1;

export function getBaralhos() {
  return baralhos;
}

export function getFlashcards() {
  return flashcards;
}

export function getNextBaralhoId() {
  return proximoIdBaralho++;
}

export function getNextFlashcardId() {
  return proximoIdFlashcard++;
}
