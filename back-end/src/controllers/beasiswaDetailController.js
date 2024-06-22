const { findAllBeasiswaDetail, findBeasiswaDetailById, insertBeasiswaDetailWithDokumen, updateBeasiswaDetail, deleteBeasiswaDetail, findBeasiswaDetailByUserId } = require("../models/beasiswaDetailModel");
const { findUserById } = require("../models/userModel");

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
  try {
    const beasiswaDetails = await findBeasiswaDetailByUserId(userId);
    if (beasiswaDetails.length === 0) {
      return res.status(404).json({
        message: "No beasiswa details found for this user",
      });
    }
    res.json({
      message: "GET beasiswa detail by user id success",
      data: beasiswaDetails,
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
  getBeasiswaDetailByUserId,
  createBeasiswaDetail,
  updateBeasiswaDetailById,
  deleteBeasiswaDetailById,
};
