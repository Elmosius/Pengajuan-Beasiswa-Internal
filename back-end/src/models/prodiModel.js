const dbPool = require("../config/database");

const findAllProdi = async () => {
  const query = "SELECT * FROM program_studi";
  return dbPool.execute(query);
};

const findProdiById = async (id) => {
  const query = `SELECT * FROM program_studi WHERE id = ${id}`;
  return dbPool.execute(query);
};

const insertProdi = async (data) => {
  const query = `INSERT INTO Fakultas (id, nama_fakultas, created_at, updated_at)
                  VALUES ('${data.id}', '${data.nama_fakultas}', now(), now())`;

  return dbPool.execute(query);
};

const updateProdi = async (id, data) => {
  const query = `UPDATE program_studi 
                 SET nama_program_studi = '${data.nama_program_studi}', fakultas_id = '${data.fakultas_id}', updated_at = now() 
                  WHERE id = ${id}`;

  return dbPool.execute(query);
};

const deleteProdi = async (id) => {
  const query = `DELETE FROM program_studi WHERE id = '${id}'`;
  return dbPool.execute(query);
};
module.exports = {
  findAllProdi,
  findProdiById,
  insertProdi,
  updateProdi,
  deleteProdi,
};
