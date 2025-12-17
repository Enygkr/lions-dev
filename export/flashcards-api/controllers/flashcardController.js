const Flashcard = require("../models/flashcardModel");

function listFlashcards(req, res) {
  res.json(Flashcard.getAll());
}

function getFlashcard(req, res) {
  const id = Number(req.params.id);
  const flashcard = Flashcard.getById(id);

  if (!flashcard) {
    return res.status(404).json({ error: "Flashcard não encontrado" });
  }

  res.json(flashcard);
}

function createFlashcard(req, res) {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: "Pergunta e resposta são obrigatórias" });
  }

  const newFlashcard = Flashcard.create(question, answer);
  res.status(201).json(newFlashcard);
}

function updateFlashcard(req, res) {
  const id = Number(req.params.id);
  const { question, answer } = req.body;

  const updated = Flashcard.update(id, question, answer);

  if (!updated) {
    return res.status(404).json({ error: "Flashcard não encontrado" });
  }

  res.json(updated);
}

function deleteFlashcard(req, res) {
  const id = Number(req.params.id);
  const success = Flashcard.remove(id);

  if (!success) {
    return res.status(404).json({ error: "Flashcard não encontrado" });
  }

  res.status(204).send();
}

module.exports = {
  listFlashcards,
  getFlashcard,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard
};
