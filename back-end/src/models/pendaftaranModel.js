const dbPool = require("../config/database");

const findPendaftaranById = async (id) => {
  const query = `SELECT * FROM Pendaftaran WHERE id = ${id}`;
  return dbPool.execute(query);
};

const findAllPendaftaran = async () => {
  const query = "SELECT * FROM Pendaftaran";
  return dbPool.execute(query);
};

const insertPendaftaran = async (data) => {
  const query = `INSERT INTO Pendaftaran (id, start_at, end_at, status, created_at, updated_at)
                  VALUES ('${data.id}', '${data.start_at}', '${data.end_at}', '${data.status}', now(), now())`;

  return dbPool.execute(query);
};

const updatePendaftaran = async (id, data) => {
  const query = `UPDATE Pendaftaran 
                 SET start_at = '${data.start_at}',
                     end_at = '${data.end_at}', 
                     status = '${data.status}', 
                     updated_at = now() 
                  WHERE id = ${id}`;

  return dbPool.execute(query);
};

const deletePendaftaran = async (id) => {
  const query = `DELETE FROM Pendaftaran WHERE id = '${id}'`;
  return dbPool.execute(query);
};

module.exports = {
  findPendaftaranById,
  findAllPendaftaran,
  insertPendaftaran,
  updatePendaftaran,
  deletePendaftaran,
};
