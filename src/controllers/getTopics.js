const topics = require("../models/topics")


const getTopics = async(req,res)=>{
    try{
        const topicList = await topics.find().select("name")
    
        res.status(200).json({
            success : true,
            message : "Data Fetched Successfully",
            data : topicList
        })
        
    } catch (err){
        console.log(err)
        res.status(500).json({
            success : false,
            message : "Error Fetching Data",

        })
    }
}

module.exports = {getTopics}