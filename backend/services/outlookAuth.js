require('dotenv').config()
const OutlookStrategy = require( 'passport-outlook' ).Strategy;
const passport = require('passport')
const User = require('../models/userModel')

passport.use(new OutlookStrategy({
    clientID: "1796b62c-51b5-41a3-bb4b-3cbd15f5f5e1",
    clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
    callbackURL: process.env.OUTLOOK_CALLBACK_URL,
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
      
        User.findOne({thirdPartyId: profile.id})
            .then((currentUser) => {
                if(currentUser){
                    done(null, currentUser)
                }
                else{
                    new User({
                        thirdPartyId: profile.id,
                        username: profile.displayName,
                    })
                        .save()
                        .then((newUser) => {done(null, newUser)})
                }
            })
       
        
  }
));

passport.serializeUser((user,done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) =>{
    done(null, user)
})