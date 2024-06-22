const express = require("express");
const { loginUser, getUserFromToken } = require("../controllers/authController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", loginUser);
router.get("/user", authMiddleware, getUserFromToken);

module.exports = router;
