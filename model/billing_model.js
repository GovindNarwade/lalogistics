const mongoose = require("mongoose")
const billingSchema = mongoose.Schema({
    BillingId:{
        type:Number
    },
    CustomerId:{
        type:String,
        
    },
    INVOICE:{
        type:Number
    },
    InvoiceDate:{
        type:String
    },
    INVOICEDuration:{
        type:String
    },
    PlaceofSupply:{
        type:String
    },
    totalNonTaxableAmount:{
        type:Number
    },
    totalTaxableAmount:{
        type:Number
    },
    totalTax:{
        type:Number
    },
    totalAmount:{
        type:Number
    },
    BillingReminder:{
        type:String
    },
    weeklyreminderDate:{
        type:String
    }
},{
timestamps:true
})
module.exports = mongoose.model("billing",billingSchema)