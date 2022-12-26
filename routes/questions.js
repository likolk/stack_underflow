// route: /questions
/** Express router providing user related routes
 * @module routes/questions
 * @requires express
 * @requires path
 * @requires fs-extra
 * @requires web-session
 * @requires alert
 * @requires ../model
 * @requires ../public/js/showdown.js
 * @requires ../routes/users
 */

 const express = require('express');
 const { application } = require('express');
 const router = express.Router();
 module.exports = router;
 var session = require('web-session');
 let alert = require('alert');
 const { model } = require("../model/");
 const showdown = require("../public/js/showdown.js");
 const converter = new showdown.Converter();
 const new_users = require("../routes/users");
 
 
 /**
  * Route for asking a new question.
  * @name get/questions/ask
  * @function
  */
 router.get('/ask', (req, res) => {
     res.render('newQuestion', { layout: false });
 });
 
 /**
  * Get all the questions.
  * @name get/questions/
  * @function
  */
 router.get('/', (req, res) => {
     model.posts.find({ postType: "question" }).toArray().then(posts => {
         console.log("new here");
         let reversed_posts = posts.reverse();
         res.json(reversed_posts);
     })
 });
 
 /**
  * Route for an individual question by id.
  * @name get/questions/:id
  * @function
  */
 router.get('/:id', (req, res) => {
     console.log("got id");
     let requestedId = parseInt(req.params.id)
     let id = { id: requestedId };
     console.log(id);
     //find the question
     model.posts.findOne(id).then(question => {
         //find all the users
         model.users.find({}).toArray().then(users => {
             let parentId = { parentId: requestedId };
             //find the question's answers
             model.posts.find(parentId).toArray().then(answers => {
                 res.format({
                     'text/html': () => {
                         res.render('questions', { question, answers, users, layout: false });
                     },
                     'application/json': () => {
                         data = {
                             question: question,
                             answers: answers,
                             users: users
                         }
                         res.json(data);
                     }
                 })
             });
         });
     });
 });
 
 
 /**
  * Post an answer to a question of that id.
  * @name post/questions/answer/:id
  * @function
  */
 router.post("/answer/:id", (req, res) => {
     console.log("posted");
     model.posts.find({}).toArray().then(result => {
         let id = req.user == undefined ? 0 : req.user.id;
         //create a new answer
         new_ans = {
             "favoriteCount": 0,
             "commentCount": 0,
             "answerCount": 0,
             "answerScore": 0,
             "score": 0,
             "id": (result.length + 1),
             "postType": "answer",
             "parentId": parseInt(req.params.id),
             "ownerUserId": id,
             "postState": "Published",
             "creationDate": (new Date()).toJSON(),
             "bodyMarkdown": req.body.answer,
             "body": converter.makeHtml(req.body.answer),
             "up": [0],
             "down": [0]
         }
         // store the answer in the database
         model.posts.insertOne(new_ans).then(result => {
             //increment the answers to a post
             model.posts.updateOne({ "id": parseInt(req.params.id) }, { $inc: { "answerCount": 1 } }).then(result => {
                 console.log("inserted");
                 if (id != 0) {
                     //increment the answers made by a user if they're logged in
                     model.users.updateOne({ "id": id }, { $inc: { "answerCount": 1 } }).then(result => {
                        //  res.redirect(`/questions/${req.params.id}`);
                         res.json(req.params.id);
                     });
                 } else {
                    //  res.redirect(`/questions/${req.params.id}`);
                     res.json(req.params.id);
                 }
             });
         });
     });
 });
 
 /**
  * Post a new question.
  * @name post/questions/answer/:id
  * @function
  */
 router.post("/ask", (req, res) => {
     console.log("posted");
     console.log(req.body.tags);
     console.log(req.body.t);
     console.log(req.body.q);
     model.tags.find({}).toArray().then(tags => {
         let i = 0;
         req.body.tags.split('|').forEach((t) => {
             if (t != '') {
                 if (tags.find(e => e.name == t)) {
                     //increment the counter of existing tags used
                     model.tags.updateOne({ "name": t }, { $inc: { "count": 1 } });
                 } else {
                     //create new tags
                     let new_tag = {
                         "isSpecialTag": false,
                         "count": 1,
                         "id": tags.length + 5 + i,
                         "creationDate": (new Date()).toJSON(),
                         "name": t
                     }
                     //store new tags
                     model.tags.insertOne(new_tag);
                     ++i;
                 }
             }
         });
     });
     model.posts.find({}).toArray().then(result => {
         console.log(result[result.length - 1]);
         let id = req.user == undefined ? 0 : req.user.id;
         //create a new question
         new_ask = {
             "favoriteCount": 0,
             "commentCount": 0,
             "answerCount": 0,
             "answerScore": 0,
             "score": 0,
             "id": (result.length + 1),
             "postType": "question",
             "viewCount": 0,
             "acceptedAnswerId": 0,
             "ownerUserId": id,
             "postState": "Published",
             "creationDate": (new Date()).toJSON(),
             "tags": req.body.tags,
             "title": req.body.t,
             "bodyMarkdown": req.body.q,
             "body": converter.makeHtml(req.body.q),
             "up": [0],
             "down": [0]
         }
         //insert the new question
         model.posts.insertOne(new_ask).then(result => {
             let name = "Anonymous";
             if (req.isAuthenticated()) {
                 if (req.user.email) {
                     let mail = req.user.email;
                     //retrieve from the database the name of the user
                     model.users.findOne({ email: mail }).then(user => {
                         name = user.displayName;
                     }).then(() => {
                         req.io.emit('sending_notification', { title: new_ask.title, id: new_ask.id, name: name });
                         console.log("inserted");
                         if (id != 0) {
                             //increments the question count of the user if they're logged in
                             model.users.updateOne({ "id": id }, { $inc: { "questionCount": 1 } }).then(result => {
                                //  res.redirect(`/questions/${parseInt(new_ask.id)}`);
                                res.json(new_ask.id);
                                 req.io.emit('refresh', name)
                             });
                         }
                         else {
                             console.log("id ZEROO:", new_ask.id)
                             res.json(new_ask.id);
 
                             req.io.emit('refresh', name)
                            //  res.redirect(`/questions/${parseInt(new_ask.id)}`);
                         }
                     })
                 }
             }
             else {
                 req.io.emit('sending_notification', { title: new_ask.title, id: new_ask.id, name: name });
                 console.log("inserted");
                 if (id != 0) {
                     model.users.updateOne({ "id": id }, { $inc: { "questionCount": 1 } }).then(result => {
                        //  res.redirect(`/questions/${parseInt(new_ask.id)}`);
                        res.json(new_ask.id);
                         req.io.emit('refresh', name)
                     });
                 } else {
                     console.log("id ZEROO:", new_ask.id)
                     res.json(new_ask.id);
 
                     req.io.emit('refresh', name)
                    //  res.redirect(`/questions/${parseInt(new_ask.id)}`);
                 }
             }
         });
     });
 });
 
 /**
  * Put an upvode.
  * @name put/questions/up/:id
  * @function
  */
 router.put("/up/:id", (req, res) => {
     let a = 1;
     let requestedId = parseInt(req.params.id);
     let id = { id: requestedId };
     //find the post being upvoted
     model.posts.findOne(id).then(result => {
         let newpath = '/questions/'
         //create the redirect path
         if (result.postType == "answer") {
             newpath = newpath + JSON.stringify(result.parentId);
             requestedId = JSON.stringify(result.parentId);; // new
         } else {
             newpath = newpath + JSON.stringify(result.id);
             requestedId = JSON.stringify(result.id); // new
         }
         //only allow an upvote if the user is logged in
         if (req.isAuthenticated()) {
             if (result.hasOwnProperty("up")) {
                 //check if the user hasn't upvoted it yet and that they're not upvoting their own post
                 if (!((result.up).find(e => e === req.user.id)) && result.ownerUserId != req.user.id) {
                     //add the user's id to the array of user's who have upvoted
                     result.up.push(req.user.id);
                     let down = [0];
                     if (result.hasOwnProperty("down")) {
                         //check if the user has downvoted the post
                         for (let i = 0; i < result.down.length; i++) {
                             if (result.down[i] == req.user.id) {
                                 //remove the user from the array of people who have downvoted
                                 result.down[i] = result.down[result.down.length - 1];
                                 delete result.down.pop();
                                 a = 2;
                                 //increment how much to vote by to compensate the downvote
                             }
                         }
                         down = result.down;
                     }
                     //update the score and upvote and downvote arrays of the post
                     model.posts.updateOne(id, { $set: { "score": result.score + a, "up": result.up, "down": down } }).then(x => {
                         if (result.ownerUserId != 0) {
                             //update the user's reputation if they're logged in
                             model.users.updateOne({ "id": result.ownerUserId }, { $inc: { "reputation": +a } }).then(result => {
                                //  res.redirect(newpath);
                                res.json(requestedId)
                             });
                         } else {
                            //  res.redirect(newpath);
                            res.json(requestedId)
                         }
                     });
                 } else {
                    //  res.redirect(newpath);
                    res.json(requestedId)
                 }
             } else if (result.ownerUserId != req.user.id) {
                 //if the post doesn't have an up field yet, it creates one with the user's id
                 let down = [0];
                 if (result.hasOwnProperty("down")) {
                     //check if the user has downvoted the post
                     for (let i = 0; i < result.down.length; i++) {
                         if (result.down[i] == req.user.id) {
                             //remove the user from the array of people who have downvoted
                             result.down[i] = result.down[result.down.length - 1];
                             delete result.down.pop();
                             a = 2;
                             //increment how much to vote by to compensate the downvote
                         }
                     }
                     down = result.down;
                 }
                 //update the score and upvote and downvote arrays of the post
                 model.posts.updateOne(id, { $set: { "score": result.score + a, "up": [req.user.id], "down": down } }).then(x => {
                     if (result.ownerUserId != 0) {
                         //update the user's reputation if they're logged in
                         model.users.updateOne({ "id": result.ownerUserId }, { $inc: { "reputation": +a } }).then(result => {
                            //  res.redirect(newpath);
                            res.json(requestedId)
                         });
                     } else {
                        //  res.redirect(newpath);
                        res.json(requestedId)
                     }
                 });
             } else {
                //  res.redirect(newpath);
                res.json(requestedId)
             }
         } else {
             //if user is not logged in
             alert("You cannot vote for questions as an anonymous user");
             req.flash('error', 'You cannot vote for questions as an anonymous user')
             console.error("You cannot vote for questions as an anonymous user");
            //  res.redirect(newpath);
            res.json(requestedId)
         }
     });
 });
 
 /**
  * Put a downvote.
  * @name put/questions/down/:id
  * @function
  */
 router.put("/down/:id", (req, res, event) => {
     let a = 1;
     let requestedId = parseInt(req.params.id);
     let id = { id: requestedId };
     //find the post being downvoted
     model.posts.findOne(id).then(result => {
         let newpath = '/questions/'
         //create the redirect path
         if (result.postType == "answer") {
             newpath = newpath + JSON.stringify(result.parentId);
             requestedId = JSON.stringify(result.parentId);
         } else {
             newpath = newpath + JSON.stringify(result.id);
             requestedId = JSON.stringify(result.id);
         }
         //only allow a downvote if the user is logged in
         if (req.isAuthenticated()) {
             if (result.hasOwnProperty("down")) {
                 //check if the user hasn't downvoted it yet and that they're not downvoting their own post
                 if (!((result.down).find(e => e === req.user.id)) && result.ownerUserId != req.user.id) {
                     //add the user's id to the array of user's who have downvoted
                     result.down.push(req.user.id);
                     let up = [0];
                     if (result.hasOwnProperty("up")) {
                         //check if the user has upvoted the post
                         for (let i = 0; i < result.up.length; i++) {
                             if (result.up[i] == req.user.id) {
                                 //remove the user from the array of people who have upvoted
                                 result.up[i] = result.up[result.up.length - 1];
                                 delete result.up.pop();
                                 a = 2;
                                 //increment how much to vote by to compensate the upvote
                             }
                         }
                         up = result.up;
                     }
                     //update the score and upvote and downvote arrays of the post
                     model.posts.updateOne(id, { $set: { "score": result.score - a, "up": up, "down": result.down } }).then(x => {
                         console.log("checkpoint 5");
                         if (result.ownerUserId != 0) {
                             //update the user's reputation if they're logged in
                             model.users.updateOne({ "id": result.ownerUserId }, { $inc: { "reputation": -a } }).then(result => {
                                 //req.io.to(socketId).emit('ref', id);
                                //  res.redirect(newpath);
                                res.json(requestedId)
                             });
                         } else {
                            //  res.redirect(newpath);
                            res.json(requestedId)
                         }
                     });
                 } else {
                    //  res.redirect(newpath);
                    res.json(requestedId)
                 }
             } else if (result.ownerUserId != req.user.id) {
                 //if the post doesn't have an down field yet, it creates one with the user's
                 let up = [0];
                 if (result.hasOwnProperty("up")) {
                     //check if the user has upvoted the post
                     for (let i = 0; i < result.up.length; i++) {
                         if (result.up[i] == req.user.id) {
                             //remove the user from the array of people who have upvoted
                             result.up[i] = result.up[result.up.length - 1];
                             delete result.up.pop();
                             a = 2;
                             //increment how much to vote by to compensate the upvote
                         }
                     }
                     up = result.up;
                 }
                 //update the score and upvote and downvote arrays of the post
                 model.posts.updateOne(id, { $set: { "score": result.score - a, "up": up, "down": [req.user.id] } }).then(x => {
                     if (result.ownerUserId != 0) {
                         //update the user's reputation if they're logged in
                         model.users.updateOne({ "id": result.ownerUserId }, { $inc: { "reputation": -a } }).then(result => {
                            //  res.redirect(newpath);
                            res.json(requestedId)
                         });
                     } else {
                        //  res.redirect(newpath);
                        res.json(requestedId)
                     }
                 });
             } else {
                //  res.redirect(newpath);
                res.json(requestedId)
             }
         } else {
             //if user is not logged in
             alert("You cannot vote for questions as an anonymous user");
             req.flash('error', 'You cannot vote for questions as an anonymous user')
             console.error("You cannot vote for questions as an anonymous user");
            //  res.redirect(newpath);
            res.json(requestedId)
         }
     });
 });
 