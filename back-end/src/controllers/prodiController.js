const { findAllProdi } = require("../models/prodiModel");

const getAllProdi = async (req, res) => {
  try {
    const [data] = await findAllProdi();
    res.json({
      message: "GET all program studi success",
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
  getAllProdi,
};
