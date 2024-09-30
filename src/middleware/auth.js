const jwt = require("jsonwebtoken")


const auth = async(req,res,next)=>{
    try{
        const {token} = req.body

        if(token)
        {
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            req.body.userData = decode
        }
        else
        {
            return res.status(400).json({
                success : false,
                message : "Could Not Authenticate User"
            })
        }
next()
    } catch (err)
    {
        console.log(err)
        return res.status(500).json({
            success : false,
            message : "Could Not Authenticate User"
        })
    }
}

const isInstructor = async(req,res,next)=>{
    try{
        const {isInstructor} = req.body.userData

        if(!isInstructor)
        {
            return res.json({
                success : false,
                message : "Trying to access protected route"
            })
        }
        next();
    } catch (err){
        console.log(err);

        return res.status(500).json({
            success : false,
            message : "Error accessing protected route"
        })
    }
}

module.exports = {auth,isInstructor}