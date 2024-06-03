const { findAllFakultas } = require("../models/fakultasModel");

const getAllFakultas = async (req, res) => {
  try {
    const [data] = await findAllFakultas();
    res.json({
      message: "GET all users success",
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
  getAllFakultas,
};
