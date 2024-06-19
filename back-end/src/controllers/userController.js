import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { findAllUser, findUserById, insertUser, updateUser, deleteUser, findUserByEmail } from "../models/userModel";

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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await findUserByEmail(email);
    const user = users[0];
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = {
      id: user.id,
      role_id: user.role_id,
      email: user.email,
    };

    const token = sign(payload, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.json({
      success: true,
      token: "Bearer " + token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  loginUser,
  getAllUser,
  getUserById,
  createUser,
  editUserById,
  deleteUserById,
};
