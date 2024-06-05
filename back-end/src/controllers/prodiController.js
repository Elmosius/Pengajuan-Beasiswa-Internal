const { findAllProdi, insertProdi, updateProdi, deleteProdi, findProdiById } = require("../models/prodiModel");

const getAllProdi = async (req, res) => {
  try {
    const [data] = await findAllProdi();
    res.json({
      message: "GET all Program Studi success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getProdiById = async (req, res) => {
  const id = req.params.id;
  try {
    const [data] = await findProdiById(id);
    if (data.length < 1) {
      return res.status(404).json({
        message: "Id tidak ditemukan",
      });
    }
    res.json({
      message: "GET Program Studi by id success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createProdi = async (req, res) => {
  const data = req.body;

  if (!(data.id && data.nama_program_studi && data.fakultas_id)) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await insertProdi(data);
    res.status(201).json({
      message: "CREATE new Program Studi success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const editProdiById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    await updateProdi(id, data);
    res.status(200).json({
      message: "Update Program Studi success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteProdiById = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteProdi(id);
    res.json({
      message: "Delete Program Studi success",
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
  getAllProdi,
  getProdiById,
  createProdi,
  editProdiById,
  deleteProdiById,
};
