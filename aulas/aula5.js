// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Digite a primeira nota: ", (n1) => {
//   rl.question("Digite a segunda nota: ", (n2) => {
//     const nota1 = Number(n1);
//     const nota2 = Number(n2);

//     const media = (nota1 + nota2) / 2;

//     if (media < 8) {
//       console.log("Que pena, você não passou!! Sua nota foi " + media);
//     } else {
//       console.log("Parabéns, você passou!! Sua nota foi " + media);
//     }

//     rl.close();
//   });
// });
//código antigo ^
//código novo V

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Digite a primeira nota: ", (n1) => {
//   rl.question("Digite a segunda nota: ", (n2) => {
//     const nota1 = Number(n1);
//     const nota2 = Number(n2);

//     const media = (nota1 + nota2) / 2;

//     let status;
//     if (media < 8) {
//       status = "reprovado";
//     } else {
//       status = "aprovado";
//     }

//     switch (status) {
//       case "reprovado":
//         console.log("Que pena, você não passou!! Sua nota foi " + media);
//         break;
//       case "aprovado":
//         console.log("Parabéns, você passou!! Sua nota foi " + media);
//         break;
//       default:
//         console.log("Erro");
//     }

//     rl.close();
//   });
// });
//============================================================================================================

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Digite a nota (0 a 100): ", (valor) => {
//     const nota = Number(valor);
//     let classificacao;

//     switch (true) {
//         case (nota >= 90 && nota <= 100):
//         classificacao = "A";
//         break;
//         case (nota >= 80 && nota <= 89):
//         classificacao = "B";
//         break;    
//         case (nota >= 70 && nota <= 79):
//         classificacao = "C";
//         break;
//         case (nota >= 60 && nota <= 69):
//         classificacao = "D";
//         break; 
//         case (nota >= 0 && nota <= 59):
//         classificacao = "F";
//         break; 
//         default:
//             classificacao = "Nota inválida";
//     }
//     console.log("Classificação:", classificacao);

//     if (classificacao ==="A" || classificacao === "B" || classificacao === "C") {
//         console.log("Aprovado");
//     } else if (classificacao === "D" || classificacao === "F") {
//         console.log("Reprovado");
//     }
//     rl.close();
// });

//=================================ATV 1=======================================================

// const numero = 35;

// if (numero % 5 === 0) {
//     console.log(`O número ${numero} é divisível por 5.`);
// } else {
//     console.log(`O número ${numero} não é divisível por 5.`);
// }

//================================================ATV 2==============================================

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// const impares = [];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) {
//         impares.push(numeros[i]);
//     }
// }

// console.log(impares);

//==================================================ATV 3===============================================

// const numeros = [27, 10, 3, 0, 20, 5, 6, 3];

// numeros.push(18); 

// const pares = [];
// const impares = []; 

// for (let i = 0; i < numeros.length; i++) {
//   const n = numeros[i];
//   if (n % 2 === 0) {
//     pares.push(n);
//   } else {
//     impares.push(n);
//   }
// }

// console.log("Pares:", pares);
// console.log("Ímpares:", impares);

//================================================================================ATV 4======================================

// const notas = [7.5, 3.0, 3.2, 6.8, 10, 5.5, 8.7, 4.0, 9.5, 8.3];

// let soma = 0;
// for (let i = 0; i < notas.length; i++) soma += notas[i];
// const media = soma / notas.length;
// console.log("Média:", media);

// let maior = notas[0];
// let menor = notas[0];
// for (let i = 1; i < notas.length; i++) {
//   if (notas[i] > maior) maior = notas[i];
//   if (notas[i] < menor) menor = notas[i];
// }
// console.log("Maior:", maior);
// console.log("Menor:", menor);

// let acima = 0;
// for (let i = 0; i < notas.length; i++) {
//   if (notas[i] > media) acima++;
// }
// console.log("Acima da média:", acima);

// notas.push(8.9); 
// console.log("Notas atualizadas:", notas);

// let aprovados = [];
// for (let i = 0; i < notas.length; i++) {
//   if (notas[i] > 8) aprovados.push(notas[i]);
// }
// console.log("Total aprovados:", aprovados.length);
// console.log("Notas aprovados:", aprovados);

// console.log("Todas as notas:");
// for (let i = 0; i < notas.length; i++) {
//   console.log(`Nota ${i + 1}: ${notas[i]}`);
// }

