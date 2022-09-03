const express = require("express")

const {CreateVehicalDetails,getAllVehicalDetails,deleteVehicalDetailsByMenifestId,getVehicalDetailsByMenifestId} =require("../controller/Vehical_controller")

const router = express.Router()

router.route("/CreateVehicalDetails").post(CreateVehicalDetails)
// @url => http://192.168.43.220:37234/api/v1/CreateVehicalDetails
// @method => POST
router.route("/getAllVehicalDetails").get(getAllVehicalDetails)
// @url => http://192.168.43.220:37234/api/v1/getAllVehicalDetails
// @method => GET
router.route("/deleteVehicalDetailsByMenifestId/:MenifestId").delete(deleteVehicalDetailsByMenifestId)
// @url => http://192.168.43.220:37234/api/v1/deleteVehicalDetailsByMenifestId
// @method => DELETE
router.route("/getVehicalDetailsByMenifestId").post(getVehicalDetailsByMenifestId)
// @url =>http://192.168.43.220:37234/api/v1/getVehicalDetailsByMenifestId
// @method => DELETE


module.exports = router