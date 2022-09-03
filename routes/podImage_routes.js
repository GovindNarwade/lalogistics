const express = require("express")

const {addImageInPod,getPodImageByPodID,deletePodImageByPodImgId} =require("../controller/pod_Image_controller")
const upload = require("../middleware/uploads_middleware")

const router = express.Router()

router.route("/addImageInPod/PodImage").post(upload.single('file'),addImageInPod)
// @url => http://192.168.43.220:5000/api/v1/addImageInPod
// @method => POST
router.route("/getPodImageByPodID").post(getPodImageByPodID)
// @url => http://192.168.43.220:5000/api/v1/getPodImageByPodID
// @method => POST
router.route("/deletePodImageByPodImgId/:PodImageId").delete(deletePodImageByPodImgId)
// @url => http://192.168.43.220:5000/api/v1/deletePodImageByPodImgId
// @method => POST



module.exports = router