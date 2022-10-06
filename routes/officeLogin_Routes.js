const express = require("express")
const officeLogin =require("../controller/officeLogin_controller")
const {emailSendforOfficeAdmin,changePasswordforOfficeAdmin} =require("../controller/forgotPasswordforOfficeAdmin")
const router = express.Router()
router.route("/officeLogin").post(officeLogin)
// route http://192.168.43.220:5000/api/v1/officeAdmin/createOfficeAdmin
//method post

router.route("/emailSendforOfficeAdmin").post(emailSendforOfficeAdmin)
// route http://192.168.43.220:5000/api/v1/emailSendforOfficeAdmin
//method post
router.route("/changePasswordforOfficeAdmin").post(changePasswordforOfficeAdmin)
// route http://192.168.43.220:5000/api/v1/changePasswordforOfficeAdmin
//method post


module.exports = router 