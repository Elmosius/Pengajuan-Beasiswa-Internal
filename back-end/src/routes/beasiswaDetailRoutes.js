const express = require("express");
const { getAllBeasiswaDetail, getBeasiswaDetailById, updateBeasiswaDetailById, createBeasiswaDetail } = require("../controllers/beasiswaDetailController");
const validate = require("../middlewares/validateMiddleware");
const { updateBeasiswaDetailValidation, createBeasiswaDetailValidation } = require("../validations/beasiswaDetailValidation");
const router = express.Router();

router.get("/", getAllBeasiswaDetail);
router.get("/:id", getBeasiswaDetailById);
router.post("/", validate(createBeasiswaDetailValidation), createBeasiswaDetail);
router.put("/:id", validate(updateBeasiswaDetailValidation), updateBeasiswaDetailById);

module.exports = router;
