require('dotenv').config()
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport')
const User = require('../models/userModel')

passport.use(new GoogleStrategy({
    clientID: "433022499823-toggb0jo9khv04imdrh7mmmhvim5nh73.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done){
        console.log(profile)
        User.findOne({thirdPartyId: profile.id})
            .then((currentUser) => {
            
                if(currentUser){
                    done(null, currentUser)
                }
                else{
                    new User({
                        thirdPartyId: profile.id,
                        username: profile.given_name,
                        imageUrl: profile.picture,
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