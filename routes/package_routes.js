const express = require("express")

const {createPackageDetails,getpackageDetailsByRequestId,deletepackageDetails,getAllpackageDetails} =require("../controller/package_controller")

const router = express.Router()

router.route("/createPackageDetails").post(createPackageDetails)
// @url => http://192.168.43.220:37234/api/v1/createPackageDetails
// @method => POST
router.route("/getpackageDetailsByRequesteId").get(getpackageDetailsByRequestId)
// @url => http://192.168.43.220:37234/api/v1/getpackageDetailsByRequesteId
// @method => GET
router.route("/getAllpackageDetails").get(getAllpackageDetails)
// @url => http://192.168.43.220:37234/api/v1/getAllpackageDetails
// @method => GET
router.route("/deletepackageDetails/:RequestedId").delete(deletepackageDetails)
// @url => //http://192.168.43.220:37234/api/v1/deletepackageDetails
// @method => DELETE


module.exports = router