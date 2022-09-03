const express = require("express")
const {getAllContents} =require("../controller/contents_controller")
const router = express.Router()
router.route("/getAllContents").get( getAllContents)
// route http://192.168.43.220:37234/api/v1/getAllContents
//method POST
module.exports = router