const express = require("express")

const {createPickupDetails,getpickageDetailsBydate,getPickupDetails,deletePickupDetails,getpickageDetailsByfield,updatePickupDetails,getpickageDetailsByRequestId,getpickageDetailsByAllocation,getpickageDetailsByAllocated} =require("../controller/pickupDetails_controller")

const {SendPickupDetails} = require("../controller/SendEmailtoSender")
const router = express.Router()

router.route("/createPickupDetails").post(createPickupDetails)
// @url => http://192.168.43.220:37234/api/v1/createPickupDetails
// @method => POST
router.route("/getPickupDetails").get(getPickupDetails)
// @url => http://192.168.43.220:37234/api/v1/getPickupDetails
// @method => GET
router.route("/getpickageDetailsByRequestId").post(getpickageDetailsByRequestId)
// @url => http://192.168.43.220:37234/api/v1/getpickageDetailsByRequestId
// @method => GET
router.route("/deletePickupDetails/:RequestedId").delete(deletePickupDetails)
// @url => http://192.168.43.220:37234/api/v1/deletePickupDetails
// @method => DELETE
router.route("/getpickageDetailsByfield").post(getpickageDetailsByfield)
// @url => http://192.168.43.220:37234/api/v1/getpickageDetailsByfield
// @method => DELETE
router.route("/updatePickupDetails").put(updatePickupDetails)
// @url => http://192.168.43.220:37234/api/v1/updatePickupDetails
// @method => put
router.route("/getpickageDetailsBydate").post(getpickageDetailsBydate)
// @url => http://192.168.43.220:37234/api/v1/getpickageDetailsBydate
// @method => put
router.route("/getpickageDetailsByPending").get(getpickageDetailsByAllocation)
// @url => http://192.168.43.220:37234/api/v1/getpickageDetailsByPending
// @method => put
router.route("/getpickageDetailsByAllocated").get(getpickageDetailsByAllocated)
// @url => http://192.168.43.220:37234/api/v1/getpickageDetailsByAllocated
// @method => put

router.route("/SendPickupDetailsToSender").post(SendPickupDetails)
// @url => http://192.168.43.220:37234/api/v1/SendPickupDetailsToSender
// @method => post
module.exports = router