const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    adminId:{
        type:Number
    },
    GroupId:{
        type:Number,
      
    },
    Name:{
        type:String,
        
    },
    Email:{
        type:String,
       
    },
    Password:{
        type:String,
        
    },
  
  
    

},{
timestamps:true
})
module.exports = mongoose.model("admin",adminSchema)