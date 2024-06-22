const express = require("express");
const { getAllBeasiswaDetail, getBeasiswaDetailById, updateBeasiswaDetailById, createBeasiswaDetail, getBeasiswaDetailByUserId, deleteBeasiswaDetailById } = require("../controllers/beasiswaDetailController");

const upload = require("../middlewares/uploadMiddleware");
const router = express.Router();

router.get("/", getAllBeasiswaDetail);
router.get("/:id", getBeasiswaDetailById);
router.get("/user/:userId", getBeasiswaDetailByUserId);
router.post("/", upload.array("dokumen", 4), createBeasiswaDetail);
router.put("/:id", upload.array("dokumen", 4), updateBeasiswaDetailById);
router.delete("/:id", deleteBeasiswaDetailById);

module.exports = router;
