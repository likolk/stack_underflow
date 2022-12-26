const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// loAD user model

const User = require('../model/Users');
const {model} = require('../model/');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match user
            console.log("start passport")
            model.users.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    return done(null, false, { message: 'This email is not registered' });
                }
                console.log("in the middle passport")
                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        console.log("ended passport")
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password incorrect' });
                    }
                });
            });
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        model.users.findOne({id:id}).then(result=>{
            if(result){
                return done(null, result);
            }
        });
    });
};