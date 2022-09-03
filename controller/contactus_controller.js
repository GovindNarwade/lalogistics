const contact = require("../model/contactus_model")
exports.createContactDetails = async(req,res)=>{
    try {
        const result = await contact.create(req.body)
        res.json({
            success:true,
            message:"create Contact Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}