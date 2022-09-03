const mongoose = require("mongoose")
const billingItemSchema = mongoose.Schema({
    billingItemId:{
        type:Number
    },
    INVOICE:{
        type:Number
    },
Particular:{
    type:String
},
HSNCodeId:{
    type:Number
},
NONTAXBLEVALUE:{
    type:String
},
TAXBLEVALUE:{
    type:String
},

CGSTPer:{
        type:Number
    },
CGSTAmount:{
        type:Number
    },
SGSTPer:{
    type:Number 
},
SGSTAmount:{
    type:Number 
},
    
IGSTPer:{
    type:Number
   
},
IGSTAmount:{
    type:Number
},

},{
    timestamps:true
    })
    module.exports = mongoose.model("billingItem",billingItemSchema)