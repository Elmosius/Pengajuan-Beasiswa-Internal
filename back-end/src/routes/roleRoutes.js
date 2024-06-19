const express = require("express");
const { getAllRoles, getRoleById, createRole, editRoleById, deleteRoleById } = require("../controllers/roleController").default;
const router = express.Router();

router.get("/", getAllRoles);
router.get("/:id", getRoleById);
router.post("/", createRole);
router.put("/:id", editRoleById);
router.delete("/:id", deleteRoleById);

module.exports = router;
