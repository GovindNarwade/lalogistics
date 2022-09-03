const mongoose = require("mongoose")
const podDetailsSchema = mongoose.Schema({
    PodId:{
        type:Number
    },
    BranchId:{
        type:String,
        
    },
    GateInDate:{
        type:String,
        
    },
    GateINTime:{
        type:String,
      
    },
    GRType:{
        type:String,
        
    },
    GRId:{
        type:Number,
       },
    BookingDate:{
        type:String,
        
    },
    BookingTime:{
        type:String
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
    ConsigneeId:{
        type:String,
        
    },
    ConsignerId:{
        type:String,
        
    },
    ArrivalDate:{
        type:String,
        
    },
    ArrivalTime:{
        type:String
    },
    Packgs:{
        type:Number,
        
    },
    Weight:{
        type:String,
        
    },
    DeliveryBoyName:{
        type:String,
        
    },
    DeliveryDate:{
        type:String,
        
    },
    DeliveryTime:{
        type:String,
        
    },
    DestinationReletaion:{
        type:String,
        
    },
    DRSId:{
        type:Number,
        
    },
    ReceivedBy:{
        type:String,
        
    },
    ReceiverMobile:{
        type:Number
    },
    Idproof:{
        type:String,
        
    },
    Remark:{
        type:String
    },
    WithSign:{
type:Boolean
    }

},{
timestamps:true
})
module.exports = mongoose.model("podDetails",podDetailsSchema)