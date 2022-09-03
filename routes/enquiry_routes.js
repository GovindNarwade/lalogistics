const express = require("express")

const {createEnquiry,getEnquiry,deleteEnquiry} =require("../controller/enquiry_controller")

const router = express.Router()

router.route("/createEnquiry").post(createEnquiry)
// @url => http://192.168.43.220:5000/api/v1/enquiry/createEnquiry
// @method => POST
router.route("/getEnquiry").get(getEnquiry)
// @url => http://192.168.43.220:5000/api/v1/enquiry/getEnquiry
// @method => GET
router.route("/deleteEnquiry").delete(deleteEnquiry)
// @url => http://192.168.43.220:5000/api/v1/enquiry/deleteEnquiry
// @method => DELETE


module.exports = router