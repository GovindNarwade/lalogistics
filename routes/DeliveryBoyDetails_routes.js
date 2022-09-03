const express = require("express")
const{CreateDeliveryBoyDetails,getDeliveryBoyDetails,deleteDeliveryBoyDetails,updateDeliveryBoyDetails,getSingleDeliveryBoyDetails}=require("../controller/DeliveryBoyDetails_controlller")
const router = express.Router()
const upload =require("../middleware/uploads_middleware")
router.route("/CreateDeliveryBoyDetails").post(upload.single('file'),CreateDeliveryBoyDetails )
// route http://192.168.43.220:5000/api/v1/CreateDeliveryBoyDetails
//method post
router.route("/getDeliveryBoyDetails").get(getDeliveryBoyDetails)
// route http://192.168.43.220:5000/api/v1/getDeliveryBoyDetails
//method get
router.route("/deleteDeliveryBoyDetails/:DeliveryBoyId").delete(deleteDeliveryBoyDetails)
// route http://192.168.43.220:5000/api/v1/deleteDeliveryBoyDetails
//method delete
router.route("/updateDeliveryBoyDetails").put(updateDeliveryBoyDetails)
// route http://192.168.43.220:5000/api/v1/updateDeliveryBoyDetails
//method put
router.route("/getSingleDeliveryBoyDetails").post(getSingleDeliveryBoyDetails)
// route http://192.168.43.220:5000/api/v1/getSingleDeliveryBoyDetails
//method get

module.exports = router