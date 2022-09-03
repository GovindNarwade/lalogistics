const mongoose = require("mongoose")

const contentSchema = mongoose.Schema({
  
    ContentId:{
        type:Number
    },
    ContentName:{
        type:String
    }
  
    

},{
timestamps:true
})
module.exports = mongoose.model("content",contentSchema)