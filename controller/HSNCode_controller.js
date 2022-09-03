const HSNCode =require("../model/HSN_model")
exports.getHSNcodeDetails = async(req,res)=>{
    try {
        const result = await HSNCode.find()
        res.json({
            count:result.length,
            success:true,
            message:"get HSNCode Details",
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