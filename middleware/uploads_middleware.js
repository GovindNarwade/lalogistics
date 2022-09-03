const multer = require("multer")
const path = require("path");
const storage = multer.diskStorage({
    destination : function (req , file, cb){
        cb(null , "public/uploads")
    },
    filename : function(req , file, cb){
        // const ext = path.extname(file.originalname)
        console.log(file);
        const fn = "profile-pic-" + Date.now() +  path.extname(file.originalname);
        req.body.file = "uploads/" + fn;
        cb(null , fn );
    }
})
const upload = multer({storage : storage})
module.exports = upload