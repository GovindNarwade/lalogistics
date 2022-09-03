const express = require("express")
const Adminlogin =require("../controller/adminLogin_controller")
const router = express.Router()
router.route("/adminlogin").post( Adminlogin)
// route http://192.168.43.220:5000/api/v1/adminlogin
//method POST
module.exports = router