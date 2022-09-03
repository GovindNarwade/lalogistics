const express = require("express")
const{getHSNcodeDetails}=require("../controller/HSNCode_controller")
const router = express.Router()

router.route("/getHSNcodeDetails").get(getHSNcodeDetails)
// route http://192.168.43.220:37234/api/v1/getHSNcodeDetails
//method get



module.exports = router 