const readline = require("readline");
const detectarEntrada = require("./detectarEntrada");
const calcular = require("./calcular");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== CALCULADORA ===");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");
console.log("5 - Porcentagem");
console.log("===================");

rl.question("Escolha uma operação (1 a 5): ", (opcao) => {
  const tipoOp = detectarEntrada(opcao);

  if (tipoOp !== "número") {
    console.log("Erro: operação inválida!");
    rl.close();
    return;
  }

  const operacao = parseInt(opcao);

  rl.question("Digite o primeiro valor: ", (v1) => {
    const tipo1 = detectarEntrada(v1);
    console.log(`Tipo do primeiro valor: ${tipo1}`);

    rl.question("Digite o segundo valor: ", (v2) => {
      const tipo2 = detectarEntrada(v2);
      console.log(`Tipo do segundo valor: ${tipo2}`);

      if (tipo1 !== "número" || tipo2 !== "número") {
        console.log("Erro: ambos os valores precisam ser números!");
      } else {
        const n1 = parseFloat(v1);
        const n2 = parseFloat(v2);
        calcular(n1, n2, operacao);
      }
      rl.close();
    });
  });
});
