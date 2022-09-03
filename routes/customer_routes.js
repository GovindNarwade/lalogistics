const express = require("express")
const{CreateCustomer,deleteCustomer,getCustomer,updateCustomer,getSingleCustomer}=require("../controller/customer_controller")
const{SendReminder}=require("../controller/Reminder_Controller")
const router = express.Router()
router.route("/CreateCustomer").post(CreateCustomer )
// route http://192.168.43.220:5000/api/v1/customer/CreateCustomer
//method post
router.route("/getCustomer").get(getCustomer)
// route http://192.168.43.220:5000/api/v1/customer/getCustomer
//method get
router.route("/deleteCustomer/:CustomerId").delete(deleteCustomer)
// route http://192.168.43.220:5000/api/v1/customer/deleteCustomer
//method delete
router.route("/updateCustomer").put(updateCustomer)
// route http://192.168.43.220:5000/api/v1/customer/updateCustomer
//method put
router.route("/getSingleCustomer").post(getSingleCustomer)
// route http://192.168.43.220:5000/api/v1/customer/getSingleCustomer
//method put
router.route("/SendReminder").post(SendReminder)
// route http://192.168.43.220:5000/api/v1/customer/SendReminder
//method put

module.exports = router 