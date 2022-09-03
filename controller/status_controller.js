const status = require("../model/status_model")
exports.CreateStatus = async(req,res)=>{
    try {
        const result = await status.create(req.body)
        res.json({
            success:true,
            message:"Create Status",
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
exports.getAllStatus = async(req,res)=>{
    try {
        const result = await status.find()
        res.json({
            count:result.length,
            success:true,
            message:"All Status",
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
