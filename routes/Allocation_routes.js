const express = require("express")
const {CreateAllocation,getAllAllocation,deleteAllocation,updateAllocationbyAllocationId} =require("../controller/Allocation_controller")
const router = express.Router()
router.route("/CreateAllocation").post( CreateAllocation)
// @url => http://192.168.43.220:37234/api/v1/CreateAllocation
// @method => GET
router.route("/getAllAllocation").get(getAllAllocation)
// @url => http://192.168.43.220:37234/api/v1/getAllAllocation
// @method => GET
router.route("/deleteAllocationbyAllocationId/:AllocationId").delete(deleteAllocation)
// @url => http://192.168.43.220:37234/api/v1/deleteAllocationbyAllocationId
// @method => GET
router.route("/updateAllocationbyAllocationId").put(updateAllocationbyAllocationId)
// @url => http://192.168.43.220:37234/api/v1/updateAllocationbyAllocationId
// @method => GET


module.exports = router