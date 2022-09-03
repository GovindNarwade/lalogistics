const admin = require("../model/DeliveryBoyDetails_model")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const DeliveryBoylogin = async(req,res) =>{
    try {
     const {DeliveryBoyEmail,DeliveryBoyPassword} = req.body
     const result = await admin.findOne({DeliveryBoyEmail}) 
     
     if(!result){
         return res.json({
             success:false,
             message:"Plese enter your correct email",
             data:null
 
         })
        }
    //  email found
     const verify = await brycpt.compare(DeliveryBoyPassword,result.DeliveryBoyPassword)  
     if(!verify){
        return res.json({
            success:false,
            message:"Plese enter your correct password",
            data:null
 
        }) 
 }
 const token = await jwt.sign({user:result._id},process.env.JWT_SECRET_KEY)
 // all email and pasword match
 res.json({
    success:true,
    message:"You are logged in",
    data:result,
     token
 
 })
 console.log(result);
    } catch (error) {
     res.json({
         success:false,
         message:`Something went worng ${error}`,
         data:null
         
      
      })  
      console.log(error);
    }
 }
 module.exports = DeliveryBoylogin