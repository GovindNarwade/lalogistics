const mongoose = require("mongoose")

const DocketDRSSchema = mongoose.Schema({
  
DocketDRSId:{
    type:Number
},
    DocketId:{
        type:Number,  
    },
    DRSId:{
        type:Number,
       },
    

},{
timestamps:true
})
module.exports = mongoose.model("DocketDRS",DocketDRSSchema)