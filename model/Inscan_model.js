const mongoose = require("mongoose")
const InscanDetailsSchema = mongoose.Schema({
    InscanId:{
        type:Number
    },
    BranchId:{
        type:String,
        
    },
    GrowdownId:{
        type:String,
      
    },
    DispatchOn:{
        type:String,
        
    },
    MenifestId:{
        type:Number,
       },
    FromStationId:{
        type:String,
        
    },
    ArrivalKM:{
        type:String,
        
    },
    ModeTypeId:{
            type:String,
            
        },
        RevicedTime:{
            type:String,
        },
        RevicedDate:{
            type:String
        },
        ArrivalTrough:{
            type:String,
            
        },
        UnLoadingPersion:{
            type:String,
            
        },
       
        Remark:{
            type:String,
            
        },
        Driver:{
            type:String,
            
        },
        Mobile:{
            type:Number
        },
        isDeleted:{
            type:Boolean,
            default:false
        },

},{
timestamps:true
})
module.exports = mongoose.model("InscanDetails",InscanDetailsSchema)