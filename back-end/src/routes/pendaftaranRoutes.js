const express = require("express");
const { getAllPendaftaran, createPendaftaran, getPendaftaranById, editPendaftaranById, deletePendaftaranById } = require("../controllers/pendaftaranController");
const validate = require("../middlewares/validateMiddleware");
const { createPendaftaranValidation, updatePendaftaranValidation } = require("../validations/pendaftaranValidation");
const router = express.Router();

router.get("/", getAllPendaftaran);
router.get("/:id", getPendaftaranById);
router.post("/", validate(createPendaftaranValidation), createPendaftaran);
router.put("/:id", validate(updatePendaftaranValidation), editPendaftaranById);
router.delete("/:id", deletePendaftaranById);

module.exports = router;