const express = require("express")

const {CreateDriverDetails,getAllDriverDetails,deleteDriverDetailsByMenifestId,getDriverDetailsByMenifestId} =require("../controller/driver_controller")

const router = express.Router()

router.route("/CreateDriverDetails").post(CreateDriverDetails)
// @url => http://192.168.43.220:37234/api/v1/CreateDriverDetails
// @method => POST
router.route("/getAllDriverDetails").get(getAllDriverDetails)
// @url => http://192.168.43.220:37234/api/v1/getAllDriverDetails
// @method => GET
router.route("/deleteDriverDetailsByMenifestId/:MenifestId").delete(deleteDriverDetailsByMenifestId)
// @url => http://192.168.43.220:37234/api/deleteDriverDetailsByMenifestId
// @method => DELETE
router.route("/getDriverDetailsByMenifestId").post(getDriverDetailsByMenifestId)
// @url => http://192.168.43.220:37234/api/getDriverDetailsByMenifestId
// @method => DELETE


module.exports = router