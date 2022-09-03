const menifestbymode = require("../model/menifestbyflight_model")
exports.createmenifestbymode= async(req,res)=>{
    try {
       const result = await menifestbymode.create(req.body)
       res.json({
        success:true,
        message:"Create  menifestbymode Details",
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
exports.getAllmenifestbymode= async(req,res)=>{
    try {
       const result = await menifestbymode.aggregate([
        
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
        message:"get  menifestbymode Details",
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
    exports.deletemenifestbymode= async(req,res)=>{
        const {MenifestId} = req.body
        try {
           const result = await menifestbymode.findOneAndDelete({MenifestId:req.params.MenifestId})
           res.json({
            success:true,
            message:"delete  menifestbymode Details",
            data:null
        })
        } catch {
            res.json({
                success:true,
                message:"Something Went Worng"+Error,
                data:null
            })
        }
        }
        exports.updatemenifestbyMenifestId= async(req,res)=>{
            try {
               const result = await menifestbymode.findOneAndUpdate({MenifestId:req.body.MenifestId},req.body, {
                new: true,
                runValidators: true,})
               res.json({
                success:true,
                message:"update  menifestbymode Details MenifestId",
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