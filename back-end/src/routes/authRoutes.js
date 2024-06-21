const express = require("express");
const { loginUser, getUserFromToken } = require("../controllers/authController");
const router = express.Router();

router.post("/login", loginUser);
router.get("/user", getUserFromToken);

module.exports = router;
