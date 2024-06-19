const bcrypt = require("bcryptjs");
const dbPool = require("../config/database");

const findUserByEmail = async (email) => {
  const query = `
    SELECT user.*, role.nama_role, program_studi.nama_program_studi 
    FROM user 
    JOIN role ON user.role_id = role.id
    JOIN program_studi ON user.program_studi_id = program_studi.id
    WHERE user.email = ?;
  `;
  return dbPool.execute(query, [email]);
};

const findAllUser = async () => {
  const query = `
    SELECT user.*, role.nama_role, program_studi.nama_program_studi 
    FROM user 
    JOIN role ON user.role_id = role.id
    JOIN program_studi ON user.program_studi_id = program_studi.id;
  `;
  return dbPool.execute(query);
};

const findUserById = async (id) => {
  const query = `
    SELECT user.*, role.nama_role, program_studi.nama_program_studi 
    FROM user 
    JOIN role ON user.role_id = role.id
    JOIN program_studi ON user.program_studi_id = program_studi.id
    WHERE user.id = ?;
  `;
  return dbPool.execute(query, [id]);
};

const insertUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 8);
  const query = `
    INSERT INTO user (id, role_id, program_studi_id, nama, email, password, status, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, now(), now());
  `;
  return dbPool.execute(query, [data.id, data.role_id, data.program_studi_id, data.nama, data.email, hashedPassword, data.status]);
};

const updateUser = async (id, data) => {
  const updates = [];
  const params = [];

  if (data.role_id) {
    updates.push(`role_id = ?`);
    params.push(data.role_id);
  }
  if (data.program_studi_id) {
    updates.push(`program_studi_id = ?`);
    params.push(data.program_studi_id);
  }
  if (data.nama) {
    updates.push(`nama = ?`);
    params.push(data.nama);
  }
  if (data.email) {
    updates.push(`email = ?`);
    params.push(data.email);
  }
  if (data.status) {
    updates.push(`status = ?`);
    params.push(data.status);
  }
  if (data.password) {
    const hashedPassword = await bcrypt.hash(data.password, 8);
    updates.push(`password = ?`);
    params.push(hashedPassword);
  }

  if (updates.length === 0) {
    throw new Error("No valid fields provided to update");
  }

  updates.push(`updated_at = now()`);
  const query = `UPDATE user SET ${updates.join(", ")} WHERE id = ?`;
  params.push(id);

  return dbPool.execute(query, params);
};

const deleteUser = async (id) => {
  const query = `DELETE FROM user WHERE id = ?`;
  return dbPool.execute(query, [id]);
};

module.exports = {
  findAllUser,
  findUserById,
  insertUser,
  updateUser,
  deleteUser,
  findUserByEmail,
};
