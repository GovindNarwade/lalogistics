const mongoose = require("mongoose")

const stateSchema = mongoose.Schema({
    State:{
        type:String
    },
    isoCode:{
        type:String
    },
    countryCode:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
    StateId:{
        type:Number
    }

       

},{
timestamps:true
})
module.exports = mongoose.model("state",stateSchema)