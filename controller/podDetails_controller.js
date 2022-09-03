const PODDetails = require("../model/podDetails_model")
exports.createPodDetails=async (req,res)=>{
    try {
       const result = await  PODDetails.create({
        PodId:Math.floor((Math.random()*100000)+1),
        BranchId: req.body.BranchId,
        GateInDate: req.body.GateInDate,
        GateINTime: req.body.GateINTime,
        GRType:req.body.GRType ,
        GRId: req.body.GRId,
        BookingDate: req.body.BookingDate,
        BookingTime:req.body.BookingTime,
        CustomerId: req.body.CustomerId,
        DestinationId: req.body.DestinationId,
        OriginId:req.body.OriginId ,
        ConsigneeId:req.body.ConsigneeId ,
        ConsignerId: req.body.ConsignerId,
        ArrivalDate: req.body.ArrivalDate,
        ArrivalTime:req.body.ArrivalTime,
        Packgs: req.body.Packgs,
        Weight: req.body.Weight,
        DeliveryBoyName:req.body.DeliveryBoyName ,
        DeliveryDate: req.body.DeliveryDate,
        DeliveryTime: req.body.DeliveryTime,
        DestinationReletaion: req.body.DestinationReletaion,
        DRSId:req.body.DRSId ,
        ReceivedBy: req.body.ReceivedBy,
        ReceiverMobile: req.body.ReceiverMobile,
        Remark:req.body.Remark ,
        Idproof:req.body.Idproof,
        WithSign:req.body.WithSign
       })
       res.json({
        success:true,
        message:"create   POD Details ",
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
    exports.getPodDetails= async(req,res)=>{
        try {
           const result = await PODDetails.aggregate([
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
                    from:'dockets',
                    localField:'GRId',
                    foreignField:'DocketId',
                    as:"GR"
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
                    from:'drsdetails',
                    localField:'DRSId',
                    foreignField:'DRSId',
                    as:"DRS"
                }
            },
            {
                $lookup:{
                    from:'podimages',
                    localField:'PodId',
                    foreignField:'PodId',
                    as:"PODImage"
                }
            },
        ])
           res.json({
            count:result.length,
            success:true,
            message:"get  POD Details",
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
        exports.deletePODDetails= async(req,res)=>{
            
            try {
               const result = await PODDetails.findOneAndDelete({PodId:req.params.PodId})
               res.json({
                success:true,
                message:"Delete  POD Details",
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
            exports.updatePodDetails = async(req,res)=>{
             
                try {
                    const result = await PODDetails.findOneAndUpdate({PodId : req.body.PodId}, req.body,{
                        new: true,
                        runValidators: true,})
                    res.json({
                        success:true,
                        message:"update POD Details  ",
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
            exports.getPodDetailsByPodId= async(req,res)=>{
                try {
                   const result = await PODDetails.aggregate([
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
                            from:'dockets',
                            localField:'GRId',
                            foreignField:'DocketId',
                            as:"GR"
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
                            from:'drsdetails',
                            localField:'DRSId',
                            foreignField:'DRSId',
                            as:"DRS"
                        }
                    },
                    {
                        $lookup:{
                            from:'podimages',
                            localField:'PodId',
                            foreignField:'PodId',
                            as:"PODImage"
                        }
                    },
                    {
                        $match:{PodId:req.body.PodId}
                    }
                ])
                   res.json({
                    count:result.length,
                    success:true,
                    message:"get  POD Details",
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