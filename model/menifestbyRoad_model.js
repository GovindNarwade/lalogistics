const mongoose = require("mongoose")
const menifestbyroadSchema = mongoose.Schema({
    ModeTypeId:{
        type:String,
        
    },
    MenifestId:{
        type:Number,
       },
       BranchId:{
        type:String,
        
    },
    ToStationId:{
        type:String
    },
    DispatchDate:{
        type:String
    },
    DispatchTime:{
        type:String
    },
    VehicalNo:{
        type:String
    },
    DriverName:{
        type:String
    },
    VehicalType:{
        type:String
    }
      
},{
timestamps:true
})
module.exports = mongoose.model("menifestbyroad",menifestbyroadSchema)