const mongoose = require("mongoose")
require("colors")
const db = ()=>{
    try {
        mongoose.connect(process.env.URL)
        console.log("MONGO CONNECTED".bgRed.inverse);
    } catch (error) {
        console.log('DB MONGO ERROR:${error}');
        process.exit()
    }
}
module.exports = db