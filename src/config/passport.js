const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User');


passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email , passport, done ) => {
    //match email user
    
    const user = await User.findOne({email})
    if(!user){
        return done(null, false, {message : 'Not User found'});
    }else{
        // match password user
      const match = await user.descrypt(passport);
      if(match){
          return done(null, user);
      }else{
          return done(null, false, {message: 'Incorrect password'});  
      }
    }
}));

passport.serializeUser((user, done)=> {
    done(null,user.id);
});

passport.deserializeUser((id, done) =>{
    User.findById(id, (err, user)=> {
        done(err,user);
    })
})