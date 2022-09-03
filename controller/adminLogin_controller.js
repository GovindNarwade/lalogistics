const admin = require("../model/admin_model")
const Group = require("../model/Group_model")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Adminlogin = async(req,res) =>{
    try {
   
     const result = await admin.findOne({Email:req.body.Email,Password:req.body.Password}) 
     if(!result){
         return res.json({
             success:false,
             message:"Plese enter your correct Email or Password",
             data:null
 
         })
        }
    //  email found
     
    
 // all email and pasword match
 const resAdmin = await admin.aggregate([
    {
        $lookup:{
            from:'groups',
            localField:'GroupId',
            foreignField:'GroupId',
            as:"Group"
        }
    },
    {$match: {Email:req.body.Email }}
])
 res.json({
    success:true,
    message:"You are logged in",
    data:resAdmin,
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
 module.exports = Adminlogin