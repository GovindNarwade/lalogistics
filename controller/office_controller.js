const office = require("../model/office_model")
const Group = require('../model/Group_model')
const bcrypt = require("bcryptjs")
exports.createOfficeAdmin = async(req,res)=>{
    try {
        const result = await office.create({
            BranchId:Math.floor((Math.random()*100000)+1),
            AdminName:req.body.AdminName,
            Email:req.body.Email,
            Role:req.body.Role,
            Mobile:req.body.Mobile,
            Password:bcrypt.hashSync(req.body.Password,10),
            Address:req.body.Address,
            City:req.body.City,
            State:req.body.State,
            GroupId:req.body.GroupId,
            StateId:req.body.StateId,
            Cityid:req.body.Cityid,
            
        })
        console.log(result);
        res.json({
            success:true,
            message:"Create office Admin Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:`Something  went wrong `+{error},
            data:null
        })  
    }
}
exports.getOfficeAdmin = async(req,res)=>{
    try {
        const result = await office.aggregate([
            {
                $lookup:{
                    from:'groups',
                    localField:'GroupId',
                    foreignField:'GroupId',
                    as:"Group"
                }
            },
            
            {
                $lookup:{
                    from:'cities',
                    localField:'Cityid',
                    foreignField:'Cityid',
                    as:"City"
                },
            },
            {
                
                    $lookup:{
                        from:'states',
                        localField:'StateId',
                        foreignField:'StateId',
                        as:"State"
                    }
                
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Office User Details",
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
exports.deleteOfficeAdmin = async(req,res)=>{
    try {
        const result = await office.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Delete office Admin Details",
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
exports.updateOfficeAdmin = async(req,res)=>{
    try {
        const result = await office.findByIdAndUpdate(req.params.id,req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update office Admin Details",
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
exports.getSingleOfficeAdmin = async(req,res)=>{
    try {
        const result = await office.findById(req.params.id)
        res.json({
            success:true,
            message:"get a Single office Details",
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
