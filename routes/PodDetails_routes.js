const express = require("express")

const {createPodDetails,getPodDetails,deletePODDetails,updatePodDetails,getPodDetailsByPodId} =require("../controller/podDetails_controller")

const router = express.Router()

router.route("/createPodDetails").post(createPodDetails)
// @url => http://192.168.43.220:5000/api/v1/createPodDetails
// @method => POST
router.route("/getPodDetails").get(getPodDetails)
// @url => http://192.168.43.220:5000/api/v1/getPodDetails
// @method => GET
router.route("/deletePODDetails/:PodId").delete(deletePODDetails)
// @url => http://192.168.43.220:5000/api/v1/deletePODDetails
// @method => DELETE
router.route("/updatePodDetails").put(updatePodDetails)
// @url => http://192.168.43.220:5000/api/v1/updatePodDetails
// @method => put
router.route("/getPodDetailsByPodId").post(getPodDetailsByPodId)
// @url => http://192.168.43.220:5000/api/v1/getPodDetailsByPodId
// @method => put

module.exports = router