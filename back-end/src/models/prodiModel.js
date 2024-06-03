const dbPool = require("../config/database");

const findAllProdi = async () => {
  const query = "SELECT * FROM program_studi";
  return dbPool.execute(query);
};

module.exports = {
  findAllProdi,
};
