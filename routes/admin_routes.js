const express = require("express")

const {CreateAdminDetails,getAdmin,updateAdminDetails,getAdminDetailByEmail} =require("../controller/admin_controller")
const {VerifyEmail} =require("../controller/verifyEmailForAdmin")

const router = express.Router()

router.route("/Createadmin").post(CreateAdminDetails)
// @url => http://192.168.43.220:37234/api/v1/Createadmin
// @method => post
router.route("/getadmin").get( getAdmin)
// @url => http://192.168.43.220:37234/api/v1/getadmin
// @method => GET
router.route("/updateAdminDetails").post(updateAdminDetails)
// @url => http://192.168.43.220:37234/api/v1/updateAdminDetails
// @method => post
router.route("/VerifyEmail").post(VerifyEmail)
// @url => http://192.168.43.220:37234/api/v1/VerifyEmail
// @method => post
router.route("/getAdminDetailByEmail").post(getAdminDetailByEmail)
// route http://192.168.43.220:5000/api/v1/getAdminDetailByEmail
//method post
module.exports = router