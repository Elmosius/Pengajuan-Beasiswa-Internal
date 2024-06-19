const dbPool = require("../config/database");

const findPendaftaranById = async (id) => {
  const query = "SELECT * FROM Pendaftaran WHERE id = ?";
  return dbPool.execute(query, [id]);
};

const findAllPendaftaran = async () => {
  const query = "SELECT * FROM Pendaftaran";
  return dbPool.execute(query);
};

const insertPendaftaran = async (data) => {
  const query = "INSERT INTO Pendaftaran (id, periode, start_at, end_at, status, created_at, updated_at) VALUES (?, ?, ?, ?, now(), now())";
  return dbPool.execute(query, [data.id, data.periode, data.start_at, data.end_at, data.status]);
};

const updatePendaftaran = async (id, data) => {
  const query = "UPDATE Pendaftaran SET data.periode = ?, start_at = ?, end_at = ?, status = ?, updated_at = now() WHERE id = ?";
  return dbPool.execute(query, [data.periode, data.start_at, data.end_at, data.status, id]);
};

const deletePendaftaran = async (id) => {
  const query = "DELETE FROM Pendaftaran WHERE id = ?";
  return dbPool.execute(query, [id]);
};

module.exports = {
  findPendaftaranById,
  findAllPendaftaran,
  insertPendaftaran,
  updatePendaftaran,
  deletePendaftaran,
};
