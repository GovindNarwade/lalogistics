const express = require("express")
const{CreateAddress,getAddressDetails,deleteAddress,updateAddress}=require("../controller/Address_controller")
const router = express.Router()
router.route("/CreateAddress").post(CreateAddress )
// route http://192.168.43.220:37234/api/v1/CreateAddress
//method post
router.route("/getAddressDetails").get(getAddressDetails)
// route http://192.168.43.220:37234/api/v1/getAddressDetails
//method get
router.route("/deleteAddress/:id").delete(deleteAddress)
// route http://192.168.43.220:37234/api/v1/deleteAddress
//method delete
router.route("/updateAddress/:id").put(updateAddress)
// route http://192.168.43.220:37234/api/v1/updateAddress
//method put


module.exports = router 