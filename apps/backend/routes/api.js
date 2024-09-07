const express = require("express");
const router = express.Router();

const { register, login, validateToken } = require("../controllers/user");
const { getDashboard } = require("../controllers/dashboard");
const authenticateToken = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/token/validate", validateToken);

router.get("/dashboard", authenticateToken, getDashboard);

module.exports = router;
