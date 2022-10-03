const billing = require("../model/billing_model")
exports.CreateBillingDetails = async(req,res)  => {
try {
    let count = (await billing.countDocuments()+1)+100;
    const result = await billing.create({
        BillingId: Math.floor((Math.random()*100000)+1),
        CustomerId: req.body.CustomerId,
        INVOICE: "Invoice"+count ,
        InvoiceDate: req.body.InvoiceDate,
        INVOICEDuration: req.body.INVOICEDuration,
        PlaceofSupply: req.body.PlaceofSupply,
        totalNonTaxableAmount:req.body.totalNonTaxableAmount,
        totalTaxableAmount:req.body.totalTaxableAmount,
        totalTax:req.body.totalTax,
        totalAmount:req.body.totalAmount,
        BillingReminder:req.body.BillingReminder,
    weeklyreminderDate:req.body.weeklyreminderDate


       
    })
    res.json({
        success:true,
        message:"Create Billing  Details",
        data:result
    })

} catch (error) {
    res.json({
        success:true,
        message:"Something Went Worng"+ Error,
        data:null
    })
}
}
exports.getBillingDetails = async(req,res)=>{
    try {
        const result = await billing.aggregate([
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
                    from:'billingitems',
                    localField:'INVOICE',
                    foreignField:'INVOICE',
                    as:"BillingItem"
                }
            },
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Billing Details",
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
exports.deleteBillingDetails = async(req,res)=>{
    try {
        const result = await billing.findOneAndDelete({BillingId:req.params.BillingId})
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
        const result = await billing.findOneAndUpdate({BillingId:req.body.BillingId},req.body, {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update  Billing Details",
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
exports.getSingleBillingDetails = async(req,res)=>{
    try {
        const result = await billing.findOne({BillingId:req.body.BillingId})
        res.json({
            success:true,
            message:"get a Single Billing Details",
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