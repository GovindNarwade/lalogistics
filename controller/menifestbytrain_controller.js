const train = require("../model/menifestbytrain_model")
exports.createmenifestbytrain= async(req,res)=>{
    try {
       const result = await train.create(req.body)
       res.json({
        success:true,
        message:"Create  menifestbytrain Details",
        data:result
    })
    } catch {
        res.json({
            success:true,
            message:"Something Went Worng",
            data:null
        })
    }
    }
exports.getAllmenifestbytrain= async(req,res)=>{
    try {
       const result = await train.aggregate([
        
        {
            $lookup:{
                from:'cities',
                localField:'ToStationId',
                foreignField:'Cityid',
                as:"ToStation"
            },
        },
        {
            $lookup:{
                from:'modetypes',
                localField:'ModeTypeId',
                foreignField:'ModeTypeId',
                as:"ModeType"
            },
        },
    ])
       res.json({
        count:result.length,
        success:true,
        message:"get  menifestbytrain Details",
        data:result
    })
    } catch {
        res.json({
            success:true,
            message:"Something Went Worng",
            data:null
        })
    }
    }
    exports.deletemenifestbytrain= async(req,res)=>{
        const {MenifestId} =req.body
        try {
           const result = await train.findOneAndDelete(req.params.MenifestId)
           res.json({
            count:result.length,
            success:true,
            message:"delete  menifestbytrain Details",
            data:null
        })
        } catch {
            res.json({
                success:true,
                message:"Something Went Worng",
                data:null
            })
        }
        }
        exports.updatemenifestbytrainMenifestId= async(req,res)=>{
            try {
               const result = await train.findOneAndUpdate({MenifestId:req.body.MenifestId},req.body, {
                new: true,
                runValidators: true,})
               res.json({
                success:true,
                message:"update  menifestbytrain Details MenifestId",
                data:result
            })
            } catch {
                res.json({
                    success:true,
                    message:"Something Went Worng"+Error,
                    data:null
                })
            }
            }