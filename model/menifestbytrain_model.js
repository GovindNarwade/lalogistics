const mongoose = require("mongoose")
const menifestbytrainSchema = mongoose.Schema({
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
    TrainNo:{
        type:String
    },
    DispatchDate:{
        type:String
    },
    DispatchTime:{
        type:String
    },
    TrainName:{
        type:String
    }
      
},{
timestamps:true
})
module.exports = mongoose.model("menifestbytrain",menifestbytrainSchema)