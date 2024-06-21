const { findAllUser, findUserById, insertUser, updateUser, deleteUser, findUserByEmail } = require("../models/userModel");

const getAllUser = async (req, res) => {
  try {
    const [data] = await findAllUser();
    res.json({
      message: "GET all User success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const [data] = await findUserById(id);
    if (data.length < 1) {
      return res.status(404).json({
        message: "Id tidak ditemukan",
      });
    }
    res.json({
      message: "GET User by id success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createUser = async (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await insertUser(data);
    res.status(201).json({
      message: "CREATE new User success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const editUserById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    await updateUser(id, data);
    res.status(200).json({
      message: "Update User success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteUser(id);
    res.json({
      message: "Delete User success",
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
  getAllUser,
  getUserById,
  createUser,
  editUserById,
  deleteUserById,
};
