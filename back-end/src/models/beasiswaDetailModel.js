const dbPool = require("../config/database");

const groupBeasiswaDetails = (rows) => {
  return rows.reduce((acc, row) => {
    const {
      pendaftaran_detail_id,
      pendaftaran_id,
      user_id,
      beasiswa_id,
      ipk,
      poin_portofolio,
      status_1,
      status_2,
      created_at,
      updated_at,
      periode,
      start_at,
      end_at,
      nama,
      email,
      nama_program_studi,
      nama_fakultas,
      nama_beasiswa,
      jenis_doc_id,
      jenis_dokumen,
      path,
    } = row;

    const detail = acc.find((d) => d.id === pendaftaran_detail_id);

    if (!detail) {
      acc.push({
        id: pendaftaran_detail_id,
        pendaftaran_id,
        user_id,
        beasiswa_id,
        ipk,
        poin_portofolio,
        status_1,
        status_2,
        created_at,
        updated_at,
        periode,
        start_at,
        end_at,
        nama,
        email,
        nama_program_studi,
        nama_fakultas,
        nama_beasiswa,
        dokumen: jenis_doc_id ? [{ jenis_doc_id, jenis_dokumen, path }] : [],
      });
    } else {
      detail.dokumen.push({ jenis_doc_id, jenis_dokumen, path });
    }

    return acc;
  }, []);
};

const findAllBeasiswaDetail = async () => {
  const query = `
    SELECT pd.id AS pendaftaran_detail_id, pd.pendaftaran_id, pd.user_id, pd.beasiswa_id, pd.ipk, pd.poin_portofolio, pd.status_1, pd.status_2, pd.created_at, pd.updated_at,
      p.periode, u.nama, u.email, ps.nama_program_studi, f.nama_fakultas, b.nama_beasiswa, p.start_at, p.end_at,
      jd.id AS jenis_doc_id, jd.nama AS jenis_dokumen, jdhpd.path
    FROM pendaftaran_detail pd
    LEFT JOIN pendaftaran p ON pd.pendaftaran_id = p.id
    LEFT JOIN user u ON pd.user_id = u.id
    LEFT JOIN program_studi ps ON u.program_studi_id = ps.id
    LEFT JOIN fakultas f ON ps.fakultas_id = f.id
    LEFT JOIN beasiswa b ON pd.beasiswa_id = b.id
    LEFT JOIN jenis_doc_has_pendaftaran_detail jdhpd ON pd.id = jdhpd.pendaftaran_detail_id
    LEFT JOIN jenis_doc jd ON jdhpd.jenis_doc_id = jd.id
  `;
  const [rows] = await dbPool.execute(query);
  return groupBeasiswaDetails(rows);
};

const findBeasiswaDetailById = async (id) => {
  const query = `
    SELECT pd.id AS pendaftaran_detail_id, pd.pendaftaran_id, pd.user_id, pd.beasiswa_id, pd.ipk, pd.poin_portofolio, pd.status_1, pd.status_2, pd.created_at, pd.updated_at,
      p.periode, u.nama, u.email, ps.nama_program_studi, f.nama_fakultas, b.nama_beasiswa,p.start_at, p.end_at,
      jd.id AS jenis_doc_id, jd.nama AS jenis_dokumen, jdhpd.path
    FROM pendaftaran_detail pd
    LEFT JOIN pendaftaran p ON pd.pendaftaran_id = p.id
    LEFT JOIN user u ON pd.user_id = u.id
    LEFT JOIN program_studi ps ON u.program_studi_id = ps.id
    LEFT JOIN fakultas f ON ps.fakultas_id = f.id
    LEFT JOIN beasiswa b ON pd.beasiswa_id = b.id
    LEFT JOIN jenis_doc_has_pendaftaran_detail jdhpd ON pd.id = jdhpd.pendaftaran_detail_id
    LEFT JOIN jenis_doc jd ON jdhpd.jenis_doc_id = jd.id
    WHERE pd.id = ?
  `;
  const [rows] = await dbPool.execute(query, [id]);
  return groupBeasiswaDetails(rows);
};

const findBeasiswaDetailByUserId = async (userId) => {
  const query = `
    SELECT pd.id AS pendaftaran_detail_id, pd.pendaftaran_id, pd.user_id, pd.beasiswa_id, pd.ipk, pd.poin_portofolio, pd.status_1, pd.status_2, pd.created_at, pd.updated_at,
      p.periode, u.nama, u.email, ps.nama_program_studi, f.nama_fakultas, b.nama_beasiswa,p.start_at, p.end_at,
      jd.id AS jenis_doc_id, jd.nama AS jenis_dokumen, jdhpd.path
    FROM pendaftaran_detail pd
    LEFT JOIN pendaftaran p ON pd.pendaftaran_id = p.id
    LEFT JOIN user u ON pd.user_id = u.id
    LEFT JOIN program_studi ps ON u.program_studi_id = ps.id
    LEFT JOIN fakultas f ON ps.fakultas_id = f.id
    LEFT JOIN beasiswa b ON pd.beasiswa_id = b.id
    LEFT JOIN jenis_doc_has_pendaftaran_detail jdhpd ON pd.id = jdhpd.pendaftaran_detail_id
    LEFT JOIN jenis_doc jd ON jdhpd.jenis_doc_id = jd.id
    WHERE pd.user_id = ?
  `;
  const [rows] = await dbPool.execute(query, [userId]);
  const groupedDetails = groupBeasiswaDetails(rows);

  return groupedDetails;
};

const findBeasiswaDetailByPendaftaranId = async (pendaftaranId) => {
  const query = `
    SELECT pd.id,pd.user_id, u.nama, f.nama_fakultas, ps.nama_program_studi, pd.created_at, pd.status_1, pd.status_2
    FROM pendaftaran_detail pd
    LEFT JOIN pendaftaran p ON pd.pendaftaran_id = p.id
    LEFT JOIN user u ON pd.user_id = u.id
    LEFT JOIN program_studi ps ON u.program_studi_id = ps.id
    LEFT JOIN fakultas f ON ps.fakultas_id = f.id
    WHERE pd.pendaftaran_id = ?
  `;
  const [rows] = await dbPool.execute(query, [pendaftaranId]);
  return rows;
};

const findBeasiswaDetailByPendaftaranUserId = async (pendaftaranDetailId, userId) => {
  const query = `
    SELECT pd.id AS pendaftaran_detail_id, pd.pendaftaran_id, pd.user_id, pd.beasiswa_id, pd.ipk, pd.poin_portofolio, pd.status_1, pd.status_2, pd.created_at, pd.updated_at,
      p.periode, u.nama, u.email, ps.nama_program_studi, f.nama_fakultas, b.nama_beasiswa, p.start_at, p.end_at,
      jd.id AS jenis_doc_id, jd.nama AS jenis_dokumen, jdhpd.path
    FROM pendaftaran_detail pd
    LEFT JOIN pendaftaran p ON pd.pendaftaran_id = p.id
    LEFT JOIN user u ON pd.user_id = u.id
    LEFT JOIN program_studi ps ON u.program_studi_id = ps.id
    LEFT JOIN fakultas f ON ps.fakultas_id = f.id
    LEFT JOIN beasiswa b ON pd.beasiswa_id = b.id
    LEFT JOIN jenis_doc_has_pendaftaran_detail jdhpd ON pd.id = jdhpd.pendaftaran_detail_id
    LEFT JOIN jenis_doc jd ON jdhpd.jenis_doc_id = jd.id
    WHERE pd.id = ? AND pd.user_id = ?
  `;
  const [rows] = await dbPool.execute(query, [pendaftaranDetailId, userId]);
  return groupBeasiswaDetails(rows);
};

const insertBeasiswaDetailWithDokumen = async (data) => {
  const connection = await dbPool.getConnection();
  try {
    console.log("Starting transaction");
    await connection.beginTransaction();

    const queryPendaftaranDetail = `
      INSERT INTO pendaftaran_detail (pendaftaran_id, user_id, beasiswa_id, ipk, poin_portofolio, status_1, status_2, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, now(), now());
    `;
    const [result] = await connection.execute(queryPendaftaranDetail, [data.pendaftaran_id, data.user_id, data.beasiswa_id, data.ipk, data.poin_portofolio, data.status_1, data.status_2]);
    console.log("Pendaftaran detail inserted", result);

    const pendaftaran_detail_id = result.insertId;

    const queryJenisDocPendaftaranDetail = `
      INSERT INTO jenis_doc_has_pendaftaran_detail (jenis_doc_id, pendaftaran_detail_id, path)
      VALUES (?, ?, ?);
    `;
    for (const dokumen of data.dokumen) {
      console.log("Inserting document", dokumen);
      await connection.execute(queryJenisDocPendaftaranDetail, [dokumen.jenis_doc_id, pendaftaran_detail_id, dokumen.path]);
    }

    await connection.commit();
    console.log("Transaction committed");
    return result;
  } catch (error) {
    console.error("Transaction failed", error);
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
    console.log("Connection released");
  }
};

const updateBeasiswaDetail = async (id, data) => {
  const connection = await dbPool.getConnection();
  try {
    await connection.beginTransaction();

    const queryPendaftaranDetail = `
      UPDATE pendaftaran_detail
      SET pendaftaran_id = ?, user_id = ?, beasiswa_id = ?, ipk = ?, poin_portofolio = ?, status_1 = ?, status_2 = ?, updated_at = now()
      WHERE id = ?;
    `;
    await connection.execute(queryPendaftaranDetail, [data.pendaftaran_id, data.user_id, data.beasiswa_id, data.ipk, data.poin_portofolio, data.status_1, data.status_2, id]);

    if (data.dokumen && data.dokumen.length > 0) {
      const queryInsertOrUpdateDokumen = `
        INSERT INTO jenis_doc_has_pendaftaran_detail (jenis_doc_id, pendaftaran_detail_id, path)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE path = VALUES(path);
      `;
      for (const dokumen of data.dokumen) {
        await connection.execute(queryInsertOrUpdateDokumen, [dokumen.jenis_doc_id, id, dokumen.path]);
      }
    }

    await connection.commit();
    return true;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

const updateBeasiswaStatus = async (id, data) => {
  const connection = await dbPool.getConnection();
  try {
    await connection.beginTransaction();

    const queryUpdateStatus = `
      UPDATE pendaftaran_detail
      SET status_1 = ?, status_2 = ?, updated_at = now()
      WHERE id = ?;
    `;
    await connection.execute(queryUpdateStatus, [data.status_1, data.status_2, id]);

    await connection.commit();
    return true;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

const deleteBeasiswaDetail = async (id) => {
  const connection = await dbPool.getConnection();
  try {
    await connection.beginTransaction();

    const queryDeleteDokumen = `
      DELETE FROM jenis_doc_has_pendaftaran_detail WHERE pendaftaran_detail_id = ?;
    `;
    await connection.execute(queryDeleteDokumen, [id]);

    const queryPendaftaranDetail = `
      DELETE FROM pendaftaran_detail WHERE id = ?;
    `;
    await connection.execute(queryPendaftaranDetail, [id]);

    await connection.commit();
    return true;
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
  findBeasiswaDetailByUserId,
  findBeasiswaDetailByPendaftaranId,
  findBeasiswaDetailByPendaftaranUserId,
  insertBeasiswaDetailWithDokumen,
  updateBeasiswaStatus,
  updateBeasiswaDetail,
  deleteBeasiswaDetail,
};
