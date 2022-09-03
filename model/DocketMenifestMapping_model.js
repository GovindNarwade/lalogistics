const mongoose = require("mongoose")

const DocketMenifestSchema = mongoose.Schema({
  
    UniqueId:{
        type:Number,
        
    },
    DocketId:{
        type:Number,  
    },
    MenifestId:{
        type:Number,
       },
    

},{
timestamps:true
})
module.exports = mongoose.model("DocketMenifest",DocketMenifestSchema)