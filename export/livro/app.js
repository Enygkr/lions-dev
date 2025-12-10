import express from "express";
import { mostrarMenu } from "./views/menu.js";
import livroRoutes from "./routes/livroRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rotas web
app.use("/", livroRoutes);

// iniciar servidor web
app.listen(4008, () => {
    console.log("Servidor rodando: http://localhost:4008");
  });  

// iniciar menu do terminal
mostrarMenu();
