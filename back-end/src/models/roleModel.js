const dbPool = require("../config/database");

const findAllRoles = async () => {
  const query = "SELECT * FROM role";
  return dbPool.execute(query);
};

const findRoleById = async (id) => {
  const query = "SELECT * FROM role WHERE id = ?";
  return dbPool.execute(query, [id]);
};

const insertRole = async (nama_role) => {
  const query = "INSERT INTO role (nama_role) VALUES (?)";
  return dbPool.execute(query, [nama_role]);
};

const updateRole = async (id, nama_role) => {
  const query = "UPDATE role SET nama_role = ? WHERE id = ?";
  return dbPool.execute(query, [nama_role, id]);
};

const deleteRole = async (id) => {
  const query = "DELETE FROM role WHERE id = ?";
  return dbPool.execute(query, [id]);
};

module.exports = {
  findAllRoles,
  findRoleById,
  insertRole,
  updateRole,
  deleteRole,
};
