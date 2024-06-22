const express = require("express");
const { getAllBeasiswa, createBeasiswa, getBeasiswaById, editBeasiswaById, deleteBeasiswaById } = require("../controllers/beasiswaController");
const validate = require("../middlewares/validateMiddleware");
const { createBeasiswaValidation, updateBeasiswaValidation } = require("../validations/beasiswaValidation");
const router = express.Router();

router.get("/", getAllBeasiswa);
router.get("/:id", getBeasiswaById);
router.post("/", validate(createBeasiswaValidation), createBeasiswa);
router.put("/:id", validate(updateBeasiswaValidation), editBeasiswaById);
router.delete("/:id", deleteBeasiswaById);

module.exports = router;
