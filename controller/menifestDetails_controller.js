const menifestDetails = require("../model/menifest_model")
exports.createMenifestDetails=async (req,res)=>{
try {
   const result = await  menifestDetails.create({
       MenifestId:Math.floor((Math.random()*100000)+1),
    ModeTypeId:req.body.ModeTypeId,
    FreightMemo:req.body.FreightMemo,
    BranchId:req.body.BranchId,
    DispatchDate:req.body.DispatchDate,
    DispatchTime:req.body.DispatchTime,
    VendorId:req.body.VendorId,
    ToStationId:req.body.ToStationId,
    EwBDate:req.body.EwBDate,
    LoadingPersion:req.body.LoadingPersion,
    Remark:req.body.Remark
   })
   res.json({
    success:true,
    message:"create  Menifest Details",
    data:result
})
} catch {
    res.json({
        success:true,
        message:"Something Went Worng " + Error,
        data:null
    })
}
}
exports.getMenifestDetails= async(req,res)=>{
    try {
       const result = await menifestDetails
       .aggregate([
        {
        
            $lookup:{
                from:'customers',
                localField:'VendorId',
                foreignField:'CustomerId',
                as:"Vendor"
            }
        },
        {
        
            $lookup:{
                from:'officeadmins',
                localField:'BranchId',
                foreignField:'BranchId',
                as:"Branch"
            }
        },
        {
            $lookup:{
                from:'drivers',
                localField:'MenifestId',
                foreignField:'MenifestId',
                as:"Driver"
            }
        },
        {
            $lookup:{
                from:'vehicals',
                localField:'MenifestId',
                foreignField:'MenifestId',
                as:"Vehical"
            }
        },
        {
            $lookup:{
                from:'modetypes',
                localField:'ModeTypeId',
                foreignField:'ModeTypeId',
                as:"ModeType"
            }
        },
        {
            $lookup:{
                from:'cities',
                localField:'ToStationId',
                foreignField:'Cityid',
                as:"ToStation"
            }
        },
        {
            $lookup:{
                from:'menifestbymodes',
                localField:'MenifestId',
                foreignField:'MenifestId',
                as:"MenifestbyFlight"
            }
        },
        {
            $lookup:{
                from:'menifestbyroads',
                localField:'MenifestId',
                foreignField:'MenifestId',
                as:"MenifestbyRoad"
            }
        },
        {
            $lookup:{
                from:'menifestbytrains',
                localField:'MenifestId',
                foreignField:'MenifestId',
                as:"MenifestbyTrain"
            },
           },
    ])
       res.json({
        count:result.length,
        success:true,
        message:"get menifest Details",
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
    exports.deleteMenifestDetails= async(req,res)=>{
        const {MenifestId} = req.body
        try {
           const result = await menifestDetails.findOneAndDelete({MenifestId:req.params.MenifestId})
           res.json({
            success:true,
            message:"Delete  menifest Details By MenifestId",
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
        exports.updateMenifestDetails = async(req,res)=>{
            try {
                const result = await menifestDetails.findOneAndUpdate({MenifestId:req.body.MenifestId},req.body, {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Menifest Details By MenifestId",
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
        exports.getSingleMenifestDetails = async(req,res)=>{
            const {MenifestId} = req.body
            try {
                const result = await menifestDetails.aggregate([
                    {
        
                        $lookup:{
                            from:'customers',
                            localField:'VendorId',
                            foreignField:'CustomerId',
                            as:"Vendor"
                        }
                    },
                    {
                    
                        $lookup:{
                            from:'officeadmins',
                            localField:'BranchId',
                            foreignField:'BranchId',
                            as:"Branch"
                        }
                    },
                    {
                        $lookup:{
                            from:'drivers',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"Driver"
                        }
                    },
                    {
                        $lookup:{
                            from:'vehicals',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"Vehical"
                        }
                    },
                    {
                        $lookup:{
                            from:'modetypes',
                            localField:'ModeTypeId',
                            foreignField:'ModeTypeId',
                            as:"ModeType"
                        }
                    },
                    {
                        $lookup:{
                            from:'cities',
                            localField:'ToStationId',
                            foreignField:'Cityid',
                            as:"ToStation"
                        }
                    },
                    {
                        $lookup:{
                            from:'menifestbymodes',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"MenifestbyFlight"
                        }
                    },
                    {
                        $lookup:{
                            from:'menifestbyroads',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"MenifestbyRoad"
                        }
                    },
                    {
                        $lookup:{
                            from:'menifestbytrains',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"MenifestbyTrain"
                        },
                       },
                    {
                        $match:{MenifestId:req.body.MenifestId}
                    }
                ])
                res.json({
                    success:true,
                    message:"get a Single menifest  Details",
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
        exports.SearchMenifestDetailsByMenifestfield = async(req,res)=>{
   
            try {
                const result = await menifestDetails.aggregate([
                    {
        
                        $lookup:{
                            from:'customers',
                            localField:'VendorId',
                            foreignField:'CustomerId',
                            as:"Vendor"
                        }
                    },
                    {
                    
                        $lookup:{
                            from:'officeadmins',
                            localField:'BranchId',
                            foreignField:'BranchId',
                            as:"Branch"
                        }
                    },
                    {
                        $lookup:{
                            from:'drivers',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"Driver"
                        }
                    },
                    {
                        $lookup:{
                            from:'vehicals',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"Vehical"
                        }
                    },
                    {
                        $lookup:{
                            from:'modetypes',
                            localField:'ModeTypeId',
                            foreignField:'ModeTypeId',
                            as:"ModeType"
                        }
                    },
                    {
                        $lookup:{
                            from:'cities',
                            localField:'ToStationId',
                            foreignField:'Cityid',
                            as:"ToStation"
                        }
                    },
                    {
                        $lookup:{
                            from:'menifestbymodes',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"MenifestbyFlight"
                        }
                    },
                    {
                        $lookup:{
                            from:'menifestbyroads',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"MenifestbyRoad"
                        }
                    },
                    {
                        $lookup:{
                            from:'menifestbytrains',
                            localField:'MenifestId',
                            foreignField:'MenifestId',
                            as:"MenifestbyTrain"
                        },
                       },
                       {
                        $match: {
                            $or:[
                                { "ModeType.ModeTypeName": req.body.ModeTypeName},
                                {  "ToStation.City":req.body.City}
                            ]
                           
                           }
                    }
                ])
                res.json({
                    count:result.length,
                    success:true,
                    message:"Search menifest  Details By MenifestId",
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