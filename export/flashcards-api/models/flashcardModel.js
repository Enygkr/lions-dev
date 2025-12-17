let flashcards = [];
let id = 1;

function getAll() {
  return flashcards;
}

function getById(flashcardId) {
  return flashcards.find(f => f.id === flashcardId);
}

function create(question, answer) {
  const newFlashcard = {
    id: id++,
    question,
    answer
  };
  flashcards.push(newFlashcard);
  return newFlashcard;
}

function update(flashcardId, question, answer) {
  const flashcard = getById(flashcardId);
  if (!flashcard) return null;

  flashcard.question = question ?? flashcard.question;
  flashcard.answer = answer ?? flashcard.answer;
  return flashcard;
}

function remove(flashcardId) {
  const index = flashcards.findIndex(f => f.id === flashcardId);
  if (index === -1) return false;

  flashcards.splice(index, 1);
  return true;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
