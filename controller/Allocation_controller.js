const Allocation = require("../model/Allocation_model")
exports.CreateAllocation = async(req,res)=>{
    try {
        const result = await Allocation.create({
         AllocationId:Math.floor((Math.random()*100000)+1),
        RequestedId:req.body.RequestedId,
        Date:req.body.Date,
        Time:req.body.Time,
        AllocateToId:req.body.AllocateToId,
        Remark:req.body.Remark
        })
        res.json({
            success:true,
            message:"Create Allocation Details",
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
exports.getAllAllocation = async(req,res)=>{
    try {
        const result = await Allocation.aggregate([
            {
                $lookup:{
                    from:'officeadmins',
                    localField:'AllocateToId',
                    foreignField:'BranchId',
                    as:"AllocateTo"
                },
            },
            {
                $lookup:{
                    from:'pickupdetails',
                    localField:'RequestedId',
                    foreignField:'RequestedId',
                    as:"PickupDetails"
                },
            },
        ])
        res.json({
            count:result.length,
            success:true,
            message:"All Allocation Details",
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
exports.deleteAllocation = async(req,res)=>{
    const{AllocationId} = req.body
    try {
        const result = await Allocation.findOneAndDelete({AllocationId:req.params.AllocationId})   
        res.json({
        success:true,
        message:"delete  Allocation Details ",
        data:null
    })
    } catch {
        res.json({
            success:false,
            message:"Something Went Worng",
            data:null
        })
    }
    }
    exports.updateAllocationbyAllocationId= async(req,res)=>{
        try {
           const result = await Allocation.findOneAndUpdate({AllocationId:req.body.AllocationId},req.body, {
            new: true,
            runValidators: true,})
           res.json({
            success:true,
            message:"update  Allocation Details AllocationId",
            data:result
        })
        } catch {
            res.json({
                success:true,
                message:"Something Went Worng"+Error,
                data:null
            })
        }
        }