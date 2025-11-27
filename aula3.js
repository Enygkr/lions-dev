// atv 1 e 2 pag 147, 148

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
//=======================================================
// let somaPares = 0;
// let somaImpares = 0;
// let totalPares = 0;
// let totalImpares = 0;

// for (let i = 0; i <= 999; i++) {
//   if (i % 2 === 0) {        
//     somaPares += i;
//     totalPares++;
//   } else {                 
//     somaImpares += i;
//     totalImpares++;
//   }
// }

// const mediaPares = somaPares / totalPares;
// const mediaImpares = somaImpares / totalImpares;

// console.log("===== RESULTADOS =====");
// console.log(`Soma dos pares: ${somaPares}`);
// console.log(`Soma dos ímpares: ${somaImpares}`);
// console.log(`Total de pares: ${totalPares}`);
// console.log(`Total de ímpares: ${totalImpares}`);
// console.log(`Média dos pares: ${mediaPares.toFixed(2)}`);
// console.log(`Média dos ímpares: ${mediaImpares.toFixed(2)}`);

// if (somaPares > somaImpares) {
//   console.log("\nOs números PARES têm a soma maior.");
// } else if (somaImpares > somaPares) {
//   console.log("\nOs números ÍMPARES têm a soma maior.");
// } else {
//   console.log("\nAs somas são iguais!");
// }

//===============================================================Atividade Pedra Papel e Tesoura===========================================================

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const opcoes = ['Pedra', 'Papel', 'Tesoura'];

// rl.question('Escolha Pedra, Papel ou Tesoura: ', (escolhaUsuario) => {

//   escolhaUsuario = escolhaUsuario.trim().toLowerCase();
//   escolhaUsuario = escolhaUsuario.charAt(0).toUpperCase() + escolhaUsuario.slice(1);

//   const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

//   let resultado = '';

//   if (escolhaUsuario === escolhaComputador) {
//     resultado = 'Empate!';
//   } else if (
//     (escolhaUsuario === 'Pedra' && escolhaComputador === 'Tesoura') ||
//     (escolhaUsuario === 'Papel' && escolhaComputador === 'Pedra') ||
//     (escolhaUsuario === 'Tesoura' && escolhaComputador === 'Papel')
//   ) {
//     resultado = 'Você venceu! ';
//   } else if (opcoes.includes(escolhaUsuario)) {
//     resultado = 'Você perdeu! ';
//   } else {
//     resultado = 'Opção inválida! Escolha entre Pedra, Papel ou Tesoura.';
//   }

//   console.log(`\nVocê escolheu: ${escolhaUsuario}`);
//   console.log(`Computador escolheu: ${escolhaComputador}`);
//   console.log(`Resultado: ${resultado}`);

//   rl.close();
// });

//============================================Senha atv===============================================

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// rl.question('Digite o comprimento da senha desejada: ', (resposta) => {
//   const comprimentoSenha = parseInt(resposta);
//   let senha = '';

//   for (let i = 0; i < comprimentoSenha; i++) {
//     const numeroAleatorio = Math.floor(Math.random() * caracteres.length);
//     senha += caracteres.charAt(numeroAleatorio);
//   }

//   console.log(`\nSua senha gerada é: ${senha}`);

//   rl.close();
// });

//===========================================================Insert notas===============================================================

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let notas = [];

// rl.question("Digite a nota da Prova 1: ", (resposta1) => {
//   let prova1 = parseFloat(resposta1);
//   notas.push(prova1);

//   rl.question("Digite a nota da Prova 2: ", (resposta2) => {
//     let prova2 = parseFloat(resposta2);
//     notas.push(prova2);

//     let media = (notas[0] + notas[1]) / 2;

//     console.log(`\nAs notas foram: ${notas[0]} e ${notas[1]}`);
//     console.log(`A média é: ${media.toFixed(2)}\n`);

//     rl.close();
//   });
// });

//=================================================================Senha Min 4=====================================================================

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const min = 4; // mínimo fixo

// rl.question("Digite o tamanho máximo da senha (mínimo é 4): ", (max) => {

//     max = Number(max);

//     if (isNaN(max) || max < min) {
//         console.log(`Valor inválido! O máximo deve ser um número maior ou igual a ${min}.`);
//         rl.close();
//         return;
//     }

//     // Define tamanho aleatório entre 4 e o máximo
//     const tamanho = Math.floor(Math.random() * (max - min + 1)) + min;

//     // Caracteres permitidos
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

//     let senha = "";
//     for (let i = 0; i < tamanho; i++) {
//         const randomIndex = Math.floor(Math.random() * chars.length);
//         senha += chars[randomIndex];
//     }

//     console.log(`✅ Sua senha aleatória (entre 4 e ${max} caracteres): ${senha}`);

//     rl.close();
// });

//========================================================================Advinhação=============================================================================================


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout 
// });

// const numeroSecreto = Math.floor(Math.random() * 10.) + 1;

// console.log("Jogo de Advinhação!");
// console.log("Tente advinhar o número de 1 a 10.");

//  perguntar() {
//     rl.question("Digite sue palpite: ", (resposta) => {
//         const palpite = Number(resposta);

//         if (isNaN(palpite)) {
//             console.log("Digite apenas números!");
//             return perguntar();
//         }

//         if (palpite === numeroSecreto) {
//             console.log("Parabéns! Vôce acertou!");
//             rl.close();
//         } else {
//             console.log("Errado! Tente novamente...");
//             perguntar();
//         }
//     });

// }
// perguntar();
//======================================================================Aprovados atv1================================================================================


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let aprovados = [];
// let contador = 0;

//  pedirDados() {
//     rl.question("Digite o nome do aluno: ", (nome) => {
//         rl.question("Digite a nota do aluno: ", (nota) => {

//             nota = Number(nota);

//             if (nota >= 7) {
//                 aprovados.push(nome);
//             }

//             contador++;

//             if (contador < 3) {
//                 pedirDados(); // continua pedindo
//             } else {
//                 console.log("\n✅ Alunos aprovados:");
//                 console.log(aprovados);
//                 rl.close();
//             }
//         });
//     });
// }

// pedirDados();

//===========================================================ATV2=======================================================================

// let fila = [];

// fila.push("Pessoa 1");
// console.log("Entrou: Pessoa 1");

// if (fila.length > 2) {
//     fila.shift();
//     console.log("Atendimento realizado, próximo da fila entrou.");
// }

// fila.push("Pessoa 2");
// console.log("Entrou: Pessoa 2");

// if (fila.length > 2) {
//     fila.shift();
//     console.log("Atendimento realizado, próximo da fila entrou.");
// }

// fila.push("Pessoa 3");
// console.log("Entrou: Pessoa 3");

// if (fila.length > 2) {
//     fila.shift();
//     console.log("Atendimento realizado, próximo da fila entrou.");
// }

// console.log("\nFila atual:", fila);

//===========================================================================ATV3======================================================================

// let carrinho = [`Arroz`, `Feijão`];

// carrinho.unshift(`Macarrão`);

// carrinho.pop();

// if (carrinho.length >= 2) {
//     console.log(`Carrinho cheio.`);
// }

// console.log("Carrinho atual:", carrinho);

//===================================================================ATV4========================================================================

// let materias = ['Português', 'Matemática', 'História'];

// materias.splice(2, 1, 'Geografia');

// if (materias.includes('Geografia')) {
//     console.log('Matéria substituída com sucesso!');
// } else {
//     console.log('Erro ao atualizar a lista.');
// }

// console.log("Lista atual:", materias);

//=======================================================================================ATV5==============================================

// let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

// if (frutas.includes('Manga')) {
//     console.log('Temos Manga no estoque!');
// } else {
//     console.log('Manga não disponível.');
// }

// console.log("Estoque atual:", frutas);

//=================================================================================================ATV6===================================

// let espera = ['Carlos', 'Ana'];

// espera.push('João');

// if (espera.length > 3) {
//     espera.shift ();
//     console.log('Primeiro da fila atendido');
// } else if (espera.length === 3) {
//     console.log('Fila completa.');
// } else {
//     console.log('Ainda há vagas na fila.');
// }

// console.log("FIla atual:", espera);

//=========================================================================================================ATV7=======================================

// let numeros = [1, 2, 3, 4, 5, 6];
// let pares = [];
// let impares = []

// for (let numero of numeros) {
//     if (numero % 2 === 0) {
//         pares.push(numero);
//     } else {
//         impares.push(numero);
//     }
// }

// console.log("Números pares:", pares);
// console.log("Números impares:", impares);

//==========================================================ATV8==============================================

// let produtos = ['Arroz', 'Feijão', 'Leite', 'Açúcar'];

// produtos.splice(2, 1);

// if (produtos.length > 2) {
//     console.log('Estoque suficiente');
// } else {
//     console.log('Estoque baixo!');
// }

// console.log("Produtos atuais:", produtos);

//========================================================================ATV9========================================

// let convidados = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

// let convidadosVIP = convidados.slice(0, 3);

// if (convidados.length > 3) {
//     console.log('Apenas os três primeiros foram convidados para o jantar VIP.');
// } else {
//     console.log('Todos foram convidados.');
// }

// console.log("Convidados VIP:", convidadosVIP);

//=================================================================ATV10==========================================

// let participantes = [];

// participantes.push("Ana");
// participantes.push("Bruno");
// participantes.push("Carlos");
// participantes.push("Diana");

// if (participantes.length > 3) {
//     participantes.pop(); // remove o último (Diana)
//     console.log('Número máximo de participantes atingido. O último foi removido.');
// } else {
//     console.log('Ainda há vagas disponíveis.');
// }

// console.log("Lista atual de participantes:", participantes);
