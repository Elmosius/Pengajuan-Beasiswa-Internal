const express = require("express");
const validate = require("../middlewares/validateMiddleware");
const { createUserValidation, updateUserValidation } = require("../validations/userValidation");
const { getAllUser, getUserById, createUser, editUserById, deleteUserById } = require("../controllers/userController").default;
const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", validate(createUserValidation), createUser);
router.put("/:id", validate(updateUserValidation), editUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
