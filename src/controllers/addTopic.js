const Topic = require("../models/topics")



const addTopic = async(req,res)=>{
    try{
        const {name,userData} = req.body
        const userId = userData.id
        
        const CheckTopic = await Topic.findOne({name:name});

        if(CheckTopic)
        {
           return res.json({
                success :false,
                message : "Topic Alreday Exist"
            })
        }

        const addTopicData = await Topic.create({
            name : name,
            createdBy : userId
        })

      
        return res.status(200).json({
            success : true,
            data : addTopicData
        })
    } catch (err)
    {
        console.log(err)
        return res.status(500).json({
            success :false,
            message : "Error Adding Topic"
        })
    }
}

module.exports = {addTopic}