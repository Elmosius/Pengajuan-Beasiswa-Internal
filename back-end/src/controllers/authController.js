const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { findUserByEmail, findUserById } = require("../models/userModel");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await findUserByEmail(email);
    const user = users[0];
    if (!user) {
      return res.status(404).json({ message: "Email atau password salah" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email atau password salah" });
    }

    const payload = {
      id: user.id,
      role_id: user.role_id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      success: true,
      token: "Bearer " + token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserFromToken = async (req, res) => {
  try {
    const userId = req.user.id;
    const [user] = await findUserById(userId);
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user: user[0] });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  loginUser,
  getUserFromToken,
};
