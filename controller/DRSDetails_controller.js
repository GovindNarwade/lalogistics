const DRSDetails = require("../model/DRSdetails_model")
exports.createDRSDetails=async (req,res)=>{
    try {
       const result = await  DRSDetails.create({
        BranchId:req.body.BranchId,
        DRSId:Math.floor((Math.random()*100000)+1),
        Date:req.body.Date,
        Time:req.body.Time,
        VendorId:req.body.VendorId,
        Vechical:req.body.Vechical,
        PlantName:req.body.PlantName,
        GateInDate:req.body.GateInDate,
        GateINTime:req.body.GateINTime,
        GateOutDate:req.body.GateOutDate,
        GateOutTime:req.body.GateOutTime,
        DeliveredBy:req.body.DeliveredBy,
        DeliveryBoyId:req.body.DeliveryBoyId,
        CustomerId:req.body.CustomerId,
        Remark:req.body.Remark
       })
       res.json({
        success:true,
        message:"create   DRS Details",
        data:result
    })
    } catch {
        res.json({
            success:true,
            message:"Something Went Worng" + Error,
            data:null
        })
    }
    }
    exports.getDRSDetails= async(req,res)=>{
        try {
           const result = await DRSDetails.aggregate([
        
            {
                $lookup:{
                    from:'customers',
                    localField:'CustomerId',
                    foreignField:'CustomerId',
                    as:"Customer"
                }
            },
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
                    from:'deliveryboys',
                    localField:'DeliveryBoyId',
                    foreignField:'DeliveryBoyId',
                    as:"DeliveryBoy"
                }
            },
        ])
           res.json({
            count:result.length,
            success:true,
            message:"get  DRS Details",
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
        exports.deleteDRSDetails= async(req,res)=>{
            const {DRSId} = req.body
            try {
               const result = await DRSDetails.findOneAndDelete({DRSId:req.params.DRSId})
               res.json({
                success:true,
                message:"Delete  DRS Details By DRSId",
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
            exports.updateDRSDetails = async(req,res)=>{
                try {
                    const result = await DRSDetails.findOneAndUpdate({DRSId:req.body.DRSId},req.body, {
                        new: true,
                        runValidators: true,})
                    res.json({
                        success:true,
                        message:"update DRS Details  By DRS Id",
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
            exports.getSingleDRSDetails = async(req,res)=>{
    
                try {
                    const result = await DRSDetails
                    .aggregate([
        
                        {
                            $lookup:{
                                from:'customers',
                                localField:'CustomerId',
                                foreignField:'CustomerId',
                                as:"Customer"
                            }
                        },
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
                                from:'deliveryboys',
                                localField:'DeliveryBoyId',
                                foreignField:'DeliveryBoyId',
                                as:"DeliveryBoy"
                            }
                        },
                        {
                            $match:{DRSId:req.body.DRSId}
                        }
                    ])
                    res.json({
                        success:true,
                        message:"get a Single DRS Details  ",
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
            exports.SearchDRSDetailsByDRSField = async(req,res)=>{
                try {
                    const result = await DRSDetails.aggregate([
                        {
                            $lookup:{
                                from:'customers',
                                localField:'CustomerId',
                                foreignField:'CustomerId',
                                as:"Customer"
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
                                from:'deliveryboys',
                                localField:'DeliveryBoyId',
                                foreignField:'DeliveryBoyId',
                                as:"DeliveryBoy"
                            }
                        },
                        {
                            $lookup: {
                                from: "customers",
                                localField:"VendorId",
                                foreignField:"CustomerId",
                                as: "Vendor"
                              }
                        },
                        {
                            $match: {
                                $or:[
                                    { "Vendor.CustomerName": req.body.CustomerName},
                                    {  "Branch.AdminName":req.body.AdminName}
                                ]
                               
                               }
                        },
                        
                    ])
                    res.json({
                        count:result.length,
                        success:true,
                        message:"Search DRS Details By Drsfield  ",
                        data:result
                    })
                } catch (error) {
                    res.json({
                        success:false,
                        message:"Something  went wrong "+error,
                        data:null
                    })  
                }
            }
            exports.getDRSdatawithrange = async(req,res)=>{
                try {
                    const result = await DRSDetails.aggregate([
        
                        {
                            $lookup:{
                                from:'customers',
                                localField:'CustomerId',
                                foreignField:'CustomerId',
                                as:"Customer"
                            }
                        },
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
                                from:'deliveryboys',
                                localField:'DeliveryBoyId',
                                foreignField:'DeliveryBoyId',
                                as:"DeliveryBoy"
                            }
                        },
                        {
                            $match:{  Date: {
                                $gte: new Date(req.body.Fromdate).toISOString(),
                                $lte: new Date(req.body.Todate).toISOString()
                            }}
                        }
                    ])
                   
                    res.json({
                        count:result.length,
                        success:true,
                        message:"get DRS Details data between two date ",
                        data:result
                    })
                } catch (error) {
                    res.json({
                        success:false,
                        message:"something went worng "+error,
                        data:null
                    })
                }
            }