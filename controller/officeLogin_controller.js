const office = require("../model/office_model")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const officeLogin = async(req,res) =>{
    try {
     const {Email,Password} = req.body
     const result = await office.findOne({Email}) 
     
     if(!result){
         return res.json({
             success:false,
             message:"Plese enter your correct email",
             data:null
 
         })
        }
    //  email found
     const verify = await brycpt.compare(Password,result.Password)  
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
 module.exports = officeLogin