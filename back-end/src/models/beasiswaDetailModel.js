const dbPool = require("../config/database");

const findAllBeasiswaDetail = async () => {
  const query = `SELECT * FROM pendaftaran_detail`;
  return dbPool.execute(query);
};

const findBeasiswaDetailById = async (id) => {
  const query = `
    SELECT pd.*, jd.nama as jenis_dokumen, jdhpd.path
    FROM pendaftaran_detail pd
    LEFT JOIN jenis_doc_has_pendaftaran_detail jdhpd ON pd.id = jdhpd.pendaftaran_detail_id
    LEFT JOIN jenis_doc jd ON jdhpd.jenis_doc_id = jd.id
    WHERE pd.id = ?
  `;
  return dbPool.execute(query, [id]);
};

const insertBeasiswaDetailWithDokumen = async (data) => {
  const connection = await dbPool.getConnection();
  try {
    await connection.beginTransaction();

    const queryPendaftaranDetail = `
      INSERT INTO pendaftaran_detail (pendaftaran_id, user_id, beasiswa_id, ipk, poin_portofolio, status_1, status_2, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, now(), now());
    `;
    const [result] = await connection.execute(queryPendaftaranDetail, [data.pendaftaran_id, data.user_id, data.beasiswa_id, data.ipk, data.poin_portofolio, data.status_1, data.status_2]);

    const pendaftaran_detail_id = result.insertId;

    const queryJenisDocPendaftaranDetail = `
      INSERT INTO jenis_doc_has_pendaftaran_detail (jenis_doc_id, pendaftaran_detail_id, path)
      VALUES (?, ?, ?);
    `;
    for (const dokumen of data.dokumen) {
      await connection.execute(queryJenisDocPendaftaranDetail, [dokumen.jenis_doc_id, pendaftaran_detail_id, dokumen.path]);
    }

    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = {
  findAllBeasiswaDetail,
  findBeasiswaDetailById,
  insertBeasiswaDetailWithDokumen,
};
