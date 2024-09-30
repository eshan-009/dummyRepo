const Question = require("../models/question")
const topics = require("../models/topics")

const addQuestion = async (req,res)=>{
    try{
        const {question,Options,CorrectAnswer,userData} = req.body
        const {topicId} = req.body
        const userId = userData.id

        const checkQuestion = await Question.findOne({question : question})
        if(checkQuestion)
        {
            return res.json({
                success : false,
                message : "Question already Exist"
            })
        }

        const addQuestionData = await Question.create({
            question : question,
            Options : Options,
            CorrectAnswer : CorrectAnswer,
            createdBy : userId
        })

        const findTopic = await topics.findById(topicId,{questions : true});
        findTopic.questions.push(addQuestionData);
        findTopic.save()

        return res.status(200).json({
            success : true,
            message : "Question Added Successfully",
            data : addQuestionData
        })
    } catch (err)
    {
        console.log(err)
        return res.status(500).json({
            success : false,
            message : "Failed to add Question",
        })
    }
}

module.exports = {addQuestion}