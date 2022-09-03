const mongoose = require("mongoose")
const DRSDetailsSchema = mongoose.Schema({
    BranchId:{
        type:String,
        
    },
    DRSId:{
        type:Number,
        
    },
    Date:{
        type:String
    },
    Time:{
        type:String
    },
    VendorId:{
        type:String,
    },
    Vechical:{
        type:String,
    },
    PlantName:{
        type:String
    },
    GateInDate:{
        type:String,
        
    },
    GateINTime:{
        type:String,
      
    },
    GateOutDate:{
        type:String,
        
    },
    GateOutTime:{
        type:String,
      
    },
    DeliveredBy:{
        type:String,
        
    },
    DeliveryBoyId:{
        type:Number,
        
    },
    CustomerId:{
        type:String,
        
    },
    Remark:{
        type:String
    },
  
    isDeleted:{
        type:Boolean,
        default:false
    },
},{
timestamps:true
})
module.exports = mongoose.model("DRSDetails",DRSDetailsSchema)