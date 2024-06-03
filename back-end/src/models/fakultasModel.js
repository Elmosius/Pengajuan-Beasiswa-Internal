const dbPool = require("../config/database");

const findFakultasById = async (id) => {
  const query = `SELECT * FROM Fakultas WHERE id = ${id}`;
  return dbPool.execute(query);
};

const findAllFakultas = async () => {
  const query = "SELECT * FROM Fakultas";
  return dbPool.execute(query);
};

const insertFakultas = async (data) => {
  const query = `INSERT INTO Fakultas (id, nama_fakultas, created_at, updated_at)
                  VALUES ('${data.id}', '${data.nama_fakultas}', now(), now())`;

  return dbPool.execute(query);
};

module.exports = {
  findFakultasById,
  findAllFakultas,
  insertFakultas,
};
