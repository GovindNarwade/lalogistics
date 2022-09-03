const GruopDetails = require("../model/Group_model")
exports.createGruopDetails=async (req,res)=>{
try {
   const result = await  GruopDetails.create(req.body)
   res.json({
    success:true,
    message:"create  Gruop Details",
    data:result
})
} catch {
    res.json({
        success:true,
        message:"Something Went Worng" + Error,
        data:null
    })
}
}
exports.getGruopDetails= async(req,res)=>{
    try {
       const result = await GruopDetails.find()
       res.json({
        count:result.length,
        success:true,
        message:"get Gruop Details ",
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
    exports.deleteGruopDetails= async(req,res)=>{
        try {
           const result = await GruopDetails.findByIdAndDelete(req.params.id)
           res.json({
            success:true,
            message:"Delete  Gruop Details ",
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
        exports.updateGruopDetails = async(req,res)=>{
            try {
                const result = await GruopDetails.findByIdAndUpdate(req.params.id,req.body, {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Gruop Details ",
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
        exports.getSingleGruopDetails = async(req,res)=>{
            try {
                const result = await GruopDetails.findById(req.body.GroupId)
                console.log(result);
                res.json({
                    success:true,
                    message:"get a Single Gruop Details",
                    data:result
                })
            } catch (error) {
                res.json({
                    success:false,
                    message:"Something  went wrong" + Error,
                    data:null
                })  
            }
        }