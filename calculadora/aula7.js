//fazer uma calculadora, contendo soma, subtração, multiplicação, divisão e porcentagem aaaaaaaaaaaaaaaaaaa
//menu de entrada e saida, utilizando o switch, dectectando os números, letras e caracteres especiais socorroooooooooo

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function detectarEntrada(valor) {
  if (!isNaN(valor)) return "número";
  else if (/^[a-zA-Z]+$/.test(valor)) return "letra";
  else return "caractere especial";
}

function calcular(num1, num2, operacao) {
  let resultado;
  switch (operacao) {
    case 1:
      resultado = num1 + num2;
      console.log(`Resultado da soma: ${resultado}`);
      break;
    case 2:
      resultado = num1 - num2;
      console.log(`Resultado da subtração: ${resultado}`);
      break;
    case 3:
      resultado = num1 * num2;
      console.log(`Resultado da multiplicação: ${resultado}`);
      break;
    case 4:
      resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
      console.log(`Resultado da divisão: ${resultado}`);
      break;
    case 5:
      resultado = (num1 * num2) / 100;
      console.log(`Resultado da porcentagem: ${resultado}`);
      break;
    default:
      console.log("Opção inválida!");
  }
}

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
