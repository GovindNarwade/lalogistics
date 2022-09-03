const mongoose = require("mongoose")

const DocketDeliverySchema = mongoose.Schema({
    DocketId:{
        type:Number,  
    },
    ReciverName:{
        type:String
    },
    ReciverMobile:{
        type:Number
    },
    ReciverDate:{
        type:String
    },
    ReciverTime:{
        type:String
    }
},{
timestamps:true
})
module.exports = mongoose.model("DocketDelivery",DocketDeliverySchema)