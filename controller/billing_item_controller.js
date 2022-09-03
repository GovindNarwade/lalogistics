const billingItem = require("../model/billing_item_model")
exports.AddbillingItems = async(req,res)=>{
try {
    const result = await  billingItem.create({
        billingItemId: Math.floor((Math.random()*100000)+1),
        INVOICE:req.body.INVOICE,
        Particular: req.body.Particular,
        HSNCodeId: req.body.HSNCodeId,
        NONTAXBLEVALUE: req.body.NONTAXBLEVALUE,
        TAXBLEVALUE: req.body.TAXBLEVALUE,
        Rate:req.body.Rate,
        Amount:req.body.Amount,
        CGSTPer: req.body.CGSTPer,
        CGSTAmount:req.body.CGSTAmount,
        SGSTPer: req.body.SGSTPer,
        SGSTAmount: req.body.SGSTAmount, 
        IGSTPer: req.body.IGSTPer,
        IGSTAmount:req.body.IGSTAmount
    })
    res.json({
        success:true,
        message:"Create Billing Item  Details",
        data:result
    })
}catch (error) {
    res.json({
        success:true,
        message:"Something Went Worng"+ Error,
        data:null
    })
}

}
exports.getAllbillingItembyInvoiceId = async(req,res)=>{
try {
    const result = await billingItem.aggregate([
       
        {
            $lookup:{
                from:'hsncodes',
                localField:'HSNCodeId',
                foreignField:'HSNCodeId',
                as:"HSNCode"
            }
        },
        {
            $match:{INVOICE:req.body.INVOICE}
        }
    ])
    res.json({
        count:result.length,
        success:true,
        message:"get Billing Item Details By InviceId",
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
exports.deleteBillingItemDetails = async(req,res)=>{
try {
    const result = await billingItem.findOneAndDelete({billingItemId:req.params.billingItemId})
    res.json({
        success:true,
        message:"Delete  Billing Details",
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
exports.updateBillingDetails = async(req,res)=>{
    try {
        const result = await billingItem.findOneAndUpdate({billingItemId:req.body.billingItemId},req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update  Billing Item Details",
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
