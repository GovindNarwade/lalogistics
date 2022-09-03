const express = require("express")
const {CreateDocketDeliveryDetails,getAllDocketDelivery} =require("../controller/DocketDelivery_controller")
const router = express.Router()
router.route("/getAllDocketDelivery").get( getAllDocketDelivery)
// @url => http://192.168.43.220:37234/api/v1/getAllDocketDelivery
// @method => GET
router.route("/CreateDocketDeliveryDetails").post( CreateDocketDeliveryDetails)
// @url => http://192.168.43.220:37234/api/v1/CreateDocketDeliveryDetails
// @method => GET


module.exports = router