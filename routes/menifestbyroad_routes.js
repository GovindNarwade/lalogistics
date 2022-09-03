const express = require("express")

const {createmenifestbyroad,getAllmenifestbyroad,deletemenifestbyroad,updatemenifestbyroadMenifestId} =require("../controller/menifestbyRoad_controller")

const router = express.Router()

router.route("/createmenifestbyroad").post(createmenifestbyroad)
// @url => http://192.168.43.220:37234/api/v1/createmenifestbyroad
// @method => POST
router.route("/getAllmenifestbyroad").get(getAllmenifestbyroad)
// @url => http://192.168.43.220:37234/api/v1/getAllmenifestbyroad
// @method => GET
router.route("/deletemenifestbyroad/:MenifestId").delete(deletemenifestbyroad)
// @url => http://192.168.43.220:37234/api/v1/deletemenifestbyroad
// @method => DELETE
router.route("/updatemenifestbyroadMenifestId").put(updatemenifestbyroadMenifestId)
// @url =>http://192.168.43.220:37234/api/v1/updatemenifestbyroadMenifestId
// @method => put


module.exports = router