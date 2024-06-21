const { findAllBeasiswaDetail, findBeasiswaDetailById, insertBeasiswaDetailWithDokumen } = require("../models/beasiswaDetailModel");

const getAllBeasiswaDetail = async (req, res) => {
  try {
    const [data] = await findAllBeasiswaDetail();
    res.json({
      message: "GET all Beasiswa Detail success",
      data: data,
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
    const [data] = await findBeasiswaDetailById(id);
    if (data.length < 1) {
      return res.status(404).json({
        message: "ID tidak ditemukan",
      });
    }
    res.json({
      message: "GET Beasiswa Detail by ID success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createBeasiswaDetailWithDokumen = async (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await insertBeasiswaDetailWithDokumen(data);
    res.status(201).json({
      message: "CREATE new Beasiswa Detail with Dokumen success",
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
  getAllBeasiswaDetail,
  getBeasiswaDetailById,
  createBeasiswaDetailWithDokumen,
};
