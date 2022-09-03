const mongoose = require("mongoose")
const menifestDetailsSchema = mongoose.Schema({
    ModeTypeId:{
        type:String,
        
    },
    FreightMemo:{
        type:String,
      
    },
    BranchId:{
        type:String,
        
    },
    MenifestId:{
        type:Number,
       },
    DispatchDate:{
        type:String,
        
    },
    DispatchTime:{
        type:String,
        
    },
    VendorId:{
        type:String,
        
    },
   
   ToStationId:{
    type:String
   },
    EwBDate:{
        type:String,
        
    },
    LoadingPersion:{
        type:String,
        
    },
   
    Remark:{
        type:String,
        
    },
    isDeleted:{
        type:Boolean,
        default:false
    },

},{
timestamps:true
})
module.exports = mongoose.model("menifestDetails",menifestDetailsSchema)