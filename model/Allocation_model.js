const mongoose = require("mongoose")

const AllocationSchema = mongoose.Schema({
    AllocationId:{
        type:Number
    },
    RequestedId:{
        type:Number,
        
    },
    Date:{
        type:String
    },
    Time:{
        type:String
    },
    AllocateToId:{
        type:String
    },
    Remark:{
        type:String
    }
},{
timestamps:true
})
module.exports = mongoose.model("allocation",AllocationSchema)