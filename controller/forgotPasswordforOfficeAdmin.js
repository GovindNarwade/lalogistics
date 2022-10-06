const officeAdmin = require("../model/office_model")
const nodemailer = require("nodemailer");
require("bcryptjs")
exports.emailSendforOfficeAdmin=async(req,res)=>{
  let data = await officeAdmin.findOne({Email:req.body.Email});
  console.log(req.body.Email);
  const responseType = {};
  if(data){
      let otpcode = Math.floor((Math.random()*10000)+1);
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
        subject :"forgot Password",
        text:`forgot Password using ${otpcode}`
    }
        transporter.sendMail(mailOption, error => {
            error
            ? console.log(`EMAIL NOT SEND ${error}`)
            : console.log("EMAIL SEND");
          
        });
    
      console.log(otpcode);
      responseType.statusText ='Success'
      responseType.message = `Please check Your Email Id ${otpcode}`;

  }
  else{
      responseType.statusText ='error'
      responseType.message = 'Email Id not Exit'; 
  }
 res.json(responseType)
 
}
exports.changePasswordforOfficeAdmin=async(req,res)=>{
  let  data = await officeAdmin.find({Email:req.body.Email,otp:req.body.otp});
  const responseType = {};
  if(data){
      let currentTime =new Date().getTime();
let diff =data.expireIn -currentTime;
if(diff <0){
   responseType.message= 'error'
   responseType.statusText ='Please Resend OTP'
}else{
 let emailexit = await officeAdmin.findOne({Email:req.body.Email})  
 emailexit.Password = req.body.Password
 emailexit.save();
 responseType.message ='Your Password Changed Successfully' 
 responseType.statusText = 'Success'
}
   }
   else{
       responseType.message= 'Invalid Otp'
       responseType.statusText ='Please Resend OTP'

   }
   
   res.json(responseType)
   
}



