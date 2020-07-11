const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../models/User');
const passport = require('passport');
const cors = require('cors');
const {checkisauthenticated,checkisnotauthenticated} = require("../config/auth")
router.use(cors());
router.get("/login",checkisnotauthenticated,(request,response)=> {response.render("login")});

router.get("/register",checkisnotauthenticated,(request,response)=> {response.render("register")});

router.post("/register",(request,response)=>{
    const {email,username, password, password2} = request.body;
    session =request.session.id
    let errors = [];
    //error message handler
    if(!email || !username || !password || !password2){
        errors.push({msg:"please fill in all fields"});
    }
    if(password !== password2){
        errors.push({msg:"passwords do not match"});
    }
    if(password.length < 6){
        errors.push({msg:"password should at least be 6 characters"})
    }
    if(errors.length > 0){
        response.render("register",{email,username,errors})

    }    
    else{
        //passed valiadation
        User.findOne({username:username},function(error,user){

                if (user) {
                  if(user['email'] == email){
                    errors.push({ msg: 'Email already exists' });
                    response.render('register', {
                      errors,
                      username,
                      email,
                      password
                    });
                  }
                  else if (user['username'] == username ){
                    errors.push({ msg: 'Username already exists' });
                    response.render('register', {
                      errors,
                      username,
                      email,
                      password
                    });
                  }
                } 
                  else {                
                    const newUser = new User({
                      username,
                      email,
                      password,
                      sessionid:session
                    });
                    //hash password
                    bcrypt.genSalt(10,(err,salt)=>
                    bcrypt.hash(newUser.password,salt, (err,hash) => {
                    if(err){ throw err};
                    newUser.password = hash;
                    newUser.save()
                      .then(user => {
                        try{
                          User.create(newUser)}
                          catch(error){console.log(error)}
                        request.flash('success_msg','You are now registered !!') 
                        console.log(newUser);
                        response.redirect('login')
                      })
                      .catch(err => console.log(err));
                    }));
                }
               
            })
    }

});
next = function(request,response){
  response.redirect('/homepage')
}
const getuser = function(username){
  return username;
}
//login handler
router.post('/login',passport.authenticate('local',{
  failureRedirect: '~/users/login',
  failureFlash: true 
}),
(request,response,next)=>{
  let errors = []
  const session = request.session.id
  User.findOne({username:request.body.username},function(error,user){
    user.sessionid  = session;
    user.save();
    insession[user.sessionid] = user.username;
    response.redirect('/')
  })
})
router.post('/logout',checkisauthenticated,
(request,response)=>{request.logOut(); response.redirect('/')})


module.exports = router;