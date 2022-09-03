const express = require("express")

const {getdatawithrange} =require("../controller/date_range_controller")

const router = express.Router()


router.route("/getdatawithrange").post( getdatawithrange)
// @url => http://192.168.43.220:37234/api/v1/getdatawithrange
// @method => GET


module.exports = router