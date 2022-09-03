const router = require("../routes/admin_routes")
const jwt = require("jsonwebtoken")
 const protector = async (req,res,next)=>{
    try {
    const token = req.headers.authorization
    if(!token){
        return res.json({
            sucess:false,
            message:"Plese Provide token",
            data:null
        })
    }
     await jwt.verify(token,process.env.JWT_SECRET_KEY)   
     next()
    } catch (error) {
        return res.json({
            sucess:false,
            message:`Something went worng ${error}`,
            data:null
        })
    }
}
module.exports =protector