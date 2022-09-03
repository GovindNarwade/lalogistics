const mongoose = require("mongoose")

const PODImageSchema = mongoose.Schema({
  
    PodImageId:{
        type:Number
    },
    
    file:{
        type:String,  
    },
    PodId:{
        type:Number,
       },
    

},{
timestamps:true
})
module.exports = mongoose.model("podImage",PODImageSchema)