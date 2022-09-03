const mongoose = require("mongoose")

const statusSchema = mongoose.Schema({
    statusId:{
        type:Number
    },
    Status:{
        type:String
    },
},{
timestamps:true
})
module.exports = mongoose.model("status",statusSchema)