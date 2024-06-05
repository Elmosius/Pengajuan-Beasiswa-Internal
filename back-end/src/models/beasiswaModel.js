const dbPool = require("../config/database");

const findBeasiswaById = async (id) => {
  const query = `SELECT * FROM Beasiswa WHERE id = ${id}`;
  return dbPool.execute(query);
};

const findAllBeasiswa = async () => {
  const query = "SELECT * FROM Beasiswa";
  return dbPool.execute(query);
};

const insertBeasiswa = async (data) => {
  const query = `INSERT INTO Beasiswa (id, nama_beasiswa, deskripsi, periode, created_at, updated_at)
                  VALUES ('${data.id}', '${data.nama_beasiswa}', '${data.deskripsi}', '${data.periode}', now(), now())`;

  return dbPool.execute(query);
};

const updateBeasiswa = async (id, data) => {
  const query = `UPDATE Beasiswa 
                 SET nama_beasiswa = '${data.nama_beasiswa}',
                     deskripsi = '${data.deskripsi}', 
                     periode = '${data.periode}', 
                     updated_at = now() 
                  WHERE id = ${id}`;

  return dbPool.execute(query);
};

const deleteBeasiswa = async (id) => {
  const query = `DELETE FROM Beasiswa WHERE id = '${id}'`;
  return dbPool.execute(query);
};

module.exports = {
  findBeasiswaById,
  findAllBeasiswa,
  insertBeasiswa,
  updateBeasiswa,
  deleteBeasiswa,
};
