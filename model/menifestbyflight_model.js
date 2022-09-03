const mongoose = require("mongoose")
const menifestbymodeSchema = mongoose.Schema({
    ModeTypeId:{
        type:String,
        
    },
    MenifestId:{
        type:Number,
       },
       Airline:{
        type:String
       },
       AirlineAwb:{
        type:String
       },
       Flight:{
        type:String
       },
       AirlineAwbFreight:{
        type:String
       },
       AirlineAwbPcs:{
        type:String
       },
       AirlineAwbDate:{
        type:String
       },
       AirlineAwbWeight:{
        type:String
       }
},{
timestamps:true
})
module.exports = mongoose.model("menifestbymode",menifestbymodeSchema)