let users = [];
let nextId = 1;

function reset() {
  users = [];
  nextId = 1;
}

function getAll() {
  return users.map(u => ({
    ...u,
    telefones: [...u.telefones],
  }));
}

function findById(id) {
  return users.find(u => u.id === id) || null;
}

function findByEmail(email) {
  return users.find(u => u.email === email) || null;
}

function add(user) {
  const novo = {
    ...user,
    id: nextId++,
  };
  users.push(novo);
  return { ...novo, telefones: [...novo.telefones] };
}

function update(id, patch) {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;

  users[index] = { ...users[index], ...patch };
  return { ...users[index], telefones: [...users[index].telefones] };
}

function remove(id) {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

module.exports = {
  reset,
  getAll,
  findById,
  findByEmail,
  add,
  update,
  remove,
};
