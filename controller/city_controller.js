const city = require("../model/city_model")
const state = require("../model/state_model")
exports.getAllCity = async(req,res)=>{
    try {
        const result = await city.find()
        res.json({
            count:result.length,
            success:true,
            message:"All city with their State",
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
exports.getCityByStateId = async(req,res)=>{
    try {
const {StateId} = req.body
        const result = await city.find({StateId})
        res.json({
            count:result.length,
            success:true,
            message:"get City By StateId",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}
exports.deleteAllCity = async(req,res)=>{
    try {
        const result = await city.deleteMany()
        res.json({
            success:true,
            message:" Delete All city ",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}