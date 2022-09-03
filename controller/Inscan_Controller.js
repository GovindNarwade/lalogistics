const InscanDetails = require("../model/Inscan_model")
exports.createInscanDetails=async (req,res)=>{
try {
   const result = await  InscanDetails.create({
    InscanId:Math.floor((Math.random()*100000)+1),
    BranchId:req.body.BranchId,
    GrowdownId:req.body.GrowdownId,
    DispatchOn:req.body.DispatchOn,
    MenifestId:req.body.MenifestId,
    FromStationId:req.body.FromStationId,
    ArrivalKM:req.body.ArrivalKM,
    ModeTypeId:req.body.ModeTypeId,
    RevicedTime:req.body.RevicedTime,
    RevicedDate:req.body.RevicedDate,
    ArrivalTrough:req.body.ArrivalTrough,
    UnLoadingPersion:req.body.UnLoadingPersion,
    Remark:req.body.Remark,
    Driver:req.body.Driver,
    Mobile:req.body.Mobile,
    isDeleted:req.body.isDeleted

   })
   res.json({
    success:true,
    message:"create  Inscan Details",
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
exports.getInscanDetails= async(req,res)=>{
    try {
       const result = await InscanDetails.aggregate([
           {
            $lookup:{
                from:'menifestdetails',
                localField:'MenifestId',
                foreignField:'MenifestId',
                as:"Menifest"
            }
           },
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
                from:'officeadmins',
                localField:'GrowdownId',
                foreignField:'BranchId',
                as:"Gowdown"
            }
           },
           {
            $lookup:{
                from:'modetypes',
                localField:'ModeTypeId',
                foreignField:'ModeTypeId',
                as:"Mode"
            }
           },
           {
            $lookup:{
                from:'cities',
                localField:'FromStationId',
                foreignField:'Cityid',
                as:"FromStation"
            }
           }
       ])
       res.json({
        count:result.length,
        success:true,
        message:"get Inscan Details",
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
    exports.deleteInscanDetails= async(req,res)=>{
        const {InscanId} = req.body
        try {
           const result = await InscanDetails.findOneAndDelete({InscanId:req.params.InscanId})
           res.json({
            success:true,
            message:"Delete  Inscan Details",
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
        exports.updateInscanDetails = async(req,res)=>{
        const {InscanId} = req.body
            try {
                const result = await InscanDetails.findOneAndUpdate({InscanId:req.body.InscanId},req.body, {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update Inscan Details",
                    data:result
                })
            } catch (error) {
                res.json({
                    success:false,
                    message:"Something  went wrong"+Error,
                    data:null
                })  
            }
        }
        exports.getSingleInscanDetails = async(req,res)=>{
            try {
                const result = await InscanDetails.aggregate([
                    {
                     $lookup:{
                         from:'menifestdetails',
                         localField:'MenifestId',
                         foreignField:'MenifestId',
                         as:"Menifest"
                     }
                    },
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
                         from:'modetypes',
                         localField:'ModeTypeId',
                         foreignField:'ModeTypeId',
                         as:"Mode"
                     }
                    },
                    {
                     $lookup:{
                         from:'cities',
                         localField:'FromStationId',
                         foreignField:'Cityid',
                         as:"FromStation"
                     }
                    },
                    {
                        $lookup:{
                            from:'officeadmins',
                            localField:'GrowdownId',
                            foreignField:'BranchId',
                            as:"Gowdown"
                        }
                       },
                    {
                        $match:{InscanId:req.body.InscanId}
                    }
                ])
                res.json({
                    success:true,
                    message:"get a Single Inscan  Details",
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
        exports.SearchInscanDetailsByInscanField = async(req,res)=>{
            try {
                const result = await InscanDetails.aggregate([
                    {
                     $lookup:{
                         from:'menifestdetails',
                         localField:'MenifestId',
                         foreignField:'MenifestId',
                         as:"Menifest"
                     }
                    },
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
                         from:'modetypes',
                         localField:'ModeTypeId',
                         foreignField:'ModeTypeId',
                         as:"Mode"
                     }
                    },
                    {
                     $lookup:{
                         from:'cities',
                         localField:'FromStationId',
                         foreignField:'Cityid',
                         as:"FromStation"
                     }
                    },
                    {
                        $lookup:{
                            from:'officeadmins',
                            localField:'GrowdownId',
                            foreignField:'BranchId',
                            as:"Gowdown"
                        }
                       },
                    {
                        $match: {
                            $or:[
                                { "Mode.ModeTypeName": req.body.ModeTypeName},
                                {  "FromStation.City":req.body.City}
                            ]
                           
                           
                           }
                    }
                ])
                res.json({
                    count:result.length,
                    success:true,
                    message:"Search  Inscan  Details By  ModeTypeName, FromStation    ",
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
        exports.SearchInscanDetailsByDispatchDate = async(req,res)=>{
            try {
                const result = await InscanDetails.aggregate([
                    {
                     $lookup:{
                         from:'menifestdetails',
                         localField:'MenifestId',
                         foreignField:'MenifestId',
                         as:"Menifest"
                     }
                    },
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
                         from:'modetypes',
                         localField:'ModeTypeId',
                         foreignField:'ModeTypeId',
                         as:"Mode"
                     }
                    },
                    {
                     $lookup:{
                         from:'cities',
                         localField:'FromStationId',
                         foreignField:'Cityid',
                         as:"FromStation"
                     }
                    },
                    {
                        $lookup:{
                            from:'officeadmins',
                            localField:'GrowdownId',
                            foreignField:'BranchId',
                            as:"Gowdown"
                        }
                       },
                    {
                        $match: {
                            $and:[
                                { DispatchOn: {
                                    $gte: new Date(req.body.Fromdate).toISOString(),
                                    $lte: new Date(req.body.Todate).toISOString()
                                }}
                            ],
                           
                           
                           
                           }
                    }
                ])
                res.json({
                    count:result.length,
                    success:true,
                    message:"Search  Inscan  Details By  Fromdate,Todate",
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
