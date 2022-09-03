const road = require("../model/menifestbyRoad_model")
exports.createmenifestbyroad= async(req,res)=>{
    try {
       const result = await road.create(req.body)
       res.json({
        success:true,
        message:"Create  menifestbyroad Details",
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
exports.getAllmenifestbyroad= async(req,res)=>{
    try {
       const result = await road.aggregate([
        
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
            {
                $lookup:{
                    from:'vehicals',
                    localField:'MenifestId',
                    foreignField:'MenifestId',
                    as:"Vehical"
                },
            },
            {
                $lookup:{
                    from:'drivers',
                    localField:'MenifestId',
                    foreignField:'MenifestId',
                    as:"Driver"
                },
            },
       ])
       res.json({
        count:result.length,
        success:true,
        message:"get  menifestbyroad Details",
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
    exports.deletemenifestbyroad= async(req,res)=>{
        const {MenifestId} =req.body
        try {
           const result = await road.findOneAndDelete(req.params.MenifestId)
           res.json({
            count:result.length,
            success:true,
            message:"delete  menifestbyroad Details",
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
        exports.updatemenifestbyroadMenifestId= async(req,res)=>{
            try {
               const result = await road.findOneAndUpdate({MenifestId:req.body.MenifestId},req.body, {
                new: true,
                runValidators: true,})
               res.json({
                success:true,
                message:"update  menifestbyroad Details MenifestId",
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