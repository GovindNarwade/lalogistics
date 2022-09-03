const express = require("express")
const DeliveryBoylogin =require("../controller/DeliveryBoy_login")
const router = express.Router()
router.route("/DeliveryBoylogin").post( DeliveryBoylogin)
// route http://192.168.43.220:37234/api/v1/DeliveryBoylogin
//method POST
module.exports = router