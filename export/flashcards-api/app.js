const express = require("express");
const flashcardRoutes = require("./routes/flashcardRoutes");

const app = express();
app.use(express.json());

app.use("/flashcards", flashcardRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
