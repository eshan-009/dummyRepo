const mongoose = require("mongoose");
require("dotenv").config()
const dbConnect = ()=>{

    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("DataBase Connected successfully"))
    .catch(()=>console.log("Error Connecting to DataBase"))

}

module.exports = {dbConnect}