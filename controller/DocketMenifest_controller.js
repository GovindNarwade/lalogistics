const DocketMenifest = require("../model/DocketMenifestMapping_model")
exports.CreateMenifestDocketMapping = async(req,res)=>{
    try {
        const result = await DocketMenifest.create({
            UniqueId:Math.floor((Math.random()*100000)+1),
            DocketId:req.body.DocketId,
            MenifestId:req.body.MenifestId
        })
        res.json({
            success:true,
            message:"Create Menifest Docket Mapping Details",
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
exports.getAllMenifestDocketMappingByMenifestId = async(req,res)=>{
    try {
        const result = await DocketMenifest.aggregate([
            {
                $lookup:{
                    from:'dockets',
                    localField:'DocketId',
                    foreignField:'DocketId',
                    as:"Docket"
                }
            },
            
            {
                $lookup:{
                    from:'menifestdetails',
                    localField:'MenifestId',
                    foreignField:'MenifestId',
                    as:"Menifest"
                }
            },
           {
            $match:{MenifestId:req.body.MenifestId}
           }
            
        ])
           
        res.json({
            count:result.length,
            success:true,
            message:"All   Menifest  Docket Mapping  Details by MenifestId",
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
exports.deleteMenifestDocketMappingByuniqueId = async(req,res)=>{
    try {
        const result = await DocketMenifest.findOneAndDelete({UniqueId:req.params.UniqueId})
        res.json({
          
            success:true,
            message:"Delete Docket Menifest Mapping Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}