const express = require("express")
const{CreateBillingDetails,getBillingDetails,deleteBillingDetails,updateBillingDetails,getSingleBillingDetails}=require("../controller/billing_controller")
const router = express.Router()
router.route("/CreateBillingDetails").post(CreateBillingDetails)
// route http://192.168.43.220:5000/api/v1/billing/CreateBillingDetails
//method post
router.route("/getBillingDetails").get(getBillingDetails)
// route http://192.168.43.220:5000/api/v1/billing/getBillingDetails
//method get
router.route("/deleteBillingDetails/:BillingId").delete(deleteBillingDetails)
// route http://192.168.43.220:5000/api/v1/billing/deleteBillingDetails
//method delete
router.route("/updateBillingDetails").put(updateBillingDetails)
// route http://192.168.43.220:5000/api/v1/billing/updateBillingDetails
//method put
router.route("/getSingleBillingDetails").post(getSingleBillingDetails)
// route http://192.168.43.220:5000/api/v1/billing/getSingleBillingDetails
//method put

module.exports = router 