const Driver = require("../model/driver_model")
exports.CreateDriverDetails=async (req,res)=>{
try {
   const result = await  Driver.create(req.body)
   res.json({
    success:true,
    message:"create  Driver Details",
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
exports.getAllDriverDetails= async(req,res)=>{
    try {
       const result = await Driver.find()
       res.json({
        count:result.length,
        success:true,
        message:"get  Driver Details",
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
    exports.deleteDriverDetailsByMenifestId= async(req,res)=>{
        try {
           const result = await Driver.findOneAndDelete({MenifestId:req.params.MenifestId})
           res.json({
            success:true,
            message:"Delete  Driver Details by MenifestId",
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
        exports.getDriverDetailsByMenifestId= async(req,res)=>{

            try {
               const result = await Driver.findOne({MenifestId:req.body.MenifestId})
               res.json({
                success:true,
                message:"get  Driver Details by MenifestId",
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