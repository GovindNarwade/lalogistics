const express = require("express")
const{createReportsDetails,getReportsDetails,deleteReportsDetails,updateReportsDetails}=require("../controller/Report_controller")
const router = express.Router()
router.route("/createReportsDetails").post(createReportsDetails )
// route http://192.168.43.220:5000/api/v1/createReportsDetails
//method post
router.route("/getReportsDetails").get(getReportsDetails)
// route http://192.168.43.220:5000/api/v1/getReportsDetails
//method get
router.route("/deleteReportsDetails/:JobId").delete(deleteReportsDetails)
// route http://192.168.43.220:5000/api/v1/deleteReportsDetails
//method delete
router.route("/updateReportsDetails").put(updateReportsDetails)
// route http://192.168.43.220:5000/api/v1/updateReportsDetails
//method put


module.exports = router 