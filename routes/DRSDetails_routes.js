const express = require("express")

const {createDRSDetails,getDRSdatawithrange,getDRSDetails,deleteDRSDetails,getSingleDRSDetails,updateDRSDetails,SearchDRSDetailsByDRSField} =require("../controller/DRSDetails_controller")

const router = express.Router()

router.route("/createDRSDetails").post(createDRSDetails)
// @url => http://192.168.43.220:37234/api/v1/DRS/createDRSDetails
// @method => POST
router.route("/getDRSDetails").get(getDRSDetails)
// @url => http://192.168.43.220:5000/api/v1/DRS/getDRSDetails
// @method => GET
router.route("/deleteDRSDetails/:DRSId").delete(deleteDRSDetails)
// @url => http://192.168.43.220:37234/api/v1/DRS/deleteDRSDetails
// @method => DELETE
router.route("/updateDRSDetails").put(updateDRSDetails)
// route http://192.168.43.220:37234/api/v1/DRS/updateDRSDetails
//method put
router.route("/getSingleDRSDetails").post(getSingleDRSDetails)
// route http://192.168.43.220:37234/api/v1/DRS/getSingleDRSDetails
//method get
router.route("/SearchDRSDetailsByDRSField").post(SearchDRSDetailsByDRSField)
// route http://192.168.43.220:37234/api/v1/DRS/SearchDRSDetailsByDRSField
//method get
router.route("/getDRSdatawithrange").post(getDRSdatawithrange)
// route http://192.168.43.220:37234/api/v1/DRS/getDRSdatawithrange
//method post


module.exports = router