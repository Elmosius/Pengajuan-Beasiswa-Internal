const express = require("express");
const { getAllProdi, getProdiById, createProdi, deleteProdiById, editProdiById } = require("../controllers/prodiController");
const validate = require("../middlewares/validateMiddleware");
const { createProdiValidation, updateProdiValidation } = require("../validations/prodiValidation");
const router = express.Router();

router.get("/", getAllProdi);
router.get("/:id", getProdiById);
router.post("/", validate(createProdiValidation), createProdi);
router.put("/:id", validate(updateProdiValidation), editProdiById);
router.delete("/:id", deleteProdiById);

module.exports = router;
