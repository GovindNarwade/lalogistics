const express = require("express")
const {createContactDetails} =require("../controller/contactus_controller")
const router = express.Router()
router.route("/createContactDetails").post( createContactDetails)

module.exports = router