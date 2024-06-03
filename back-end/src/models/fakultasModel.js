const dbPool = require("../config/database");

const findAllFakultas = async () => {
  const query = "SELECT * FROM fakultas";
  return dbPool.execute(query);
};

module.exports = {
  findAllFakultas,
};
