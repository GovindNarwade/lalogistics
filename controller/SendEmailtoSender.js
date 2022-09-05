const pickupDetails = require("../model/PickupDetails_model")
const nodemailer = require("nodemailer")
exports.SendPickupDetails = async(req,res) =>{
        let data = await pickupDetails.findOne({SenderEmail:req.body.SenderEmail}).$where({})
        const responseType = {};
        if(data){
            var  transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user:"icaet20@nmiet.edu.in",
                pass:"Bonybaba125@",
              },
            });
          var mailOption = {
              from:"icaet20@nmiet.edu.in",
              to :req.body.SenderEmail ,
              subject :"Sample Pickup",
              text:`Subject: ${data.ContentName} on ${data.Date} at ${data.Time} from
              
            ------------------------------------------------------

            PICKUP Time : ${data.PickupTime},
            PACKAGING REQUIRED :   Required ,
            PICKUP LOCATION :${data.Consignee}
            CONTACT PERSON NAME :${data.PickupRegistered},
            CONTACT PERSON NUMBER :${data.PickupRegisteredNumber},
            DELIVERY LOCATION : ${data.Customer}

            -------------------------------------------------------

            Thanks & Regards,
            Team- LAlogistics
        `

          }
              transporter.sendMail(mailOption, error => {
                  error
                  ? console.log(`EMAIL NOT SEND ${error}`)
                  : console.log("EMAIL SEND");
                
              });
              responseType.statusText ='Success'
             responseType.message = `Please check Your Email Id`;
            }
            else{
                responseType.statusText ='error'
                responseType.message = 'Email Id not Exit'; 
            }
            res.json(responseType)
   
}