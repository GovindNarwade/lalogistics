const ReportsDetails = require("../model/Reports_model")
exports.createReportsDetails=async (req,res)=>{
try {
   const result = await  ReportsDetails.create({
    JobId:Math.floor((Math.random()*100000)+1),
    CustomerId:req.body.CustomerId,
    AllocationId:req.ody.AllocationId,
    BranchId:req.body.BranchId,
    RequestedId:req.body.RequestedId
   })
   res.json({
    success:true,
    message:"create  Reports Details",
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
exports.getReportsDetails = async(req,res)=>{
    try {
       const result = await ReportsDetails.aggregate([
        {
            $lookup:{
                from:'officeadmins',
                localField:'BranchId',
                foreignField:'BranchId',
                as:"Branch"
            }
           },
           {
            $lookup:{
                from:'packagedetails',
                localField:'RequestedId',
                foreignField:'RequestedId',
                as:"PackageDetails"
            }
        },
        {
            $lookup:{
                from:'allocations',
                localField:'AllocationId',
                foreignField:'AllocationId',
                as:"Allocation"
            }
        },
       ])
       res.json({
        count:result.length,
        success:true,
        message:"get ReportsDetails ",
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
    exports.deleteReportsDetails= async(req,res)=>{
        try {
           const result = await ReportsDetails.findOneAndDelete({JobId:req.params.JobId})
           res.json({
            success:true,
            message:"Delete  ReportsDetails ",
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
        exports.updateReportsDetails = async(req,res)=>{
            try {
                const result = await ReportsDetails.findOneAndUpdate({JobId:req.body.JobId},req.body, {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update ReportsDetails ",
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
       