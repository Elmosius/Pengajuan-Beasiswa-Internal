const { findAllBeasiswa, insertBeasiswa, findBeasiswaById, updateBeasiswa, deleteBeasiswa } = require("../models/beasiswaModel");

const getAllBeasiswa = async (req, res) => {
  try {
    const [data] = await findAllBeasiswa();
    res.json({
      message: "GET all beasiswa success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getBeasiswaById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const [data] = await findBeasiswaById(id);
    if (data.length < 1) {
      return res.status(404).json({
        message: "Id tidak ditemukan",
      });
    }
    res.json({
      message: "GET beasiswa by id success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createBeasiswa = async (req, res) => {
  const data = req.body;

  if (!(data.id && data.nama_beasiswa && data.deskripsi && data.periode)) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await insertBeasiswa(data);
    res.status(201).json({
      message: "CREATE new beasiswa success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const editBeasiswaById = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  try {
    await updateBeasiswa(id, data);
    res.status(200).json({
      message: "Update beasiswa success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteBeasiswaById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await deleteBeasiswa(id);
    res.json({
      message: "Delete beasiswa success",
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
  getBeasiswaById,
  getAllBeasiswa,
  createBeasiswa,
  editBeasiswaById,
  deleteBeasiswaById,
};
