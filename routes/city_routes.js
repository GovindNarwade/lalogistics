const express = require("express")
const {getAllCity,getCityByStateId,deleteAllCity} =require("../controller/city_controller")
const router = express.Router()
router.route("/getAllCity").get( getAllCity)
// @url => http://192.168.43.220:37234/api/v1/getAllCity
// @method => GET
router.route("/getCityByStateId").post( getCityByStateId)
// @url => http://192.168.43.220:37234/api/v1/getCityByStateId
// @method => GET
router.route("/deleteMany").delete(deleteAllCity)
// @url => http://192.168.43.220:37234/api/v1/deleteMany
// @method => GET


module.exports = router