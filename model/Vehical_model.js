const mongoose = require("mongoose")

const VehicalSchema = mongoose.Schema({
  
    VechicalName:{
        type:String
    },
    
    VechicalType:{
        type:String,  
    },
    MenifestId:{
        type:Number,
       },
    

},{
timestamps:true
})
module.exports = mongoose.model("vehical",VehicalSchema)