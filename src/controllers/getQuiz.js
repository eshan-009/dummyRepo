const topics = require("../models/topics")

const getQuiz = async(req,res)=>{
    
    try{

        const {topicId} = req.params

        const data = await topics.findById(topicId).populate("questions").exec();
        console.log(data.questions)
        return res.status(200).json({
            success : true,
            message : "Quiz fetched successfully",
            quiz : data.questions
        })
    } catch (err)
    {
        console.log(err)
        return res.status(500).json({
            success : false,
            message : "Error fetching quiz",
        })
    }
    

}

module.exports = {getQuiz}