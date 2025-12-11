import express from "express";
import livroRoutes from "./routes/livroRoutes.js";

const app = express();
app.use(express.json());

app.use("/livros", livroRoutes);

app.listen(4010, () => {
  console.log("Servidor rodando http://localhost:4010");
});
