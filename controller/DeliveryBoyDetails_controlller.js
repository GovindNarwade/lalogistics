const DeliveryBoyDetails =require("../model/DeliveryBoyDetails_model")
const Group = require('../model/Group_model')
const bcrypt = require("bcryptjs")
exports.CreateDeliveryBoyDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyDetails.create({
            DeliveryBoyId:Math.floor((Math.random()*100000)+1),
            DeliveryBoyName:req.body.DeliveryBoyName,
            DeliveryBoyEmail:req.body.DeliveryBoyEmail,
            DeliveryBoyMobile:req.body.DeliveryBoyMobile,
            DeliveryBoyPassword:bcrypt.hashSync(req.body.DeliveryBoyPassword,10),
            DeliveryBoyAddress:req.body.DeliveryBoyAddress,
            GroupId:req.body.GroupId,
            StateId:req.body.StateId,
            Cityid:req.body.Cityid,
            Pincode:req.body.Pincode,
            isDeleted:req.body.isDeleted,
            file:req.body.file
        })
        res.json({
            success:true,
            message:"Create Delivery Boy Details",
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
exports.getDeliveryBoyDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyDetails.aggregate([
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
            message:"get Delivery Boy Details",
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
exports.deleteDeliveryBoyDetails = async(req,res)=>{
     const {DeliveryBoyId} = req.body
    try {
        const result = await DeliveryBoyDetails.findOneAndDelete(req.params.DeliveryBoyId)
        res.json({
            success:true,
            message:"Delete  Delivery Boy Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateDeliveryBoyDetails = async(req,res)=>{
    try {
        const result = await DeliveryBoyDetails.findOneAndUpdate({DeliveryBoyId:req.body.DeliveryBoyId},req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Delivery Boy Details By DeliveryBoyId",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+error,
            data:null
        })  
    }
}
exports.getSingleDeliveryBoyDetails = async(req,res)=>{
    const {DeliveryBoyId} =req.body
    try {
        const result = await DeliveryBoyDetails.aggregate([
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
                
            },
            {
                $match:{DeliveryBoyId:req.body.DeliveryBoyId}
            }
          
        ])
        res.json({
            success:true,
            message:"get a Single Delivery Boy Details By DeliveryBoyId ",
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