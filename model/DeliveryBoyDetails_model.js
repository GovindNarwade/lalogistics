const mongoose = require("mongoose")

const DeliveryBoyDetailsSchema = mongoose.Schema({
    DeliveryBoyId:{
        type:Number,
        
    },
    DeliveryBoyName:{
     type:String,
    },
    DeliveryBoyEmail:{
        type:String,
      
    },
    DeliveryBoyMobile:{
        type:Number,
        
    },
    DeliveryBoyPassword:{
        type:String,
        
    },
    DeliveryBoyAddress:{
        type:String,
        
    },
    DeliveryBoyCity:{
        type:String,
        
    },
    DeliveryBoyState:{
        type:String,
        
    },
    GroupId:{
        type:Number
    },
    Cityid:{
        type:String
    },
    StateId:{
        type:Number
    },
    Pincode:{
        type:Number
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    file:{
        type:String,
       
    }

},{
timestamps:true
})
module.exports = mongoose.model("DeliveryBoy",DeliveryBoyDetailsSchema)