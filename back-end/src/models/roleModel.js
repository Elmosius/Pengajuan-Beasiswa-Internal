const dbPool = require("../config/database");

const findAllRoles = async () => {
  const query = "SELECT * FROM role";
  return dbPool.execute(query);
};

const findRoleById = async (id) => {
  const query = `SELECT * FROM role WHERE id = ${id}`;
  return dbPool.execute(query);
};

const insertRole = async (nama_role) => {
  const query = `INSERT INTO role (nama_role) VALUES ('${nama_role}')`;
  return dbPool.execute(query);
};

const updateRole = async (id, nama_role) => {
  const query = `UPDATE role SET nama_role = '${nama_role}' WHERE id = ${id}`;
  return dbPool.execute(query);
};

const deleteRole = async (id) => {
  const query = `DELETE FROM role WHERE id = ${id}`;
  return dbPool.execute(query);
};

module.exports = {
  findAllRoles,
  findRoleById,
  insertRole,
  updateRole,
  deleteRole,
};
