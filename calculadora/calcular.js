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
  
  module.exports = calcular;
  