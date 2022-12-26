const request = require('supertest')("http://localhost:8000");
const { describe, it, before, beforeEach, after } = require('mocha');



describe("Should make sure all routes work", function () {

    describe("should retrieve all questions", function () {
        it("Should return 200 if questions are retrieved", function (done) {
            request.get('/')
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

    describe("should retrieve all users", function () {
        it("Should return 200 if users are retrieved", function (done) {
            request.get('/users/users_list')
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

    describe("should retrieve all tags", function () {
        it("Should return 200 if tags are retrieved", function (done) {
            request.get('/tags')
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

    describe("should be able to ask a question", function () {
        it("Should return 200 if user can ask a question", function (done) {
            request.get('/questions/ask')
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
    })

    describe("should be able to view a question", function () {
        it("Should return 200 if user can view a question", function (done) {
            // get database questions size list
            // TODO: HARDCODED
            let question_id = Math.floor(Math.random() * 100);
            request.get('/questions/' + question_id)
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
    })


    describe("should be able to view a user profile", function () {
        it("Should return 200 if user can view a user profile", function (done) {
            let user_id = Math.floor(Math.random() * 70);
            request.get('/users/' + user_id)
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
    })

    describe("should be able to view a tag", function () {
        it("Should return 200 if user can view a tag", function (done) {
            let tag_id = Math.floor(Math.random() * 50);
            request.get('/tags/' + tag_id)
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
    })

    describe("should be able to ask a question", function () {
        it("Should return 200 if user can ask a question", function (done) {
            request.get('/questions/ask')
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
    })


    describe("should be able to post an answer", function () {
        it("Should return 200 if user can post an answer", function (done) {
            request.get('/questions/ask')
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
    })

    describe("clicking the logo should redirect to home page", function () {
        it("Should return to homepage if logo is clicked", function (done) {
            request.get('/')
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


    describe("tags page should be able to be accessed", function () {
        it("Should return 200 if tags page is accessed", function (done) {
            request.get('/tags')
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

    describe("should be able to sort tags by popularity", function () {
        it("Should return 200 if tags are sorted by popularity", function (done) {
            request.get('/tags/popular')
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

    describe("should be able to sort tags by name", function () {
        it("Should return 200 if tags are sorted by name", function (done) {
            request.get('/tags/name')
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

    describe("should be able to sort tags by newly posted", function () {
        it("Should return 200 if tags are sorted by newly posted", function (done) {
            request.get('/tags/new')
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
});