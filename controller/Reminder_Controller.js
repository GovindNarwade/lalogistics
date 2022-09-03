const reminder = require("../model/customer_model")
const billing = require("../model/billing_model")
const nodemailer = require("nodemailer")
exports.SendReminder = async(req,res) =>{
        let data = await billing.Customer.findOne({Email:req.body.Email})
        let billingData =  await billing.find()
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
              This is a notice that invoice ${billingData.INVOICE} which was originally generated on ${billingData.InvoiceDate} has been updated.
              Your payment method :PayUmoney,
              Invoice : ${billingData.INVOICE},
              Amount Due: ${billingData.totalAmount},
              Due Date:28/09/2022 ,

              Invoice Items
               ${billingData.Particular} (${billingData.InvoiceDate}) ${billingData.totalAmount}INR
                LateFee : (Added 02/09/2022) ₹567.00INR ,

                --------------------------------------------------------------

                Sub Total : ${billingData.totalAmount}INR ,
                 Credit : 0.00INR ,
                 ToTal :${billingData.totalAmount}INR
              
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