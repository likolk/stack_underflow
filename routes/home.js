// homepage router
/** Express router providing user related routes
 * @module routes/home
 * @requires express
 * @requires path
 * @requires fs-extra
 * @requires ../model
 */


const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs-extra");
const { model } = require("../model");
module.exports = router;

/**
 * Route for the homepage.
 * @name get/
 * @function
 */
router.get('/', (req, res, next) => {
    model.posts.find({postType: "question"}).sort({creationDate: -1}).toArray().then(posts => {
        console.log("found all questions");
        // show only post that are questions, reverse the array since 
        // normally the posts are sorted by date (newest last)
        res.format({
            'text/html': () => {
                res.render('index', {
                    // users: users,
                    posts: posts, 
                    layout: false
                });
            },
            'application/json': () => {
                res.json({posts: posts, logged});
            }
        });
    })
});


/**
 * Route for the homepage.
 * @name get/posts
 * @function
 */
router.get('/posts', (req, res, next) => {
    model.posts.find({ postType: "question" }).sort({ creationDate: -1 }).toArray().then(posts => {
        console.log("found all questions");

        model.users.find({}).toArray().then(users => {

            res.format({
                'text/html': () => {
                    res.render('index', {
                        users: users,
                        posts: posts,
                        layout: false
                    });
                },
                'application/json': () => {
                    let data = {
                        users: users,
                        posts: posts
                    }
                    res.json(data);
                }
            });
        });
    })
});

// logged = req.isAuthenticated();

router.get('/login_status', (req, res, next) => {
    res.format({
        'text/html': () => {
            // res.render('login', {
            //     logged: logged,
            //     layout: false
            // });
        },
        'application/json': () => {
            logged = req.isAuthenticated();
            res.json({ logged: logged });
        }
    });
});
