const express = require("express")
const {getAllStatus,CreateStatus} =require("../controller/status_controller")
const router = express.Router()
router.route("/getAllStatus").get( getAllStatus)
// @url => http://192.168.43.220:37234/api/v1/getAllStatus
// @method => GET
router.route("/CreateStatus").post( CreateStatus)
// @url => http://192.168.43.220:37234/api/v1/CreateStatus
// @method => GET


module.exports = router