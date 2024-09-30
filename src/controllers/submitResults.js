const users = require("../models/users")

const submitResults = async (req,res)=>{
    try{

        const {marksScored,totalMarks,userData} =  req.body
        console.log({marksScored,totalMarks,userData})
        const userId = userData.id
        const {topicId} = req.params
        const user = await users.findById(userId)

      

        user.results.push({
            topic:topicId,
            marksScored : marksScored,
            totalMarks : totalMarks,
            createdAt : Date.now()
        })
        user.save()
        const result = user.results.at(-1)
   

        return res.status(200).json({
            success : true,
            message : "Marks Successfully recorded",
            result : result
        })
    } catch (err){
        console.log(err)
    }
}

module.exports = {submitResults}