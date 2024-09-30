const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        trim : true,
        required : true
    },
    password :{
        type : String,
        trim : true,
        required : true
    },
    isInstructor:{
        type : Boolean,
        required : true
    },
    results : [
        {
            topic : {
                type : mongoose.Types.ObjectId,
                ref : "TOPIC"
            },
            marksScored : {
                type : Number
            },
            totalMarks:{
                type : Number
            },
            createdAt : Date
        }
    ]
})

module.exports =   mongoose.model("USER",userSchema);