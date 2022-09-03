const menifest = require("../model/menifest_model")
exports.getdatawithrange = async(req,res)=>{
    try {
        const result = await menifest.aggregate([
            {
        
                $lookup:{
                    from:'customers',
                    localField:'VendorId',
                    foreignField:'CustomerId',
                    as:"Vendor"
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
                    from:'drivers',
                    localField:'MenifestId',
                    foreignField:'MenifestId',
                    as:"Driver"
                }
            },
            {
                $lookup:{
                    from:'vehicals',
                    localField:'MenifestId',
                    foreignField:'MenifestId',
                    as:"Vehical"
                }
            },
            {
                $lookup:{
                    from:'modetypes',
                    localField:'ModeTypeId',
                    foreignField:'ModeTypeId',
                    as:"ModeType"
                }
            },
            {
                $lookup:{
                    from:'cities',
                    localField:'ToStationId',
                    foreignField:'Cityid',
                    as:"ToStation"
                }
            },
            {
                $lookup:{
                    from:'menifestbymodes',
                    localField:'MenifestId',
                    foreignField:'MenifestId',
                    as:"MenifestbyFlight"
                }
            },
            {
                $lookup:{
                    from:'menifestbyroads',
                    localField:'MenifestId',
                    foreignField:'MenifestId',
                    as:"MenifestbyRoad"
                }
            },
            {
                $lookup:{
                    from:'menifestbytrains',
                    localField:'MenifestId',
                    foreignField:'MenifestId',
                    as:"MenifestbyTrain"
                },
               },
               {
                $match:{ DispatchDate: {
                    $gte: new Date(req.body.Fromdate).toISOString(),
                    $lte: new Date(req.body.Todate).toISOString()
                }}
               }
        ])
       
        
        res.json({
            count:result.length,
            success:true,
            message:"get Menifest data with perticular date range ",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"something went worng "+error,
            data:null
        })
    }
}