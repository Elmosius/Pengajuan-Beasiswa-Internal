const {
  findAllBeasiswaDetail,
  findBeasiswaDetailById,
  insertBeasiswaDetailWithDokumen,
  updateBeasiswaDetail,
  deleteBeasiswaDetail,
  findBeasiswaDetailByUserId,
  findBeasiswaDetailByPendaftaranId,
  findBeasiswaDetailByPendaftaranUserId,
  updateBeasiswaStatus,
} = require("../models/beasiswaDetailModel");
const { findUserById } = require("../models/userModel");
const path = require("path");
const { createBeasiswaDetailValidation, updateBeasiswaDetailValidation } = require("../validations/beasiswaDetailValidation");

const getAllBeasiswaDetail = async (req, res) => {
  try {
    const beasiswaDetails = await findAllBeasiswaDetail();
    res.json({
      message: "GET all beasiswa details success",
      data: beasiswaDetails,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getBeasiswaDetailById = async (req, res) => {
  const id = req.params.id;
  try {
    const beasiswaDetail = await findBeasiswaDetailById(id);
    if (beasiswaDetail.length === 0) {
      return res.status(404).json({
        message: "Beasiswa detail not found",
      });
    }
    res.json({
      message: "GET beasiswa detail by id success",
      data: beasiswaDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getBeasiswaDetailByUserId = async (req, res) => {
  const userId = req.params.userId;

  const [data] = await findUserById(userId);
  if (data.length < 1) {
    return res.status(404).json({
      message: "Id tidak ditemukan",
    });
  }

  try {
    const beasiswaDetails = await findBeasiswaDetailByUserId(req.params.userId);
    res.status(200).json({
      message: "GET Beasiswa Detail by user id success",
      data: beasiswaDetails,
    });
  } catch (error) {
    console.error("Error fetching beasiswa detail by user id: ", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getBeasiswaDetailByPendaftaranId = async (req, res) => {
  const { pendaftaranId } = req.params;

  try {
    const beasiswaDetails = await findBeasiswaDetailByPendaftaranId(pendaftaranId);
    if (beasiswaDetails.length === 0) {
      return res.status(404).json({
        message: "Beasiswa details not found for the given pendaftaran ID",
      });
    }
    res.status(200).json({
      message: "Get Beasiswa details by pendaftaran ID success",
      data: beasiswaDetails,
    });
  } catch (error) {
    console.error("Error fetching Beasiswa details by pendaftaran ID:", error);
    res.status(500).json({ message: "Server Error", serverMessage: error.message });
  }
};

const getBeasiswaDetailByPendaftaranUserId = async (req, res) => {
  const { pendaftaranId, userId } = req.params;

  try {
    const beasiswaDetails = await findBeasiswaDetailByPendaftaranUserId(pendaftaranId, userId);
    if (beasiswaDetails.length === 0) {
      return res.status(404).json({
        message: "Beasiswa details not found for the given pendaftaran ID and user ID",
      });
    }
    res.status(200).json({
      message: "Get Beasiswa details by pendaftaran ID and user ID success",
      data: beasiswaDetails,
    });
  } catch (error) {
    console.error("Error fetching Beasiswa details by pendaftaran ID and user ID:", error);
    res.status(500).json({ message: "Server Error", serverMessage: error.message });
  }
};

const createBeasiswaDetail = async (req, res) => {
  console.log("Files:", req.files); // Log untuk memeriksa file yang diterima
  console.log("Body:", req.body); // Log untuk memeriksa body yang diterima

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  let jenis_doc;
  try {
    jenis_doc = JSON.parse(req.body.jenis_doc); // Ubah JSON string jadi objek
  } catch (error) {
    return res.status(400).json({ message: "Invalid jenis_doc format" });
  }

  const bodyWithFiles = {
    ...req.body,
    dokumen: req.files.map((file, index) => {
      const filePath = path.join("/uploads", file.filename);
      return { jenis_doc_id: jenis_doc[index].jenis_doc_id, path: filePath };
    }),
  };

  const { error } = createBeasiswaDetailValidation.validate({
    ...req.body,
    jenis_doc: req.body.jenis_doc,
  });
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const result = await insertBeasiswaDetailWithDokumen(bodyWithFiles);
    res.status(201).json({
      message: "Beasiswa Detail created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating Beasiswa Detail:", error);
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};
const updateBeasiswaDetailById = async (req, res) => {
  const id = req.params.id;

  const beasiswaDetail = await findBeasiswaDetailById(id);
  if (beasiswaDetail.length === 0) {
    return res.status(404).json({
      message: "Beasiswa detail not found",
    });
  }

  const bodyWithoutDokumen = { ...req.body };
  delete bodyWithoutDokumen.dokumen;

  const { error } = updateBeasiswaDetailValidation.validate(bodyWithoutDokumen);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const bodyWithFiles = {
    ...req.body,
    dokumen: req.files
      ? req.files.map((file, index) => {
          const jenis_doc = JSON.parse(req.body.jenis_doc)[index];
          const filePath = path.join("/uploads", file.filename);
          return { jenis_doc_id: jenis_doc.jenis_doc_id, path: filePath };
        })
      : [],
  };

  try {
    const result = await updateBeasiswaDetail(id, bodyWithFiles);
    res.status(200).json({
      message: "Update Beasiswa Detail success",
      data: result,
    });
  } catch (error) {
    console.error("Error updating Beasiswa Detail:", error);
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};

const updateBeasiswaStatusById = async (req, res) => {
  const { id } = req.params;
  const { status_1, status_2 } = req.body;

  try {
    await updateBeasiswaStatus(id, { status_1, status_2 });
    res.status(200).json({ message: "Beasiswa status updated successfully" });
  } catch (error) {
    console.error("Error updating Beasiswa status:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const deleteBeasiswaDetailById = async (req, res) => {
  const id = req.params.id;

  const beasiswaDetail = await findBeasiswaDetailById(id);
  if (beasiswaDetail.length === 0) {
    return res.status(404).json({
      message: "Beasiswa detail not found",
    });
  }

  try {
    const result = await deleteBeasiswaDetail(id);
    res.json({
      message: "Delete Beasiswa Detail success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllBeasiswaDetail,
  getBeasiswaDetailById,
  getBeasiswaDetailByUserId,
  getBeasiswaDetailByPendaftaranId,
  getBeasiswaDetailByPendaftaranUserId,
  createBeasiswaDetail,
  updateBeasiswaStatusById,
  updateBeasiswaDetailById,
  deleteBeasiswaDetailById,
};
