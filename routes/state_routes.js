const express = require("express")
const {getStateWithCity,getAllState} =require("../controller/state_controller")
const router = express.Router()
router.route("/getStateWithCity").get( getStateWithCity)
// @url => http://192.168.43.220:37234/api/v1/getStateWithCity
// @method => GET
router.route("/getAllState").get( getAllState)
// @url => http://192.168.43.220:37234/api/v1/getAllState
// @method => GET

module.exports = router