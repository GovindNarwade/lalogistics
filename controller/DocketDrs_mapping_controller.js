const DocketDRS = require("../model/DocketDRS_mapping_model")
exports.CreateDocketDRSMapping = async(req,res)=>{
    try {
        const result = await DocketDRS.create({
            DocketDRSId:Math.floor((Math.random()*100000)+1),
            DocketId:req.body.DocketId,
            DRSId:req.body.DRSId
        })
        res.json({
            success:true,
            message:"Create  Docket DRS Mapping Details",
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
exports.getAllDocketDRSMapping = async(req,res)=>{
    try {
        const result = await DocketDRS.aggregate([
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
                    from:'drsdetails',
                    localField:'DRSId',
                    foreignField:'DRSId',
                    as:"DRS"
                }
            }, 
            {
                $match:{DRSId:req.body.DRSId}
               }  
        ])
           
        res.json({
            count:result.length,
            success:true,
            message:"All    Docket DRS Mapping  Details ",
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
exports.deleteDocketDRSMappingByDocketDRSId = async(req,res)=>{
    try {
        const result = await DocketDRS.findOneAndDelete({DocketDRSId:req.params.DocketDRSId})
        res.json({
          
            success:true,
            message:"Delete Docket DRS Mapping Details",
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