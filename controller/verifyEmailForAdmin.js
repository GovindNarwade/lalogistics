const admin = require("../model/admin_model")
const nodemailer =require("nodemailer")
const jwt = require("jsonwebtoken")
exports.VerifyEmail = async (req,res)=>{
    const email =await admin.findOne({Email:req.body.Email})
    const responseType = {};
if(email){
    const token = Math.floor((Math.random()*100000)+1)
console.log(token);
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
    subject :" Verification EmailId",
    html:`Hi There
    <br/>
    Thank you for registering!
    <br/><br/>
    Please verify your email by typing following token:
    <br/>
    Token : <b>${token}<b>
    <br/>
    On the following page : 
    <a href="https://lalogistics.herokuapp.com/api/v1/adminlogin">
    https://lalogistics.herokuapp.com/api/v1/adminlogin</a>
    <br/><br/>
    Have a good day!`
}
transporter.sendMail(mailOption, error => {
    error
    ? console.log(`EMAIL NOT SEND ${error}`)
    : console.log("EMAIL SEND");
  
});
responseType.statusText ='Success'
responseType.message = "Please check Your Email Id ";
}
else{
responseType.statusText ='error'
responseType.message = 'Email Id not Exit'; 
}

}