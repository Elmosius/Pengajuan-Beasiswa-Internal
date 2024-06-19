const { findAllPendaftaran, insertPendaftaran, findPendaftaranById, updatePendaftaran, deletePendaftaran } = require("../models/pendaftaranModel");

const getAllPendaftaran = async (req, res) => {
  try {
    const [data] = await findAllPendaftaran();
    res.json({
      message: "GET all pendafataran success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getPendaftaranById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const [data] = await findPendaftaranById(id);
    if (data.length < 1) {
      return res.status(404).json({
        message: "Id tidak ditemukan",
      });
    }
    res.json({
      message: "GET pendaftaran by id success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createPendaftaran = async (req, res) => {
  const data = req.body;

  if (!(data.id && data.start_at && data.end_at && data.status)) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await insertPendaftaran(data);
    res.status(201).json({
      message: "CREATE new pendaftaran success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const editPendaftaranById = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  try {
    await updatePendaftaran(id, data);
    res.status(200).json({
      message: "Update pendaftaran success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deletePendaftaranById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await deletePendaftaran(id);
    res.json({
      message: "Delete pendaftaran success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getPendaftaranById,
  getAllPendaftaran,
  createPendaftaran,
  editPendaftaranById,
  deletePendaftaranById,
};
