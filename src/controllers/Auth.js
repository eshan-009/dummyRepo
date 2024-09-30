const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require("dotenv").config()
const User = require("../models/users");

const signUp =  async (req,res)=>{
try{
    const {userName,email,password,isInstructor} = req.body;

    if(!userName || !email || !password || typeof(isInstructor)!== "boolean")
    {
        return res.status(400).json({
            success : false,
            message: "Please Fill All Details"
        })
    }

    const checkUser = await  User.findOne({email : email});

    if(checkUser)
    {
        return res.json({
            success : false,
            message: "Email already registered"
        })
    }
    let hashedPassword = await bcrypt.hash(password,10);
    
    console.log("Hashed PAssword",hashedPassword)
    const addUser = await User.create({
        userName : userName,
        email : email,
        password : hashedPassword,
        isInstructor : isInstructor
    })



   return res.status(200).json({
        success:true,
        message : `${email} successfully registered`
    })

} catch (err)
{
    console.log(err);
    return res.status(500).json({
        success : false,
        message: "Error registering User"
    })
}
}

const login =  async(req,res)=>{
    try{
        const {email,password} = req.body;
console.log({email,password})
        if(!email || !password)
            {
                return res.status(400).json({
                    success : false,
                    message: "Please Fill All Details"
                })
            }
            const userData = await User.findOne({email:email})
            console.log(await bcrypt.compare(password,userData.password))
            if(await bcrypt.compare(password,userData.password))
            {
                const payload = {
                   
                    id : userData._id,
                    isInstructor : userData.isInstructor
                }
                const token = jwt.sign(payload,process.env.JWT_SECRET);

                return res.status(200).json({
                    success : true,
                    message : "Logged In SuccessFully",
                    token : token
                })
            }
          

    } catch (err){
        console.log(err);
        res.status(500).json({
            success : false,
            message: "Error Logging In"
        })
    }
}

module.exports = {signUp,login}