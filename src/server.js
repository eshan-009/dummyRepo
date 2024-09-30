const express = require("express");
const { dbConnect } = require("./config/database");
const Router = require("./routes/indexRoutes")
const server = express();
const Cors = require("cors")
require("dotenv").config();
const PORT = process.env.PORT || 3000

server.use(Cors())
server.use(express.json())



server.use("/api",Router)


dbConnect();

server.listen(PORT,()=>{
    console.log("Server Started Successfully")
})