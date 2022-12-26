// route: /users
/** Express router providing user related routes
 * @module routes/users
 * @requires express
 * @requires path
 * @requires fs-extra
 * @requires ../config/auth
 * @requires express-ejs-layouts
 * @requires mongoose
 * @requires express-session
 * @requires bcryptjs
 * @requires passport
 * @requires ../model
 * @requires multer
 * @requires express-fileupload
 * @requires dotenv
 * @requires nodemailer
 */

const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs-extra");
const { ensureAuthenticated } = require('../config/auth');
const expresslayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash   = require('connect-flash');
const session   =  require('express-session');
const bcrypt = require("bcryptjs");
const passport = require('passport');
module.exports = router;
const {model} = require("../model");
const multer = require("multer")
const fileUpload = require('express-fileupload');
// env
require("dotenv").config();
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// we will store the email and the password in an env file
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
 
let mailDetails = {
    from: "kelvin.likollari@usi.ch",
    to: process.env.EMAIL,
    subject: 'Test mail',
    text: 'Reset Password????'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});


/**
 * Route for initial registration and login screen.
 * @name get/users/
 * @function
 */
router.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        console.log("we are here")
        res.render("index", { 'logged': req.isAuthenticated() });
    } else {
        console.log("we are in the e;lse");
        res.render("welcome");
    };
});

/**
 * Route for login form.
 * @name get/users/login
 * @function
 */
router.get("/login", (req, res) => {
    if (req.isAuthenticated()) {
        console.log("we are here")
        res.render("/");
    } else {
        console.log("we are in the e;lse");
        res.render("login");
    };
})

/**
 * Route for registration form.
 * @name get/users/register
 * @function
 */
router.get("/register", (req, res) => {
    res.render("register");
});

const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
};

const upload = multer({
    dest: "./public/images"
});

/**
 * Post the register form.
 * @name post/register
 * @function
 */
router.post("/register", upload.single("image"), (req, res) => {
    const { name, email, password, password2 } = req.body;
    console.log(name);
    console.log(email);
    console.log(password)
    console.log(password2)
    let errors = [];
    if (!name || !email || !password || !password2) {
        errors.push({ msg: "Missing fields" });
    }
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match" });
    }
    if (password.length < 5) {
        errors.push({
            msg: "Please ensure your password is of at least 5 characters",
        });
    }


    // retrieve the picture the user uploaded and use it as a picture for this specific user ID
    const file = req.file;
    if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
    }

    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
        const error = new Error("Please upload a png or jpeg file");
        error.httpStatusCode = 400;
        return next(error);
    }

    // move the file to the public folder
    let imagePath = path.join("./images", file.originalname);
    fs.move(file.path, path.join(__dirname, "../public/images", file.originalname))
        .then(() => {
            console.log("file moved");
        })
        .catch((err) => {
            console.log(err);
        });
        

    if (errors.length > 0) {
        res.render("register", {
            errors,
            name,
            email,
            password,
            password2,
        });
    } else {
        // validation passed
        model.users
            .find({})
            .toArray()
            .then((user) => {
                if (user.find((e) => e.email === email)) {
                    errors.push({ msg: "User Already Exists" });
                    res.render("register", {
                        errors,
                        name,
                        email,
                        password,
                        password2,
                    });
                } else {
                    let newUser = {
                        answerCount: 0,
                        questionCount: 0,
                        goldBadges: 0,
                        silverBadges: 0,
                        bronzeBadges: 0,
                        views: 0,
                        reputation: 0,
                        id: user.length,
                        accountId: Math.floor(
                            Math.random() * (30000000 - 10000000) + 10000000
                        ),
                        displayName: name,
                        email: email,
                        password: password,
                        profileImageUrl: imagePath
                    };
                    // hash password
                    bcrypt.genSalt(2, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) {
                                res.send(err);
                            } else {
                                newUser.password = hash;
                            }
                            // save the user
                            model.users
                                .insertOne(newUser)
                                .then((user) => {
                                    // send success msg to login page
                                    req.flash(
                                        "success_msg",
                                        "Thank you for signing up to Stack UnderFlow. Please proceed with logging in"
                                    );
                                    res.redirect("/users/login");
                                })
                                .catch((err) => console.log(err));
                        })
                    );
                }
            });
    }
});

/**
 * Post the login form.
 * @name post/login
 * @function
 */
// login handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});


/**
 * Log out of your account.
 * @name get/logout
 * @function
 */

router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
})

/**
 * Post the confirmation.
 * @name post/confirm
 * @function
 */


// reset - forgot password
router.get("/reset", (req, res) => {
    console.log("inside reset we are")
    res.render("forgot-password");
    console.log("inside reset we were")
});

router.post("/reset", (req, res) => {
    console.log(":quoi")
    const email = req.body.email;
    console.log("email value", email);
    // find the user with the email in the db
    model.users
        .find({
            email: email,
        })
        .toArray()
        .then((user) => {
            console.log("entered DB");
            if (user.length === 0) {
                req.flash("error", "No account with that email address exists.");
                res.redirect("/users/login");
            } else {
                console.log("cryptohashing");
                // generate the token
                crypto.randomBytes(32, (err, buffer) => {
                    if (err) {
                        console.log(err);
                    }
                    const token = buffer.toString("hex");
                    console.log("token", token);
                    // update the user with the token
                    model.users
                        .updateOne(
                            {
                                email: email,
                            },
                            {
                                $set: {
                                    resetToken: token,
                                    resetTokenExpiration: Date.now() + 3600000,
                                },
                            }
                        )
                        .then((result) => {
                            console.log("sending emaillllllllll");
                            // send the email
                            mailTransporter.sendMail(
                                {
                                    to: email,
                                    from: "kelvin.likollari@usi.ch",
                                    subject: "Password Reset",
                                    text: "Password Reset - USI StackUnderflow",
                                    html: `
                        <p>Hey There! It seems that you requested a password reset</p>
                        <p>To reset your password, click the following link
                         <a href="http://localhost:8000/users/reset/${token}">link</a></p>
                        `,
                                },
                                (err, info) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                    console.log("email sent");
                                    res.redirect("/users/confirm");
                                    console.log("rendered")
                                }
                            );
                        });
                });
            }
        });
});

router.get("/reset/:token", (req, res) => {
    const token = req.params.token;
    model.users
        .find({
            resetToken: token,
            resetTokenExpiration: { $gt: Date.now() },
        })
        .toArray()
        .then((user) => {
            if (user.length === 0) {
                req.flash("error", "Password reset token is invalid or has expired.");
                res.redirect("/users/login");
            } else {
                res.render("login", {
                    token: token,
                });
            }
        });
});

router.get("/confirm", (req, res) => {
    console.log("go check your email");
    res.render("check-email");
    console.log("Did you go");

});

router.post("/confirm", (req, res) => {
    const password = req.body.password;
    const password2 = req.body.password2;   
    console.log("passwords:")
    console.log("p1", password)
    console.log("p2", password2)
    let errors = [];
    if (!password) {
        errors.push({ msg: "Missing fields" });
    }
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match" });
    }
    if (password.length < 5) {
        errors.push({
            msg: "Please ensure your password is of at least 5 characters",
        });
    }

    if (errors.length > 0) {
        console.log("found error")
        res.render("register", {
            errors,
            password,
            password2,
        });
    } else {
        console.log("no errors found")
        const token =
            req.params.token ||
            req.body.token ||
            req.query.token ||
            req.headers["x-access-token"];
            
        console.log("token", token);
        model.users
            .find({
                resetToken: token,
                resetTokenExpiration: { $gt: Date.now() },
            })
            .toArray()
            .then((user) => {
                if (user.length === 0) {
                    req.flash("error", "Password reset token is invalid or has expired.");
                    res.redirect("/users/login");
                } else {
                    // hash password
                    bcrypt.genSalt(2, (err, salt) =>
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) {
                                res.send(err);
                            } else {
                                // update the password
                                model.users
                                    .updateOne(
                                        {
                                            resetToken: token,
                                            resetTokenExpiration: { $gt: Date.now() },
                                        },
                                        {
                                            $set: {
                                                password: hash,
                                                resetToken: null,
                                                resetTokenExpiration: null,
                                            },
                                        }
                                    )
                                    .then((result) => {
                                        req.flash("success_msg", "Password updated successfully");
                                        res.redirect("/");
                                    });
                            }
                        })
                    );
                }
            });
    }
});


/**
 * Router for the list of users.
 * @name get/user_list
 * @function
 */
router.get("/users_list", (req, res) => {
    // sort the list of users based on 
    // the number of questions they have asked
    console.log("sorting userrrrrs");
    model.users.find({}).sort({questionCount: -1}).toArray().then(users => {
        res.format({
            'text/html': () => {
                res.render('users_list', {users, layout: false});
            },
            'application/json': () => {
                res.json(users);
            }
        });
    })
    console.log("sorted users");
});

/**
 * Router for the profile page of a user.
 * @name get/:id
 * @function
 */
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    //find the user matching the id;
    const user = await model.users.findOne({id});
    console.log("+++++++++++++++++++++++++++++++++++++++++");
    console.log("user");
    const accountId = user.accountId;
    const badge = await model.badges.findOne({id}); 
    const account = await model.accounts.findOne({accountId}); 
    const questions = await model.posts.find({postType: "question"}).toArray();
    const user_answers = await model.posts.find({ownerUserId: id, postType: "answer"}).toArray();
    
    res.format({
        'text/html': () => {
            res.render('user_profile', {user, account, badge, questions, user_answers, layout: false});
        },
        'application/json': () => {
            layout = false;
            res.json({user, account, badge, questions, user_answers, layout});
        }
    });
})

// compile view templates automatically
const ejsc = require('ejsc-views');
ejsc.compile();
