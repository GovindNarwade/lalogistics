const address = require("../model/Address_model")
const state = require('../model/state_model')
const city = require('../model/city_model')
exports.CreateAddress = async(req,res)=>{
    try {
        const result = await address.create(req.body)
        res.json({
            success:true,
            message:"Create Address Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:`Something  went wrong `+{error},
            data:null
        })  
    }
}
exports.getAddressDetails = async(req,res)=>{
    try {
        const result = await address.aggregate([
            {
                $lookup:{
                    from:'cities',
                    localField:'Cityid',
                    foreignField:'Cityid',
                    as:"City"
                },
            },
            {
                
                    $lookup:{
                        from:'states',
                        localField:'StateId',
                        foreignField:'StateId',
                        as:"State"
                    }
                
            }
          
           
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Address Details",
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
exports.deleteAddress = async(req,res)=>{
    try {
        const result = await address.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Delete Address Details",
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
exports.updateAddress = async(req,res)=>{
    try {
        const result = await address.findByIdAndUpdate(req.params.id,
            req.body
        , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Address Details",
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
