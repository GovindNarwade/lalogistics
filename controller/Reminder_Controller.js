const reminder = require("../model/customer_model")
const nodemailer = require("nodemailer")
const billing = require("../model/billing_model")
exports.SendReminder = async(req,res) =>{
        let data = await reminder.findOne({Email:req.body.Email})
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
              text:`Dear ${data.CustomerName},
              This is a notice that invoice ${data.INVOICE} which was originally generated on ${billing.InvoiceDate} has been updated.
              Your payment method :PayUmoney,
              Invoice : ${billing.INVOICE},
              Amount Due: ${billing.totalAmount},
              Due Date:28/09/2022 ,

              Invoice Items
               ${billing.Particular} (${billing.InvoiceDate}) ${billing.totalAmount}INR
                LateFee : (Added 02/09/2022) ₹567.00INR ,

                --------------------------------------------------------------

                Sub Total : ${billing.totalAmount}INR ,
                 Credit : 0.00INR ,
                 ToTal :${billing.totalAmount}INR
              
              ----------------------------------------------------------------
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