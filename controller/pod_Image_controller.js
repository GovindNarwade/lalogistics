const image = require("../model/podImageId_model")
exports.addImageInPod =async(req,res)=>{
 try {
    const result = await image.create({
       PodImageId:Math.floor((Math.random()*100000)+1),
        PodId:req.body.PodId,
        file: req.body.file
     })
     res.json({
        success:true,
        message:"Add    POD Image ",
        data:result
    })
 } catch (error) {
    res.json({
        success:true,
        message:"Something Went Worng" + Error,
        data:null
    })
 }
}
exports.getPodImageByPodID = async(req,res)=>{
   try {
      const result = await image.find({PodId:req.body.PodId})
      res.json({
         success:true,
         message:"get    POD Image  By PodId",
         data:result
     })
   } catch (error) {
      res.json({
         success:true,
         message:"Something Went Worng" + Error,
         data:null
     })
   }
}
exports.deletePodImageByPodImgId = async (req,res)=>{
   try {
      const result = await image.findOneAndDelete({PodImageId:req.params.PodImageId})
      res.json({
         success:true,
         message:"  delete  POD Image  By PodImgId",
         data:null
     })
   } catch (error) {
      res.json({
         success:true,
         message:"Something Went Worng" + Error,
         data:null
     })
   }
}