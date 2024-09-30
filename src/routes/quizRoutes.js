const express = require("express");
const { addTopic } = require("../controllers/addTopic");
const { auth, isInstructor } = require("../middleware/auth");
const { addQuestion } = require("../controllers/addQuestion");
const { getQuiz } = require("../controllers/getQuiz");
const { submitResults } = require("../controllers/submitResults");
const { getTopics } = require("../controllers/getTopics");
const router = express.Router();

router.post("/addTopic",auth,isInstructor,addTopic)
router.post("/addQuestion",auth,isInstructor,addQuestion)
router.get("/getTopics",getTopics)
router.get("/getQuiz/:topicId",auth,getQuiz)

router.post("/submitQuiz/:topicId",auth,submitResults)
module.exports = router;