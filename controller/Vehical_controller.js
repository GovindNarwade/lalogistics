const Vehical = require("../model/Vehical_model")
exports.CreateVehicalDetails=async (req,res)=>{
try {
   const result = await  Vehical.create(req.body)
   res.json({
    success:true,
    message:"create  Vehical Details",
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
exports.getAllVehicalDetails= async(req,res)=>{
    try {
       const result = await Vehical.find()
       res.json({
        count:result.length,
        success:true,
        message:"get  Vehical Details",
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
    exports.deleteVehicalDetailsByMenifestId= async(req,res)=>{
        try {
           const result = await Vehical.findOneAndDelete({MenifestId:req.params.MenifestId})
           res.json({
            success:true,
            message:"Delete  Vehical Details by MenifestId",
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
        exports.getVehicalDetailsByMenifestId= async(req,res)=>{
            try {
               const result = await Vehical.findOne({MenifestId:req.body.MenifestId})
               res.json({
                success:true,
                message:"get  Vehical Details by MenifestId",
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