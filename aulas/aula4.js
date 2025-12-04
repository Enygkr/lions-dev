// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite o número da tabuada que deseja: ', (resposta) => {
//   const tabuada = Number(resposta);

//   console.log(`\nTabuada do ${tabuada}:\n`);

//   for (let i = 1; i <= 10; i++) {
//     console.log(`${tabuada} x ${i} = ${tabuada * i}`);
//   }

//   rl.close();
// });

//================================================ATV da tabuada==================================

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
//========================================================================================================

// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   const coresFavoritas = ["preto", "azul", "verde"];
//   const coresEspeciais = [];
  
//   readline.question("Digite sua cor favorita: ", (cor) => {
//     const corDoUsuario = cor.toLowerCase();
  
//     if (coresFavoritas.includes(corDoUsuario)) {
//       console.log("A sua cor favorita é uma das favoritas da turma!");
//     } else {
//       console.log("A sua cor favorita é diferente, vamos adicionar à lista!");
//       coresEspeciais.push(corDoUsuario);
//     }
  
//     console.log("Cores favoritas:", coresFavoritas);
//     console.log("Cores especiais:", coresEspeciais);
//     console.log("Quantidade de cores favoritas:", coresFavoritas.length);
//     console.log("Quantidade de cores especiais:", coresEspeciais.length);
  
//     readline.close();
//   });
  //=============================================================================
