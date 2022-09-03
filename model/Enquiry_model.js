const mongoose = require("mongoose")

const EnquirySchema = mongoose.Schema({
    Name:{
        type:String,   
    },
    Email:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true
    },
    Message:{
        type:String,    
    },

},{
timestamps:true
})
module.exports = mongoose.model("Enquiry",EnquirySchema)