const dbPool = require("../config/database");

const findPendaftaranById = async (id) => {
  const query = `
    SELECT pendaftaran.*, beasiswa.id as beasiswa_id, beasiswa.nama_beasiswa, beasiswa.deskripsi 
    FROM pendaftaran 
    LEFT JOIN pendaftaran_has_beasiswa ON pendaftaran.id = pendaftaran_has_beasiswa.pendaftaran_id 
    LEFT JOIN beasiswa ON pendaftaran_has_beasiswa.beasiswa_id = beasiswa.id 
    WHERE pendaftaran.id = ?`;
  return dbPool.execute(query, [id]);
};

const findAllPendaftaran = async () => {
  const query = `
    SELECT pendaftaran.*, beasiswa.id as beasiswa_id, beasiswa.nama_beasiswa, beasiswa.deskripsi 
    FROM pendaftaran 
    LEFT JOIN pendaftaran_has_beasiswa ON pendaftaran.id = pendaftaran_has_beasiswa.pendaftaran_id 
    LEFT JOIN beasiswa ON pendaftaran_has_beasiswa.beasiswa_id = beasiswa.id`;
  return dbPool.execute(query);
};

const insertPendaftaran = async (data) => {
  const connection = await dbPool.getConnection();
  try {
    await connection.beginTransaction();

    const query1 = "INSERT INTO pendaftaran (periode, start_at, end_at, status, created_at, updated_at) VALUES (?, ?, ?, ?, now(), now())";
    const [result] = await connection.execute(query1, [data.periode, data.start_at, data.end_at, data.status]);
    const pendaftaranId = result.insertId;

    const query2 = "INSERT INTO pendaftaran_has_beasiswa (pendaftaran_id, beasiswa_id) VALUES (?, ?)";
    await connection.execute(query2, [pendaftaranId, data.beasiswa_id]);

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

const updatePendaftaran = async (id, data) => {
  const connection = await dbPool.getConnection();
  try {
    await connection.beginTransaction();

    const updates = [];
    const params = [];

    if (data.periode) {
      updates.push(`periode = ?`);
      params.push(data.periode);
    }
    if (data.start_at) {
      updates.push(`start_at = ?`);
      params.push(data.start_at);
    }
    if (data.end_at) {
      updates.push(`end_at = ?`);
      params.push(data.end_at);
    }
    if (data.status) {
      updates.push(`status = ?`);
      params.push(data.status);
    }

    if (updates.length > 0) {
      const query1 = `UPDATE pendaftaran SET ${updates.join(", ")}, updated_at = now() WHERE id = ?`;
      params.push(id);
      await connection.execute(query1, params);
    }

    if (data.beasiswa_id) {
      const query2 = `DELETE FROM pendaftaran_has_beasiswa WHERE pendaftaran_id = ?`;
      await connection.execute(query2, [id]);

      const query3 = `INSERT INTO pendaftaran_has_beasiswa (pendaftaran_id, beasiswa_id) VALUES (?, ?)`;
      await connection.execute(query3, [id, data.beasiswa_id]);
    }

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

const deletePendaftaran = async (id) => {
  const connection = await dbPool.getConnection();
  try {
    await connection.beginTransaction();

    const query1 = `DELETE FROM pendaftaran_has_beasiswa WHERE pendaftaran_id = ?`;
    await connection.execute(query1, [id]);

    const query2 = `DELETE FROM pendaftaran WHERE id = ?`;
    await connection.execute(query2, [id]);

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = {
  findPendaftaranById,
  findAllPendaftaran,
  insertPendaftaran,
  updatePendaftaran,
  deletePendaftaran,
};
