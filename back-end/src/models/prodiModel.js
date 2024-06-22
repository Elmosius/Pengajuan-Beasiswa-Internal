const dbPool = require("../config/database");

const findAllProdi = async () => {
  const query = "SELECT * FROM program_studi";
  return dbPool.execute(query);
};

const findProdiById = async (id) => {
  const query = "SELECT * FROM program_studi WHERE id = ?";
  return dbPool.execute(query, [id]);
};

const insertProdi = async (data) => {
  const query = "INSERT INTO program_studi (id, nama_program_studi, fakultas_id, created_at, updated_at) VALUES (?, ?, ?, now(), now())";
  return dbPool.execute(query, [data.id, data.nama_program_studi, data.fakultas_id]);
};

const updateProdi = async (id, data) => {
  const query = "UPDATE program_studi SET nama_program_studi = ?, fakultas_id = ?, updated_at = now() WHERE id = ?";
  return dbPool.execute(query, [data.nama_program_studi, data.fakultas_id, id]);
};

const deleteProdi = async (id) => {
  const query = "DELETE FROM program_studi WHERE id = ?";
  return dbPool.execute(query, [id]);
};

module.exports = {
  findAllProdi,
  findProdiById,
  insertProdi,
  updateProdi,
  deleteProdi,
};
