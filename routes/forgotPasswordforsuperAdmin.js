const express = require("express")
const{emailSend,changePassword}=require("../controller/forgotPasswordforsuperAdmin")
const router = express.Router()


router.route("/emailSend").post(emailSend)
// route http://192.168.43.220:5000/api/v1/forgotPassword/emailSend
//method get
router.route("/changePassword").post(changePassword)
// route http://192.168.43.220:5000/api/v1/changePassword
//method get

module.exports = router 