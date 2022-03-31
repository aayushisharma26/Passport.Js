const express=require("express")
const passport=require("passport")
const app=express()



var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "659572462265-nunnp2ccm492cu49f2821ihbhm85rclf.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile);
    return cb
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
















app.listen(4000,()=>{
    console.log("listeninng to the port....")

})

// {"web":{"client_id":"659572462265-nunnp2ccm492cu49f2821ihbhm85rclf.apps.googleusercontent.com","project_id":"avid-catalyst-326215","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:4000"],"javascript_origins":["http://localhost:4000"]}}