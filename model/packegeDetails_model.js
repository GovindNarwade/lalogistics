const mongoose = require("mongoose")

const packageDetailSchema = mongoose.Schema({
    Volume:{type:String,},
    BoxType:{type:String,},
    AMB:{ type:String,},
    REF:{type:String,},
    FRZ:{ type:String, },
    DRYICE:{type:String,},
    Pkg:{type:String,},
    RequestedId:{type:Number,},
},{
timestamps:true
})
module.exports = mongoose.model("packageDetails",packageDetailSchema)