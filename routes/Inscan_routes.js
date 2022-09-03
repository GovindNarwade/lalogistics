const express = require("express")
const{updateInscanDetails,getSingleInscanDetails,deleteInscanDetails,getInscanDetails,SearchInscanDetailsByDispatchDate,createInscanDetails,SearchInscanDetailsByInscanField}=require("../controller/Inscan_Controller")
const router = express.Router()
router.route("/CreateInscanDetails").post(createInscanDetails )
// route http://192.168.43.220:5000/api/v1/CreateInscanDetails
//method post
router.route("/getInscanDetails").get(getInscanDetails)
// route http://192.168.43.220:5000/api/v1/getInscanDetails
//method get
router.route("/deleteInscanDetailsByInscanId/:InscanId").delete(deleteInscanDetails)
// route http://192.168.43.220:5000/api/v1/deleteInscanDetailsByInscanId
//method delete
router.route("/updateInscanDetailsByInscanId").post(updateInscanDetails)
// route http://192.168.43.220:5000/api/v1/updateInscanDetailsByInscanId
//method put
router.route("/getSingleInscanDetailsInscanId").post(getSingleInscanDetails)
// route http://192.168.43.220:5000/api/v1/getSingleInscanDetailsInscanId
//method post
router.route("/SearchInscanDetailsByInscanField").post(SearchInscanDetailsByInscanField)
// route http://192.168.43.220:5000/api/v1/SearchInscanDetailsByInscanField
//method post
router.route("/SearchInscanDetailsByDispatchDate").post(SearchInscanDetailsByDispatchDate)
// route http://192.168.43.220:5000/api/v1/SearchInscanDetailsByDispatchDate
//method post
module.exports = router 