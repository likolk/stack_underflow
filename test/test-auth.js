const should = require('should');
const request = require('supertest')("http://localhost:8000");
const { describe, it, before, beforeEach, after } = require('mocha');
const User = require("../model/Users");
const path = require('path');
const crypto = require('crypto').webcrypto;
const fs = require('fs');
const fsextra = require('fs-extra');

let users = []

function generateEmail() {
    return crypto.getRandomValues(new Uint32Array(1))[0] + "@gmail.com" ||
        crypto.getRandomValues(new Uint32Array(1))[0] + "@usi.ch";
}

function generatePassword() {
    return crypto.getRandomValues(new Uint32Array(1))[0];
}

function generateName() {
    return crypto.getRandomValues(new Uint32Array(1))[0];
}

function generatePassword2WithLessThan5Characters() {
    let password;
    for (let i = 0; i < 4; i++) {
        password += crypto.getRandomValues(new Uint32Array(1))[0];
    }
};

function getRandomImageFromDirectory() {
    let directory = path.join(__dirname, "../src/public/images")
    let images = fs.readdirSync(directory);
    let randomImage = images[Math.floor(Math.random() * images.length)];
    return randomImage;
}


describe('Login Register Forgot Password', function () {

    describe("login page should exist", function () {
        it("should return 200 if login page exists", function (done) {
            request.get('/users/login')
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    res.status.should.equal(200);
                    done();
                }
                );
        });
    });

    describe("register page should exist", function () {
        it("should return 200 if register page exists", (done) => {
            request.get("/users/register")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        throw err;
                    }
                    res.status.should.equal(200);
                    done();
                })
        })
    })


    describe("reset password page should exist", function () {
        it("should return 200 if reset password page exists", (done) => {
            request.get("/users/reset")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        throw err;
                    }
                    res.status.should.equal(200);
                    done();
                })
        })
    })


    describe("logout button should exist", function () {
        it("should return 200 if logout button exists", (done) => {
            request.get("/users")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        throw err;
                    }
                    res.status.should.equal(200);
                    done();
                })
        })
    });
})

describe('Credentials Authentication', function () {
    let name = generateName();
    let email = generateEmail();
    let pass = generatePassword();
    let profile_pic = "../src/public/images/docker.jpg" ?? getRandomImageFromDirectory();


    describe("should return 302 if given data is correct", function () {
        it("should return 302 if given data is correct", (done) => {
            // should redirect to window homepage 
            request.post("/users/login")
                .send({
                    email: email,
                    password: pass,
                })
                .expect(302)
                .end((err, res) => {
                    if (err) {
                        throw err;
                    }
                    res.status.should.equal(302);
                    done();
                })
        })

        // it('should return 200 if the user is created', (done) => {
        //     request.post('/users/register')
        //       .send({
        //         name: name,
        //         email: email,
        //         password: pass,
        //         password2: pass,
        //         profile_pic: profile_pic
        //       })
        //       .expect(200)
        //       .end((err, res) => {
        //         if (err) {
        //             throw err;
        //         }
        //         should.exist(res.body);
        //         should.exist(res.body.success_msg);
        //         res.status.should.equal(200);
        //         res.body.should.have.property('success_msg');
        //         res.body.success_msg.should.equal(
        //             'Thank you for signing up to Stack UnderFlow. Please proceed with logging in'
        //         );
        //         users.push(
        //             User.findOne({ 
        //             name: name,
        //             email: email,
        //             password: pass,
        //             password2: pass,
        //             profile_pic: profile_pic,
        //         }).exec());
        //         done();
        //       });
        //   });
    });


});