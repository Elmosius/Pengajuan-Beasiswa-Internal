const express = require("express");
const { getAllFakultas } = require("../controllers/fakultasController");
const router = express.Router();

router.get("/", getAllFakultas);
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;
