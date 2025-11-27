const Storage = require("./storage");
const Validators = require("./validators");
const UserError = require("./errors");

function createUser({ email, nome, telefones = [] }) {
  if (!Validators.isNonEmptyString(nome)) {
    throw new UserError("Nome inválido.");
  }

  if (!Validators.isEmail(email)) {
    throw new UserError("E-mail inválido.");
  }

  if (!Validators.isPhoneList(telefones)) {
    throw new UserError("Lista de telefones inválida.");
  }

  const existente = Storage.findByEmail(email);
  if (existente) {
    throw new UserError("Já existe um usuário cadastrado com esse e-mail.");
  }

  return Storage.add({
    email,
    nome: nome.trim(),
    telefones: telefones.map(t => t.trim()),
  });
}

function listUsers() {
  return Storage.getAll();
}

function updateUser(id, {
  email,
  nome,
  addTelefone,
  removeTelefoneIndex,
} = {}) {
  const user = Storage.findById(id);
  if (!user) throw new UserError("Usuário não encontrado.");

  if (email !== undefined) {
    if (!Validators.isEmail(email)) {
      throw new UserError("E-mail inválido.");
    }
    const existe = Storage.findByEmail(email);
    if (existe && existe.id !== id) {
      throw new UserError("E-mail já está em uso.");
    }
    user.email = email;
  }

  if (nome !== undefined) {
    if (!Validators.isNonEmptyString(nome)) {
      throw new UserError("Nome inválido.");
    }
    user.nome = nome.trim();
  }

  if (addTelefone !== undefined) {
    if (!Validators.isNonEmptyString(addTelefone)) {
      throw new UserError("Telefone inválido.");
    }
    user.telefones.push(addTelefone.trim());
  }

  if (removeTelefoneIndex !== undefined) {
    if (!Number.isInteger(removeTelefoneIndex)) {
      throw new UserError("Número inválido.");
    }
    if (
      removeTelefoneIndex < 0 ||
      removeTelefoneIndex >= user.telefones.length
    ) {
      throw new UserError("Você deve ter mais de um número de telefone.");
    }
    user.telefones.splice(removeTelefoneIndex, 1);
  }

  return Storage.update(id, user);
}

async function removeUser(id, confirmFn) {
  const user = Storage.findById(id);
  if (!user) throw new UserError("Usuário não encontrado.");

  if (typeof confirmFn !== "function") {
    throw new UserError("Função de confirmação não fornecida.");
  }

  const result = confirmFn({ ...user });
  const confirmed =
    result instanceof Promise ? await result : result;

  if (!confirmed) {
    return {
      removed: false,
      message: "Remoção cancelada.",
    };
  }

  const ok = Storage.remove(id);
  if (!ok) throw new UserError("Falha ao remover usuário.");

  return {
    removed: true,
    message: "Usuário removido com sucesso.",
  };
}

module.exports = {
  createUser,
  listUsers,
  updateUser,
  removeUser,
};
