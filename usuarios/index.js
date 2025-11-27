const readline = require("readline-sync");
const Storage = require("./storage");
const UserService = require("./userService");
const UserError = require("./errors");

Storage.reset();

function pause() {
  console.log("\nPressione ENTER para continuar...");
  readline.question();
}

function menu() {
  console.log("====================================");
  console.log("     GERENCIAMENTO DE USUÁRIOS     ");
  console.log("====================================");
  console.log("1 - Cadastrar usuário");
  console.log("2 - Listar usuários");
  console.log("3 - Atualizar usuário");
  console.log("4 - Adicionar telefone");
  console.log("5 - Remover telefone");
  console.log("6 - Remover usuário");
  console.log("0 - Sair");
  console.log("====================================");
  return readline.question("Escolha uma opção: ");
}

function cadastrarUsuario() {
  const email = readline.question("E-mail: ");
  const nome = readline.question("Nome: ");

  const telefones = [];
  while (true) {
    const tel = readline.question("Telefone (ou ENTER para finalizar): ");
    if (!tel.trim()) break;
    telefones.push(tel);
  }

  try {
    const novo = UserService.createUser({ email, nome, telefones });
    console.log("Usuário cadastrado:", novo);
  } catch (e) {
    console.log("Erro:", e.message);
  }

  pause();
}

function listarUsuarios() {
  const lista = UserService.listUsers();
  if (lista.length === 0) {
    console.log("Nenhum usuário cadastrado.");
  } else {
    lista.forEach(user => {
      console.log(
        `ID: ${user.id} | Nome: ${user.nome} | E-mail: ${user.email}`
      );
      console.log("Telefones:", user.telefones);
      console.log("----------------------------------");
    });
  }
  pause();
}

function atualizarUsuario() {
  const id = parseInt(readline.question("ID do usuário: "));

  const email = readline.question("Novo e-mail (ou ENTER para não alterar): ");
  const nome = readline.question("Novo nome (ou ENTER para não alterar): ");

  const patch = {};

  if (email.trim()) patch.email = email;
  if (nome.trim()) patch.nome = nome;

  try {
    const atualizado = UserService.updateUser(id, patch);
    console.log("Usuário atualizado:", atualizado);
  } catch (e) {
    console.log("Erro:", e.message);
  }

  pause();
}

function adicionarTelefone() {
  const id = parseInt(readline.question("ID do usuário: "));
  const telefone = readline.question("Telefone: ");

  try {
    const atualizado = UserService.updateUser(id, { addTelefone: telefone });
    console.log("Telefone adicionado:", atualizado);
  } catch (e) {
    console.log("Erro:", e.message);
  }

  pause();
}

function removerTelefone() {
  const id = parseInt(readline.question("ID do usuário: "));
  const index = parseInt(readline.question("Índice do telefone: "));

  try {
    const atualizado = UserService.updateUser(id, { removeTelefoneIndex: index });
    console.log("Telefone removido:", atualizado);
  } catch (e) {
    console.log("Erro:", e.message);
  }

  pause();
}

async function removerUsuario() {
  const id = parseInt(readline.question("ID do usuário: "));
  const conf = readline.question("Confirmar remoção? (s/n): ");

  const result = await UserService.removeUser(id, () => conf.toLowerCase() === "s");

  console.log(result.message);
  pause();
}

async function main() {
  while (true) {
    const op = menu();

    switch (op) {
      case "1":
        cadastrarUsuario();
        break;
      case "2":
        listarUsuarios();
        break;
      case "3":
        atualizarUsuario();
        break;
      case "4":
        adicionarTelefone();
        break;
      case "5":
        removerTelefone();
        break;
      case "6":
        await removerUsuario();
        break;
      case "0":
        console.log("Saindo...");
        process.exit(0);
      default:
        console.log("Opção inválida.");
        pause();
    }
  }
}

main();
