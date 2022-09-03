const express = require("express")
const{createMenifestDetails,getMenifestDetails,deleteMenifestDetails,updateMenifestDetails,getSingleMenifestDetails,SearchMenifestDetailsByMenifestfield}=require("../controller/menifestDetails_controller")
const router = express.Router()
router.route("/CreateMenifestDetails").post( createMenifestDetails)
// route http://192.168.43.220:37234/api/v1/CreateMenifestDetails
//method post
router.route("/getMenifestDetails").get(getMenifestDetails)
// route http://192.168.43.220:37234/api/v1/getMenifestDetails
//method get
router.route("/deleteMenifestDetails/:MenifestId").delete(deleteMenifestDetails)
// route http://192.168.43.220:37234/api/v1/deleteMenifestDetails
//method delete
router.route("/updateMenifestDetails").put(updateMenifestDetails)
// route http://192.168.43.220:37234/api/v1/updateMenifestDetails
//method put
router.route("/SingleMenifestDetails").post(getSingleMenifestDetails)
// route http://192.168.43.220:37234/api/v1/SingleMenifestDetails
//method put
router.route("/SearchMenifestDetailsByMenifestfield").post(SearchMenifestDetailsByMenifestfield)
// route http://192.168.43.220:37234/api/v1/SearchMenifestDetailsByMenifestfield
//method put
module.exports = router 