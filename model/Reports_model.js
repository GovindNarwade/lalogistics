const mongoose = require("mongoose")

const ReportSchema = mongoose.Schema({
    JobId:{
        type:Number,
       },
       CustomerId:{
        type:String,
    },
    AllocationId:{
        type:Number
    },
    BranchId:{
        type:String,
        
    },
    RequestedId:{
        type:Number,
        
    }, 
    

},{
timestamps:true
})
module.exports = mongoose.model("report",ReportSchema)
