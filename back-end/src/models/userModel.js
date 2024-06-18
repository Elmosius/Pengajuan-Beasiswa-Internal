const bcrypt = require("bcryptjs");
const dbPool = require("../config/database");

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
    WHERE user.id = ${id};
  `;
  return dbPool.execute(query);
};

const insertUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 8);

  const query = `INSERT INTO user (id, role_id, program_studi_id, nama, email, password, status, created_at, updated_at)
                  VALUES ('${data.id}', '${data.role_id}', '${data.program_studi_id}', '${data.nama}', '${data.email}',
                  '${hashedPassword}', '${data.status}', now(), now())`;

  return dbPool.execute(query);
};

const updateUser = async (id, data) => {
  const hashedPassword = await bcrypt.hash(data.password, 8);

  const query = `UPDATE user 
                 SET role_id = '${data.role_id}', program_studi_id = '${data.program_studi_id}', 
                 nama = '${data.nama}', email = '${data.email}', password = '${hashedPassword}',
                 status = '${data.status}', updated_at = now() 
                 WHERE id = ${id}`;

  return dbPool.execute(query);
};

const deleteUser = async (id) => {
  const query = `DELETE FROM user WHERE id = '${id}'`;
  return dbPool.execute(query);
};

module.exports = {
  findAllUser,
  findUserById,
  insertUser,
  updateUser,
  deleteUser,
};
