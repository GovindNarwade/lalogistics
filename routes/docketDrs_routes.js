const express = require("express")

const {CreateDocketDRSMapping,getAllDocketDRSMapping,deleteDocketDRSMappingByDocketDRSId} =require("../controller/DocketDrs_mapping_controller")

const router = express.Router()

router.route("/CreateDocketDRSMapping").post(CreateDocketDRSMapping)
// @url => http://192.168.43.220:37234/api/v1/CreateDocketDRSMapping
// @method => POST
router.route("/getAllDocketDRSMappingByDRSId").post(getAllDocketDRSMapping)
// @url => http://192.168.43.220:37234/api/v1/getAllDocketDRSMappingByDRSId
// @method => GET
router.route("/deleteDocketDRSMappingByDocketDRSId/:DocketDRSId").delete(deleteDocketDRSMappingByDocketDRSId)
// @url => http://192.168.43.220:37234/api/v1/deleteDocketDRSMappingByDocketDRSId
// @method => DELETE



module.exports = router