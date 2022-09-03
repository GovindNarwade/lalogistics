const express = require("express")
const{createOfficeAdmin,getOfficeAdmin,deleteOfficeAdmin,updateOfficeAdmin,getSingleOfficeAdmin}=require("../controller/office_controller")
const router = express.Router()
router.route("/createOfficeAdmin").post(createOfficeAdmin)
// route http://192.168.43.220:5000/api/v1/officeAdmin/createOfficeAdmin
//method post
router.route("/getOfficeAdmin").get(getOfficeAdmin)
// route http://192.168.43.220:5000/api/v1/officeAdmin/getOfficeAdmin
//method get
router.route("/deleteOfficeAdmin/:id").delete(deleteOfficeAdmin)
// route http://192.168.43.220:5000/api/v1/officeAdmin/deleteOfficeAdmin
//method delete
router.route("/updateOfficeAdmin/:id").put(updateOfficeAdmin)
// route http://192.168.43.220:5000/api/v1/officeAdmin/updateOfficeAdmin
//method put
router.route("/getSingleOfficeAdmin/:id").get(getSingleOfficeAdmin)
// route http://192.168.43.220:5000/api/v1/officeAdmin/getSingleOfficeAdmin
//method put


module.exports = router 