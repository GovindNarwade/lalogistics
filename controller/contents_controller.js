const contents = require("../model/content_model")
exports.getAllContents = async(req,res)=>{
    try {
        const result = await contents.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All contents",
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