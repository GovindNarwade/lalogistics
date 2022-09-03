const mode = require("../model/modeTypeMenifest")
exports.getAllmode= async(req,res)=>{
    try {
       const result = await mode.find()
       res.json({
        count:result.length,
        success:true,
        message:"get  Mode Details",
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