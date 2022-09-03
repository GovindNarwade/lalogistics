const express = require("express")

const {createmenifestbytrain,getAllmenifestbytrain,deletemenifestbytrain,updatemenifestbytrainMenifestId} =require("../controller/menifestbytrain_controller")

const router = express.Router()

router.route("/createmenifestbytrain").post(createmenifestbytrain)
// @url => http://192.168.43.220:37234/api/v1/createmenifestbytrain
// @method => POST
router.route("/getAllmenifestbytrain").get(getAllmenifestbytrain)
// @url => http://192.168.43.220:37234/api/v1/getAllmenifestbytrain
// @method => GET
router.route("/deletemenifestbytrain/:MenifestId").delete(deletemenifestbytrain)
// @url => http://192.168.43.220:37234/api/v1/deletemenifestbytrain
// @method => DELETE
router.route("/updatemenifestbytrainMenifestId").put(updatemenifestbytrainMenifestId)
// @url =>http://192.168.43.220:37234/api/v1/updatemenifestbytrainMenifestId
// @method => put


module.exports = router