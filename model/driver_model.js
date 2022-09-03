const mongoose = require("mongoose")

const driverSchema = mongoose.Schema({
  
    DriverName:{
        type:String,
        
    },
    DriverMobile:{
        type:Number,
        
    },
    MenifestId:{
        type:Number,
       },
    

},{
timestamps:true
})
module.exports = mongoose.model("driver",driverSchema)