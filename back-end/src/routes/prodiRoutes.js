const express = require("express");
const { getAllProdi } = require("../controllers/prodiController");
const router = express.Router();

router.get("/", getAllProdi);
router.get("/:id");
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;
