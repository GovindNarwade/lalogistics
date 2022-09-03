const mongoose = require("mongoose")

const ModeSchema = mongoose.Schema({
    ModeTypeId:{
        type:String,   
    },
    ModeTypeName:{
        type:String,

    },
    
},{
timestamps:true
})
module.exports = mongoose.model("ModeType",ModeSchema)