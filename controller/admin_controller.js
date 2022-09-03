const admin = require("../model/admin_model")
const Group = require("../model/Group_model")
const bcrypt = require("bcryptjs")
exports.CreateAdminDetails = async(req,res)=>{
    try {
        const result1 = await admin.findOne({Email:req.body.Email})
        if(result1){
            res.json({
                success:true,
                message:"admin Already Exist   Please Login",
                data:null
            })
        }
      else{
        const result = await admin.create({
            adminId:Math.floor((Math.random()*100000)+1),
            Name:req.body.Name,
            Email:req.body.Email,
            Password:req.body.Password,
            GroupId:req.body.GroupId,   
        })
        res.json({
            success:true,
            message:"create  Admin Details",
            data:result
            
        })
      }
     
     
        
       
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}
exports.getAdmin = async(req,res)=>{
    try {
        const result = await admin.aggregate([
            {
                $lookup:{
                    from:'groups',
                    localField:'GroupId',
                    foreignField:'GroupId',
                    as:"Group"
                }
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"All Admin",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateAdminDetails = async(req,res)=>{
    try {
        const result = await admin.findOneAndUpdate({adminId:req.body.adminId},{Name:req.body.Name} , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update admin Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}
exports.getAdminDetailByEmail = async(req,res)=>{
    try {
        const result = await admin.aggregate([
            {
                $lookup:{
                    from:'groups',
                    localField:'GroupId',
                    foreignField:'GroupId',
                    as:"Group"
                }
            },
            {
                $match:{Email:req.body.Email}
            }
        ])
        res.json({
            success:true,
            message:" get Admin Detail By Email ",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}