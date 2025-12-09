import express from "express";
import { mostrarMenu } from "./views/menu.js";
import livroRoutes from "./routes/livroRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rotas web
app.use("/", livroRoutes);

// iniciar o servidor web
app.listen(4001, () => {
    console.log("Servidor rodando: http://localhost:4001");
  });  

// iniciar o menu do terminal
mostrarMenu();
