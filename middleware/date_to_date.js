const menifest = [
    {
      date:"24/06/2022"
    }
]
exports.findmenifest= async(req,res)=>{
try {
    const result = await menifest.find({$gte:req.body.date})
    res.json({
        success:true,
        message:"find data with perticulater date",
        data:result
    })
} catch (error) {
    
}
}