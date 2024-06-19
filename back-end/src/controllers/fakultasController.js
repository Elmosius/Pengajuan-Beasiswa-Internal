import { findAllFakultas, insertFakultas, findFakultasById, updateFakultas, deleteFakultas } from "../models/fakultasModel";

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

const getFakultasById = async (req, res) => {
  const id = req.params.id;
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

const editFakultasById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    await updateFakultas(id, data);
    res.status(200).json({
      message: "Update fakultas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteFakultasById = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteFakultas(id);
    res.json({
      message: "Delete fakultas success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

export default {
  getFakultasById,
  getAllFakultas,
  createFakultas,
  editFakultasById,
  deleteFakultasById,
};
