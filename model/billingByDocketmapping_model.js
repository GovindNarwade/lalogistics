const mongoose = require("mongoose")

const BillingByDocketSchema = mongoose.Schema({
  
DocketBillingId:{
    type:Number
},
    DocketId:{
        type:Number,  
    },
    BillingId:{
        type:Number,
       },
    

},{
timestamps:true
})
module.exports = mongoose.model("BillingByDocket",BillingByDocketSchema)