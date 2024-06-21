const express = require("express");
const { getAllBeasiswaDetail, getBeasiswaDetailById, createBeasiswaDetailWithDokumen } = require("../controllers/beasiswaDetailController");
const router = express.Router();

router.get("/", getAllBeasiswaDetail);
router.get("/:id", getBeasiswaDetailById);
router.post("/", createBeasiswaDetailWithDokumen);

module.exports = router;
