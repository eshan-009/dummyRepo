const mongoose = require("mongoose")

const topicSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    questions : [
        {
            type : mongoose.Types.ObjectId,
            ref : "QUESTION"
        }
    ],
    createdBy :  {
        type : mongoose.Types.ObjectId,
        ref : "USER"
    }
})

module.exports =   mongoose.model("TOPIC",topicSchema);