const express = require("express");
const {
  getAllBeasiswaDetail,
  getBeasiswaDetailById,
  updateBeasiswaDetailById,
  createBeasiswaDetail,
  getBeasiswaDetailByUserId,
  deleteBeasiswaDetailById,
  getBeasiswaDetailByPendaftaranId,
  getBeasiswaDetailByPendaftaranUserId,
  updateBeasiswaStatusById,
} = require("../controllers/beasiswaDetailController");

const upload = require("../middlewares/uploadMiddleware");
const router = express.Router();

router.get("/", getAllBeasiswaDetail);
router.get("/:id", getBeasiswaDetailById);
router.get("/pendaftaran/:pendaftaranId", getBeasiswaDetailByPendaftaranId);
router.get("/pendaftaran/:pendaftaranId/user/:userId", getBeasiswaDetailByPendaftaranUserId);
router.get("/user/:userId", getBeasiswaDetailByUserId);

router.post("/", upload.array("dokumen", 4), createBeasiswaDetail);

router.put("/status/:id", updateBeasiswaStatusById);
router.put("/:id", upload.array("dokumen"), updateBeasiswaDetailById);

router.delete("/:id", deleteBeasiswaDetailById);

module.exports = router;
