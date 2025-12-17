const express = require("express");
const controller = require("../controllers/flashcardController");

const router = express.Router();

router.get("/", controller.listFlashcards);
router.get("/:id", controller.getFlashcard);
router.post("/", controller.createFlashcard);
router.put("/:id", controller.updateFlashcard);
router.delete("/:id", controller.deleteFlashcard);

module.exports = router;
