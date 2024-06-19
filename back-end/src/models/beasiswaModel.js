const dbPool = require("../config/database");

const findBeasiswaById = async (id) => {
  const query = "SELECT * FROM Beasiswa WHERE id = ?";
  return dbPool.execute(query, [id]);
};

const findAllBeasiswa = async () => {
  const query = "SELECT * FROM Beasiswa";
  return dbPool.execute(query);
};

const insertBeasiswa = async (data) => {
  const query = "INSERT INTO Beasiswa (id, nama_beasiswa, deskripsi, created_at, updated_at) VALUES (?, ?, ?, ?, now(), now())";
  return dbPool.execute(query, [data.id, data.nama_beasiswa, data.deskripsi]);
};

const updateBeasiswa = async (id, data) => {
  const query = "UPDATE Beasiswa SET nama_beasiswa = ?, deskripsi = ?, updated_at = now() WHERE id = ?";
  return dbPool.execute(query, [data.nama_beasiswa, data.deskripsi]);
};

const deleteBeasiswa = async (id) => {
  const query = "DELETE FROM Beasiswa WHERE id = ?";
  return dbPool.execute(query, [id]);
};

module.exports = {
  findBeasiswaById,
  findAllBeasiswa,
  insertBeasiswa,
  updateBeasiswa,
  deleteBeasiswa,
};
