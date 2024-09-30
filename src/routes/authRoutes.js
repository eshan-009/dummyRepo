const express = require("express");
const { auth } = require("../middleware/auth");
const { signUp, login } = require("../controllers/Auth");
const router = express.Router();


router.post("/signup",signUp);
router.post("/login",login);

module.exports = router