const mongoose = require("mongoose")

const GroupSchema = mongoose.Schema({
    GroupName:{
        type:String,
        
    },
    GroupId:{
        type:Number,
       
    },
},{
timestamps:true
})
module.exports = mongoose.model("Group",GroupSchema)