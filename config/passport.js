const localStrategy = require("passport-local").Strategy;
const User = require("../app/models/userModel");
const config = require("./config");
const bcrypt = require("bcryptjs");

module.exports = (passport) => {
  //  Local Strategy
  passport.use(
    new localStrategy((username, password, done) => {
      //   match username
      let query = { username: username };
      User.findOne(query, (err, user) => {
        if (err) throw err;
        if (!user) {
          console.log("user not found");
          return done(null, false, { message: "User not found" });
        }
        // match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            console.log(user);
            return done(null, user);
          } else {
            console.log("password is incorrect");
            return done(null, false, { messages: "passwordn is incorrect" });
          }
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
