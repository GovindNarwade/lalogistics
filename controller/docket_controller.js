const docket = require("../model/docket_model")
const status =require("../model/status_model")
const address =require("../model/Address_model")
const customer =require("../model/customer_model")
exports.CreateDocketDetails = async(req,res)=>{
    try {
        const result = await docket.create({
            DocketId: Math.floor((Math.random()*100000)+1),
            RequestedId:req.body.RequestedId,
            CustomerId:req.body.CustomerId,
            statusId:req.body.statusId ,
            Currentlocation:req.body.Currentlocation ,
            ShipingDate:req.body.ShipingDate ,
            DeliveryDate:req.body.DeliveryDate ,
            Payment: req.body.Payment,
            PaymentRecived: req.body.PaymentRecived,
        })
        res.json({
            success:true,
            message:"create  Docket Details",
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
exports.getDocketDetails = async(req,res)=>{
    try {
        const result = await docket.aggregate([
            {
                $lookup:{
                    from:'status',
                    localField:'statusId',
                    foreignField:'statusId',
                    as:"status"
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
                    from:'addresses',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"Address"
                }
            },
            {
                $lookup:{
                    from:'pickupdetails',
                    localField:'RequestedId',
                    foreignField:'RequestedId',
                    as:"PickupDetails"
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
                    from:'docketdeliveries',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"DeliveryDetails"
                }
            }, 
           
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get  Docket Details",
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
exports.getTodaysGeneratedDocketDetails = async(req,res)=>{
    try {
        const result = await docket.aggregate([
            {
                $lookup:{
                    from:'status',
                    localField:'statusId',
                    foreignField:'statusId',
                    as:"status"
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
                    from:'addresses',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"Address"
                }
            },
            {
                $lookup:{
                    from:'pickupdetails',
                    localField:'RequestedId',
                    foreignField:'RequestedId',
                    as:"PickupDetails"
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
                    from:'docketdeliveries',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"DeliveryDetails"
                }
            }, 
            {
                $match:{updatedAt : Date.now}
            }
           
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Todays Generated Docket Details",
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
exports.deleteDocketByDocketId = async(req,res)=>{
    const {DocketId} = req.body
    try {
        const result = await docket.findOneAndDelete({DocketId:req.params.DocketId})
        res.json({
            success:true,
            message:"Delete Docket Details Docket Id",
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
exports.updateDocketByDocketId = async(req,res)=>{
    try {
        const result = await docket.findOneAndUpdate({DocketId : req.body.DocketId},req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Docket Details By Docket Id",
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
exports.SearchDocketDetailsByDocketId = async(req,res)=>{
    const {DocketId} = req.body
    try {
        const result = await docket.aggregate([
            {
                $lookup:{
                    from:'status',
                    localField:'statusId',
                    foreignField:'statusId',
                    as:"status"
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
                    from:'addresses',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"Address"
                }
            },
            {
                $lookup:{
                    from:'pickupdetails',
                    localField:'RequestedId',
                    foreignField:'RequestedId',
                    as:"PickupDetails"
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
                    from:'docketdeliveries',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"DeliveryDetails"
                }
            }, 
            {
                $match:{DocketId:req.body.DocketId}
            }
        ])
        res.json({
            success:true,
            message:"get a Single Docket Details By DocketId",
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
exports.getDocketDetailsByDocketStatus = async(req,res)=>{
  
    try {
        const result = await docket.aggregate([
            {
                $lookup:{
                    from:'status',
                    localField:'statusId',
                    foreignField:'statusId',
                    as:"status"
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
                    from:'addresses',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"Address"
                }
            },
            {
                $lookup:{
                    from:'pickupdetails',
                    localField:'RequestedId',
                    foreignField:'RequestedId',
                    as:"PickupDetails"
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
                    from:'docketdeliveries',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"DeliveryDetails"
                }
            }, 
            {
                $match:
                 {
                    $and:[
                        {statusId:4},
                        {updatedAt:Date.now}
                    ]
                   }
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get a Docket Details byDocket Status",
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
exports.searchDocketDetailsByDocketStatus = async(req,res)=>{
  
    try {
        const result = await docket.aggregate([
            {
                $lookup:{
                    from:'status',
                    localField:'statusId',
                    foreignField:'statusId',
                    as:"status"
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
                    from:'addresses',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"Address"
                }
            },
            {
                $lookup:{
                    from:'pickupdetails',
                    localField:'RequestedId',
                    foreignField:'RequestedId',
                    as:"PickupDetails"
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
                    from:'docketdeliveries',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"DeliveryDetails"
                }
            }, 
            {
                $match:  {"status.Status":req.body.Status},
                
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get a Docket Details byDocket Status",
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