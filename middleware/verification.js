router.post('/register', (req, res) => {

    const secretToken = randomstring.generate();
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;

   

   req.checkBody('name','Name is required').notEmpty();
   req.checkBody('email','Email is required').notEmpty();
   req.checkBody('email', 'Email is not valid').isEmail();
   req.checkBody('username','username is required').notEmpty();
   req.checkBody('password','password is required').notEmpty();
   req.checkBody('cpassword','passwords do not match').equals(req.body.password);
   var errors = req.validationErrors();
   if(errors)
   {
       res.render('register', {
           errors: errors
       });
   }
   else
   {
    User.findOne({email: req.body.email}, function(err, existingUser)
    {
            if(existingUser)
            {
                req.flash('error_msg', 'Email address already exits try different one!!');
                res.redirect('/users/register');
                console.log("In db save body");
            }
            else
            {
            var newUser = new User(
                {
                    name:name,
                    email:email, 
                    username:username,
                    password:password,
                    secretToken:secretToken,
                    active: false
                });
      
            User.createUser(newUser, (err,user) => {
                  if(err) throw err;
                  console.log(user);
            });
            
            //Composing email
            const html = `Hi there
            <br/>
            Thank you for registering!
            <br/><br/>
            Please verify your email by typing following token:
            <br/>
            Token : <b>${secretToken}<b>
            <br/>
            On the following page : 
            <a href="https://login-app-passport.herokuapp.com/users/verify">
            https://login-app-passport.herokuapp.com/users/verify</a>
            <br/><br/>
            Have a good day!`;

            mailer.sendEmail('admin@teamfly.com',email,'Please verify your email',html);
            req.flash('success_msg','Please check your email');
            res.redirect('/users/login');
          }


    });
    }
    

}); 