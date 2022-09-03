const express = require("express")

const {createmenifestbymode,getAllmenifestbymode,deletemenifestbymode,updatemenifestbyMenifestId} =require("../controller/menifestbyflight_controller")

const router = express.Router()

router.route("/createmenifestbymode").post(createmenifestbymode)
// @url => http://192.168.43.220:37234/api/v1/createmenifestbymode
// @method => POST
router.route("/getAllmenifestbymode").get(getAllmenifestbymode)
// @url => http://192.168.43.220:37234/api/v1/getAllmenifestbymode
// @method => GET
router.route("/deletemenifestbymode/:MenifestId").delete(deletemenifestbymode)
// @url => http://192.168.43.220:37234/api/v1/deletemenifestbymode
// @method => DELETE
router.route("/updatemenifestbyMenifestId").put(updatemenifestbyMenifestId)
// @url =>http://192.168.43.220:37234/api/v1/updatemenifestbyMenifestId
// @method => DELETE


module.exports = router