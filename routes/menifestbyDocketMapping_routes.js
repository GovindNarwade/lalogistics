const express = require("express")

const {CreateMenifestDocketMapping,getAllMenifestDocketMappingByMenifestId,deleteMenifestDocketMappingByuniqueId} =require("../controller/DocketMenifest_controller")

const router = express.Router()

router.route("/CreateMenifestDocketMapping").post(CreateMenifestDocketMapping)
// @url => http://192.168.43.220:37234/api/v1/CreateMenifestDocketMapping
// @method => POST
router.route("/getAllMenifestDocketMappingByMenifestId").post(getAllMenifestDocketMappingByMenifestId)
// @url => http://192.168.43.220:37234/api/v1/getAllMenifestDocketMappingByMenifestId
// @method => GET
router.route("/deleteMenifestDocketMappingByuniqueId/:UniqueId").delete(deleteMenifestDocketMappingByuniqueId)
// @url => http://192.168.43.220:37234/api/v1/deleteMenifestDocketMappingByuniqueId
// @method => DELETE



module.exports = router