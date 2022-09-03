const mongoose = require("mongoose")

const HSNSchema = mongoose.Schema({
    HSNCodeId:{
        type:Number
    },
    HSNCodeName:{
        type:String
    },
    HSNCode:{
        type:Number
    }
},{
timestamps:true
})
module.exports = mongoose.model("HSNCode",HSNSchema)