const express = require("express")
const {updateGruopDetails,getSingleGruopDetails,deleteGruopDetails,getGruopDetails,createGruopDetails}=require("../controller/Group_controller")
const router = express.Router()
router.route("/createGruopDetails").post(createGruopDetails )
// route http://192.168.43.220:37234/api/v1/createGruopDetails
//method post
router.route("/getGruopDetails").get(getGruopDetails)
// route http://192.168.43.220:37234/api/v1/getGruopDetails
//method get
router.route("/deleteGruopDetails/:id").delete(deleteGruopDetails)
// route http://192.168.43.220:37234/api/v1/deleteGruopDetails
//method delete
router.route("/updateGruopDetails/:id").put(updateGruopDetails)
// route http://192.168.43.220:37234/api/v1/updateGruopDetails
//method put
router.route("/getSingleGruopDetails/:GroupId").get(getSingleGruopDetails)
// route http://192.168.43.220:37234/api/v1/getSingleGruopDetails
//method get

module.exports = router 