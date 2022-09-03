const express = require("express")
const{AddbillingItems,getAllbillingItembyInvoiceId,deleteBillingItemDetails,updateBillingDetails}=require("../controller/billing_item_controller")
const router = express.Router()
router.route("/AddbillingItems").post(AddbillingItems)
// route http://192.168.43.220:37234/api/v1/AddbillingItems
//method post
router.route("/getAllbillingItembyInvoiceId").post(getAllbillingItembyInvoiceId)
// route http://192.168.43.220:37234/api/v1/getAllbillingItembyInvoiceId
//method get
router.route("/deleteBillingItemDetails/:billingItemId").delete(deleteBillingItemDetails)
// route http://192.168.43.220:37234/api/v1/deleteBillingDetails
//method delete
router.route("/updateBillingItemDetails").put(updateBillingDetails)
// route http://192.168.43.220:37234/api/v1/updateBillingItemDetails
//method put


module.exports = router 