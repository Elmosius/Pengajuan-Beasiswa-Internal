const express = require("express");
const { getAllFakultas, createFakultas, getFakultas } = require("../controllers/fakultasController");
const router = express.Router();

router.get("/", getAllFakultas);
router.get("/:id", getFakultas);
router.post("/", createFakultas);
router.put("/:id");
router.delete("/:id");

module.exports = router;
