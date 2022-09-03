const mongoose = require("mongoose")
const pickupDetailsSchema = mongoose.Schema({
    Date:{
        type:String,
        
    },
    Time:{
        type:String,
      
    },
    RequestedId:{
        type:Number,
        
    },
    Reference:{
        type:String,
       },
       CustomerId:{
        type:String,
        
    },
    DestinationId:{
        type:String,
        
    },
    OriginId:{
        type:String,
        
    },
    ConsignerId:{
        type:String,
        
    },
    ConsigneeId:{
        type:String
    },
    GrossWeight:{
        type:String,
        
    },
    NoOfPcs:{
        type:Number,
        
    },
    PickupTime:{
        type:String,
        
    },
    PackegeType:{
        type:String,
        
    },
    PickupRegistered:{
        type:String,
        
    },
    PickupRegisteredNumber:{
        type:Number,
        
    },
    ContentId:{
        type:Number
    },
    Remark:{
        type:String,
        
    },
    isVerified:{
        type:Boolean,
        
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    Pincode:{
        type:Number
    },
    AllocationId:{
        type:Number
    },
    ReceiverEmail:{
        type:String
    },
    SenderEmail:{
        type:String
    }
},{
timestamps:true
})
module.exports = mongoose.model("pickupDetails",pickupDetailsSchema)