const express = require("express")
const{CreateDocketDetails,getDocketDetails,deleteDocketByDocketId,searchDocketDetailsByDocketStatus,updateDocketByDocketId,getDocketDetailsByDocketStatus,SearchDocketDetailsByDocketId,getTodaysGeneratedDocketDetails}=require("../controller/docket_controller")
const router = express.Router()
router.route("/CreateDocketDetails").post(CreateDocketDetails )
// route http://192.168.43.220:37234/api/v1/docket/CreateDocketDetails
//method post
router.route("/getDocketDetails").get(getDocketDetails)
// route http://192.168.43.220:37234/api/v1/docket/getDocketDetails
//method get
router.route("/deleteDocket/:DocketId").delete(deleteDocketByDocketId)
// route http://192.168.43.220:37234/api/v1/docket/deleteDocket
//method delete
router.route("/updateDocket").put(updateDocketByDocketId)
// route http://192.168.43.220:37234/api/v1/docket/updateDocket
//method put
router.route("/SearchDocketDetailsByDocketId").post(SearchDocketDetailsByDocketId)
// route http://192.168.43.220:37234/api/v1/docket/SearchDocketDetailsByDocketId
//method get
router.route("/getDocketDetailsByDocketStatus").get(getDocketDetailsByDocketStatus)
// route http://192.168.43.220:37234/api/v1/docket/getDocketDetailsByDocketStatus
//method get
router.route("/getTodaysGeneratedDocketDetails").get(getTodaysGeneratedDocketDetails)
// route http://192.168.43.220:37234/api/v1/docket/getTodaysGeneratedDocketDetails
//method get
router.route("/searchDocketDetailsByDocketStatus").post(searchDocketDetailsByDocketStatus)
// route http://192.168.43.220:37234/api/v1/docket/searchDocketDetailsByDocketStatus
//method get

module.exports = router 