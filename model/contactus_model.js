const mongoose = require("mongoose")

const contactusSchema = mongoose.Schema({
  
    Name:{
        type:String,
    },
    Email:{
        type:String,
    },
    Mobile:{
        type:Number,
    },
    Message:{
        type:String,
    }
  
    

},{
timestamps:true
})
module.exports = mongoose.model("contactus",contactusSchema)