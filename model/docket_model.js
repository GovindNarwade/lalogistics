const mongoose = require("mongoose")
const docketSchema = mongoose.Schema({
    DocketId:{
        type:Number,  
    },
    RequestedId:{
        type:Number,
    },
    CustomerId:{
        type:String,
    },
    statusId:{
        type:Number
    },
    Currentlocation:{
        type:String
    },
    ShipingDate:{
        type:String,
        
    },
    DeliveryDate:{
        type:String,
        
    },
    Payment:{
        type:String
    },
    PaymentRecived:{
        type:Boolean
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
},{
timestamps:true
})
module.exports = mongoose.model("docket",docketSchema)