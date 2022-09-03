const express = require("express")

const {CreateBillingbyDocketMapping,getAllBillingbyDocketMapping,deleteBillingbyDocketSMappingByDocketBillingId} =require("../controller/BillingByDocketMapping_controller")

const router = express.Router()

router.route("/CreateBillingbyDocketMapping").post(CreateBillingbyDocketMapping)
// @url => http://192.168.43.220:37234/api/v1/CreateBillingbyDocketMapping
// @method => POST
router.route("/getAllBillingbyDocketMapping").post(getAllBillingbyDocketMapping)
// @url => http://192.168.43.220:37234/api/v1/getAllBillingbyDocketMapping
// @method => GET
router.route("/deleteBillingbyDocketSMappingByDocketBillingId/:DocketBillingId").delete(deleteBillingbyDocketSMappingByDocketBillingId)
// @url => http://192.168.43.220:37234/api/v1/deleteBillingbyDocketSMappingByDocketBillingId
// @method => DELETE



module.exports = router