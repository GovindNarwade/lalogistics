const mongoose = require("mongoose")
const officeSchema = mongoose.Schema({
    BranchId:{
        type:String,
        
    },
    AdminName:{
        type:String,
        
    },
    Email:{
        type:String,
      
    },
    Mobile:{
        type:Number,
        
    },
    Role:{
        type:String,
       },
    Password:{
        type:String,
        
    },
    Address:{
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
    isDeleted:{
        type:Boolean,
        default:false
    },
},{
timestamps:true
})
module.exports = mongoose.model("officeAdmin",officeSchema)