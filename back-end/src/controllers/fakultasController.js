const { findAllFakultas, insertFakultas, findFakultasById } = require("../models/fakultasModel");

const getAllFakultas = async (req, res) => {
  try {
    const [data] = await findAllFakultas();
    res.json({
      message: "GET all fakultas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getFakultas = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const [data] = await findFakultasById(id);
    if (data.length < 1) {
      return res.status(404).json({
        message: "Id tidak ditemukan",
      });
    }
    res.json({
      message: "GET fakultas by id success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createFakultas = async (req, res) => {
  const data = req.body;

  if (!(data.id && data.nama_fakultas)) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await insertFakultas(data);
    res.status(201).json({
      message: "CREATE new fakultas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getFakultas,
  getAllFakultas,
  createFakultas,
};
