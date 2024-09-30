const express = require("express");
const router = express.Router()

const authRouter = require("./authRoutes")
const quizRouter = require("./quizRoutes")

router.use("/auth",authRouter)
router.use("/quiz",quizRouter)

module.exports = router