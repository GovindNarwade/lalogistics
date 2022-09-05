const PickupDetails = require("../model/PickupDetails_model")
exports.createPickupDetails=async (req,res)=>{
    try {
       const result = await  PickupDetails.create({
        Date:req.body.Date,
        Time:req.body.Time ,
        RequestedId:Math.floor((Math.random()*10000)+1) ,
        Reference:req.body.Reference ,
        CustomerId: req.body.CustomerId,
        DestinationId:req.body. DestinationId,
        OriginId: req.body.OriginId,
        ConsignerId: req.body.ConsignerId,
        ConsigneeId:req.body.ConsigneeId,
        GrossWeight: req.body.GrossWeight,
        NoOfPcs: req.body.NoOfPcs,
        PickupTime:req.body.PickupTime ,
        ContentId: req.body.ContentId,
        PackegeType:req.body.PackegeType ,
        PickupRegistered:req.body.PickupRegistered,
        PickupRegisteredNumber:req.body.PickupRegisteredNumber,
        Remark:req.body.Remark,
        Pincode:req.body.Pincode,
        isAllocated:req.body.isAllocated,
        ReceiverEmail:req.body.ReceiverEmail,
        SenderEmail:req.body.SenderEmail
       }
        
       )
       res.json({
        success:true,
        message:"create   Pickup Details",
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
    exports.getPickupDetails= async(req,res)=>{
        try {
           const result = await PickupDetails.aggregate([
            {
                $lookup:{
                    from:'contents',
                    localField:'ContentId',
                    foreignField:'ContentId',
                    as:"contents"
                }
               
            },
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
                    localField:'ConsignerId',
                    foreignField:'CustomerId',
                    as:"Consigner"
                }
            },
            {
                $lookup:{
                    from:'customers',
                    localField:'ConsigneeId',
                    foreignField:'CustomerId',
                    as:"Consignee"
                }
            },
            {
                $lookup:{
                    from:'cities',
                    localField:'OriginId',
                    foreignField:'Cityid',
                    as:"Origin"
                }
            },
            {
                $lookup:{
                    from:'cities',
                    localField:'DestinationId',
                    foreignField:'Cityid',
                    as:"Destination"
                }
            },
            {
                $lookup:{
                    from:'packagedetails',
                    localField:'RequestedId',
                    foreignField:'RequestedId',
                    as:"PackageDetails"
                }
            },
            {
                $lookup:{
                    from:'allocations',
                    localField:'RequestedId',
                    foreignField:'RequestedId',
                    as:"Allocation"
                }
            },
            

        ])
           res.json({
            count:result.length,
            success:true,
            message:"get  Pickup Details",
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
        exports.deletePickupDetails= async(req,res)=>{
            const {RequestedId} = req.body
            try {
               const result = await PickupDetails.findOneAndDelete({RequestedId:req.params.RequestedId})
               res.json({
                success:true,
                message:"Delete  Pickup Details",
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
            exports.updatePickupDetails = async(req,res)=>{
             
                try {
                    const result = await PickupDetails.findOneAndUpdate( {RequestedId : req.body.RequestedId}, req.body,{
                        new: true,
                        runValidators: true,})
                    res.json({
                        success:true,
                        message:"update Pickup Details ",
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
                exports.getpickageDetailsByRequestId= async(req,res)=>{
                    try {
                        
                       const result = await PickupDetails.aggregate([
                        {
                            $lookup:{
                                from:'contents',
                                localField:'ContentId',
                                foreignField:'ContentId',
                                as:"contents"
                            }
                           
                        },
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
                                localField:'ConsignerId',
                                foreignField:'CustomerId',
                                as:"Consigner"
                            }
                        },
                        {
                            $lookup:{
                                from:'customers',
                                localField:'ConsigneeId',
                                foreignField:'CustomerId',
                                as:"Consignee"
                            }
                        },
                        {
                            $lookup:{
                                from:'cities',
                                localField:'OriginId',
                                foreignField:'Cityid',
                                as:"Origin"
                            }
                        },
                        {
                            $lookup:{
                                from:'cities',
                                localField:'DestinationId',
                                foreignField:'Cityid',
                                as:"Destination"
                            }
                        },
                        {
                            $lookup:{
                                from:'packagedetails',
                                localField:'RequestedId',
                                foreignField:'RequestedId',
                                as:"PackageDetails"
                            }
                        },
                        {
                            $lookup:{
                                from:'allocations',
                                localField:'RequestedId',
                                foreignField:'RequestedId',
                                as:"Allocation"
                            }
                        },
                        {$match: {RequestedId:req.body.RequestedId}}
                    ])
                       res.json({
                           count:result.length,
                        success:true,
                        message:"get  pickage Details By Request Id",
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
                    exports.getpickageDetailsBydate = async(req,res)=>{
                        try {
                          
                           const result = await PickupDetails.aggregate([
                            {
                                $lookup:{
                                    from:'contents',
                                    localField:'ContentId',
                                    foreignField:'ContentId',
                                    as:"contents"
                                }
                               
                            },
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
                                    localField:'ConsignerId',
                                    foreignField:'CustomerId',
                                    as:"Consigner"
                                }
                            },
                            {
                                $lookup:{
                                    from:'customers',
                                    localField:'ConsigneeId',
                                    foreignField:'CustomerId',
                                    as:"Consignee"
                                }
                            },
                            {
                                $lookup:{
                                    from:'cities',
                                    localField:'OriginId',
                                    foreignField:'Cityid',
                                    as:"Origin"
                                }
                            },
                            {
                                $lookup:{
                                    from:'cities',
                                    localField:'DestinationId',
                                    foreignField:'Cityid',
                                    as:"Destination"
                                }
                            },
                            {
                                $lookup:{
                                    from:'packagedetails',
                                    localField:'RequestedId',
                                    foreignField:'RequestedId',
                                    as:"PackageDetails"
                                }
                            },
                             {
                                $lookup:{
                                    from:'allocations',
                                    localField:'RequestedId',
                                    foreignField:'RequestedId',
                                    as:"Allocation"
                                }
                            },
                            {
                                $match: {
                                    $and:[
                                        {
                                             Date: {
                                            $gte: new Date(req.body.Fromdate).toISOString(),
                                            $lte: new Date(req.body.Todate).toISOString()
                                        }}
                                    ],
                                   }
                            }
                        ])
                           res.json({
                               count:result.length,
                            success:true,
                            message:"get  pickage Details By between data range ",
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
                        exports.getpickageDetailsByfield= async(req,res)=>{
                            try {
                                
                               const result = await PickupDetails.aggregate([
                                {
                                    $lookup:{
                                        from:'contents',
                                        localField:'ContentId',
                                        foreignField:'ContentId',
                                        as:"contents"
                                    }
                                   
                                },
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
                                        localField:'ConsignerId',
                                        foreignField:'CustomerId',
                                        as:"Consigner"
                                    }
                                },
                                {
                                    $lookup:{
                                        from:'customers',
                                        localField:'ConsigneeId',
                                        foreignField:'CustomerId',
                                        as:"Consignee"
                                    }
                                },
                                {
                                    $lookup:{
                                        from:'cities',
                                        localField:'OriginId',
                                        foreignField:'Cityid',
                                        as:"Origin"
                                    }
                                },
                                {
                                    $lookup:{
                                        from:'cities',
                                        localField:'DestinationId',
                                        foreignField:'Cityid',
                                        as:"Destination"
                                    }
                                },
                                {
                                    $lookup:{
                                        from:'packagedetails',
                                        localField:'RequestedId',
                                        foreignField:'RequestedId',
                                        as:"PackageDetails"
                                    }
                                },
                                {
                                    $lookup:{
                                        from:'allocations',
                                        localField:'RequestedId',
                                        foreignField:'RequestedId',
                                        as:"Allocation"
                                    }
                                },
                                {
                                        
                                            $match: {
                                                $or:[
                                                    { "Customer.CustomerName": req.body.CustomerName},
                                                    {  "Origin.City":req.body.OriginCity},
                                                    {  "Destination.City":req.body.DestinationCity}
                                                ]
                                               }
                                    
                                }
                            ])
                               res.json({
                                   count:result.length,
                                success:true,
                                message:"get  pickage Details By field",
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
                            exports.getpickageDetailsByAllocation = async(req,res)=>{
                                try {
                                 
                                    const result = await PickupDetails.aggregate([
                                        {
                                            $lookup:{
                                                from:'contents',
                                                localField:'ContentId',
                                                foreignField:'ContentId',
                                                as:"contents"
                                            }
                                           
                                        },
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
                                                localField:'ConsignerId',
                                                foreignField:'CustomerId',
                                                as:"Consigner"
                                            }
                                        },
                                        {
                                            $lookup:{
                                                from:'customers',
                                                localField:'ConsigneeId',
                                                foreignField:'CustomerId',
                                                as:"Consignee"
                                            }
                                        },
                                        {
                                            $lookup:{
                                                from:'cities',
                                                localField:'OriginId',
                                                foreignField:'Cityid',
                                                as:"Origin"
                                            }
                                        },
                                        {
                                            $lookup:{
                                                from:'cities',
                                                localField:'DestinationId',
                                                foreignField:'Cityid',
                                                as:"Destination"
                                            }
                                        },
                                        {
                                            $lookup:{
                                                from:'packagedetails',
                                                localField:'RequestedId',
                                                foreignField:'RequestedId',
                                                as:"PackageDetails"
                                            }
                                        },
                                        {
                                            $lookup:{
                                                from:'allocations',
                                                localField:'RequestedId',
                                                foreignField:'RequestedId',
                                                as:"Allocation"
                                            }
                                        },
                                     {
                                        $match:{
                                            Allocation : []
                                        }
                                     }
                                      
                                    ])
                                       res.json({
                                           count:result.length,
                                        success:true,
                                        message:"get  pickup Details By Pending",
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
                                exports.getpickageDetailsByAllocated = async(req,res)=>{
                                    try {
                                   
                                     
                                   
                                        const result = await PickupDetails.aggregate([
                                            {
                                                $lookup:{
                                                    from:'contents',
                                                    localField:'ContentId',
                                                    foreignField:'ContentId',
                                                    as:"contents"
                                                }
                                               
                                            },
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
                                                    localField:'ConsignerId',
                                                    foreignField:'CustomerId',
                                                    as:"Consigner"
                                                }
                                            },
                                            {
                                                $lookup:{
                                                    from:'customers',
                                                    localField:'ConsigneeId',
                                                    foreignField:'CustomerId',
                                                    as:"Consignee"
                                                }
                                            },
                                            {
                                                $lookup:{
                                                    from:'cities',
                                                    localField:'OriginId',
                                                    foreignField:'Cityid',
                                                    as:"Origin"
                                                }
                                            },
                                            {
                                                $lookup:{
                                                    from:'cities',
                                                    localField:'DestinationId',
                                                    foreignField:'Cityid',
                                                    as:"Destination"
                                                }
                                            },
                                            {
                                                $lookup:{
                                                    from:'packagedetails',
                                                    localField:'RequestedId',
                                                    foreignField:'RequestedId',
                                                    as:"PackageDetails"
                                                }
                                            },
                                            {
                                                $lookup:{
                                                    from:'allocations',
                                                    localField:'RequestedId',
                                                    foreignField:'RequestedId',
                                                    as:"Allocation"
                                                }
                                            },
                                   {
                                    $match:{
                                      
                                        Allocation:[]
                                        
                                    }
                                   }
     
                                        ])
                                           res.json({
                                               count:result.length,
                                            success:true,
                                            message:"get  pickup Details By Allocated",
                                            data:result
                                        })  
                                     
                                     
                                          
                                    } catch {
                                        res.json({
                                            success:true,
                                            message:"Something Went Worng ",
                                            data:null
                                        })
                                    }
                                    }