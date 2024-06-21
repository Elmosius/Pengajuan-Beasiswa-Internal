const { findAllBeasiswaDetail, findBeasiswaDetailById, insertBeasiswaDetailWithDokumen, updateBeasiswaDetail, deleteBeasiswaDetail } = require("../models/beasiswaDetailModel");

const getAllBeasiswaDetail = async (req, res) => {
  try {
    const [results] = await findAllBeasiswaDetail();
    res.json({
      message: "GET all Beasiswa Detail success",
      data: results,
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
    const [results] = await findBeasiswaDetailById(id);
    if (results.length < 1) {
      return res.status(404).json({
        message: "Id tidak ditemukan",
      });
    }
    res.json({
      message: "GET Beasiswa Detail by id success",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createBeasiswaDetail = async (req, res) => {
  const data = req.body;

  try {
    const result = await insertBeasiswaDetailWithDokumen(data);
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
  const data = req.body;

  try {
    const result = await updateBeasiswaDetail(id, data);
    res.status(200).json({
      message: "Update Beasiswa Detail success",
      data: result,
    });
  } catch (error) {
    console.error("Error updating Beasiswa Detail:", error);
    res.status(500).json({ message: "Server Error", serverMessage: error });
  }
};

const deleteBeasiswaDetailById = async (req, res) => {
  const id = req.params.id;
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
  createBeasiswaDetail,
  updateBeasiswaDetailById,
  deleteBeasiswaDetailById,
};
