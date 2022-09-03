const DocketBilling = require("../model/billingByDocketmapping_model")
exports.CreateBillingbyDocketMapping = async(req,res)=>{
    try {
        const result = await DocketBilling.create({
            DocketBillingId:Math.floor((Math.random()*100000)+1),
            DocketId:req.body.DocketId,
            BillingId:req.body.BillingId
        })
        res.json({
            success:true,
            message:"Create BillingbyDocket Mapping Details",
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
exports.getAllBillingbyDocketMapping = async(req,res)=>{
    try {
        const result = await DocketBilling.aggregate([
            {
                $lookup:{
                    from:'dockets',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"Docket"
                }
            },
            
            {
                $lookup:{
                    from:'billings',
                    localField:'BillingId',
                    foreignField:'BillingId',
                    as:"Billing"
                }
            }, 
           {
            $match:{BillingId:req.body.BillingId}
           }
        ])
           
        res.json({
            count:result.length,
            success:true,
            message:"All     Billing By Docket Mapping Details  ",
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
exports.deleteBillingbyDocketSMappingByDocketBillingId = async(req,res)=>{
    try {
        const result = await DocketBilling.findOneAndDelete({DocketBillingId:req.params.DocketBillingId})
        res.json({
          
            success:true,
            message:"Delete Billing by Docket Mapping Details",
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