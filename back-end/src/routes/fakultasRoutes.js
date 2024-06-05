const express = require("express");
const { getAllFakultas, createFakultas, getFakultasById, editFakultasById, deleteFakultasById } = require("../controllers/fakultasController");
const validate = require("../middlewares/validateMiddleware");
const { createFakultasValidation, updateFakultasValidation } = require("../validations/fakultasValidation");
const router = express.Router();

router.get("/", getAllFakultas);
router.get("/:id", getFakultasById);
router.post("/", validate(createFakultasValidation), createFakultas);
router.put("/:id", validate(updateFakultasValidation), editFakultasById);
router.delete("/:id", deleteFakultasById);

module.exports = router;
