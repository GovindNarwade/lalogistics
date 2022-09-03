const express = require("express")

const {getAllmode} =require("../controller/mode_controller")

const router = express.Router()


router.route("/getAllmode").get(getAllmode)
// @url => http://192.168.43.220:37234/api/v1/getAllmode
// @method => GET


module.exports = router