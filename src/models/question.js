const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    question : {
        type : String,
        trim : true,
        required : true
    },
    Options : [
        {
            type : String,
            required : true,
            trim : true,
        }, 
    ],
    CorrectAnswer :{
        type : String,
        required : true,
        trim : true,
    },
    createdBy :{
        type : mongoose.Types.ObjectId,
        ref : "USER"
    }
})

module.exports =   mongoose.model("QUESTION",questionSchema);