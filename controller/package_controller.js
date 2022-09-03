const packageDetails = require("../model/packegeDetails_model")
exports.createPackageDetails=async (req,res)=>{
    try {
       const result = await  packageDetails.create(req.body)
       res.json({
        success:true,
        message:"create  package Details",
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
    exports.getAllpackageDetails= async(req,res)=>{
        try {
           
           const result = await packageDetails.find()
           res.json({
            count:result.length,
            success:true,
            message:"get  Allpackage Details   ",
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
        exports.getpackageDetailsByRequestId= async(req,res)=>{
            try {
                const {RequestedId} = req.body
               const result = await packageDetails.findOne({RequestedId})
               res.json({
                count:result.length,
                success:true,
                message:"get  package Details By Request Id",
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
        exports.deletepackageDetails= async(req,res)=>{
            const{RequestedId} =req.body
            try {
               const result = await packageDetails.deleteMany({RequestedId:req.params.RequestedId})
               res.json({
                success:true,
                message:"Delete  packageDetails Details By Requested",
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