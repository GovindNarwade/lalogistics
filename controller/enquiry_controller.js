const enquiry = require("../model/Enquiry_model")
exports.createEnquiry=async (req,res)=>{
try {
   const result = await  enquiry.create(req.body)
   res.json({
    success:true,
    message:"create  Enquiry Details",
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
exports.getEnquiry= async(req,res)=>{
    try {
       const result = await enquiry.find()
       res.json({
        count:result.length,
        success:true,
        message:"get  Enquiry Details",
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
    exports.deleteEnquiry= async(req,res)=>{
        try {
           const result = await enquiry.findByIdAndDelete(req.params.id)
           res.json({
            success:true,
            message:"Delete  Enquiry Details",
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