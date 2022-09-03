const DocketDelivery = require("../model/DocketDelivery_model")
exports.CreateDocketDeliveryDetails = async(req,res)=>{
    try {
        const result = await DocketDelivery.create(req.body)
        res.json({
            success:true,
            message:"Create Docket Delivery Details",
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
exports.getAllDocketDelivery = async(req,res)=>{
    try {
        const result = await DocketDelivery.find()
        res.json({
            count:result.length,
            success:true,
            message:"All Docket Delivery Details",
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
