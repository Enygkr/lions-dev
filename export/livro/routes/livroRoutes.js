import { Router } from "express";
import {
  criarLivro,
  lerLivros,
  atualizarLivroController,
  removerLivroController,
  buscarLivrosController
} from "../controllers/livroController.js";

const router = Router();

router.post("/", criarLivro);
router.get("/", lerLivros);
router.put("/:id", atualizarLivroController);
router.delete("/:id", removerLivroController);
router.get("/buscar", buscarLivrosController);

export default router;
