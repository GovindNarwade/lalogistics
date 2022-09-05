const reminder = require("../model/customer_model")
const nodemailer = require("nodemailer")
const billing = require("../model/billing_model")
exports.SendReminder = async(req,res) =>{
       let data = await  reminder.findOne({Email:req.body.Email})
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
              to :req.body.Email ,
              subject :"Reminder for Billing",
              text:`Dear ${data.Customer.CustomerName},
              This is a notice that invoice ${data.INVOICE} which was originally generated on ${data.InvoiceDate} .
              Your payment method :PayUmoney,
              Invoice : ${data.INVOICE},
              Amount : ${data.totalAmount},
            
                --------------------------------------------------------------
                    Invoice Items
                   ${data.Particular} (${data.InvoiceDate}) ${data.totalAmount}INR
  
                --------------------------------------------------------------
                        ToTal :${data.totalAmount}INR
                ---------------------------------------------------------------
              Best Regards 
              LALogistics`

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