const express = require("express");
const { getAllFakultas, createFakultas, getFakultasById, editFakultasById, deleteFakultasById } = require("../controllers/fakultasController");
const router = express.Router();

router.get("/", getAllFakultas);
router.get("/:id", getFakultasById);
router.post("/", createFakultas);
router.put("/:id", editFakultasById);
router.delete("/:id", deleteFakultasById);

module.exports = router;
