const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    CustomerId:{
        type:String,
    },
    CustomerName:{
     type:String,
    },
    Email:{
        type:String,
      
    },
    Mobile:{
        type:Number, 
    },
    
    BillingAddress:{
        type:String,
        
    },
   
    CompanyName:{
        type:String,
        
    },
    GstNo:{
        type:String,
        
    },
    StateId:{
        type:Number
    },
    Cityid:{
        type:String
    },
    Pincode:{
        type:Number,
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
},{
timestamps:true
})
module.exports = mongoose.model("customer",customerSchema)