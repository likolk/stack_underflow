function load_header() {
    console.log("header loaded");
    api.get_login_status().then(data => {
        console.log(data);
        document.querySelector("header").innerHTML = ejs.views_includes_header({ 'logged': data.logged});

        const searchInput = document.getElementById("searchInput"); // Get the search input element
        const divContent = document.getElementsByClassName('d1'); // Get the div element that contains the values to search
        // Listen for keyup event on search input
        const divContent2 = document.getElementsByClassName('tags_cell');
        searchInput.addEventListener("keyup", (event) => {
            const { value } = event.target;
            const searchQuery = value.toLowerCase();
            for (const nameElement of divContent) {
                let name = nameElement.textContent.toLowerCase();
                if (name.includes(searchQuery)) {
                    nameElement.style.display = "block";
                    console.log(nameElement);
                } else {
                    nameElement.style.display = "none";
                    console.log('not found')
                }
            }
            for (const nameElement of divContent2) {
                let name = nameElement.textContent.toLowerCase();
                if (name.includes(searchQuery)) {
                    nameElement.style.display = "block";
                    console.log(nameElement);
                } else {
                    nameElement.style.display = "none";
                    console.log('not found')
                }
            }
        });
    });
}
function load_nav() {
    console.log("nav loaded");
    api.get_login_status().then(data => {
        // console.log(data);
        document.querySelector("nav").innerHTML = ejs.views_includes_nav({'logged': data.logged});

        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", (e)=>{
                e.preventDefault();

                let url = new URL(e.currentTarget.href);

                switch(url.pathname) {
                    case '/':
                        load_index();
                        break;
                    // case '/users/logout' || '/users/login':
                    //     // dipende da use logged
                    //     break
                    // case '/users':
                    //     // dipende da use logged !!! attenzione /users e' la route che corrisponde a /users/login scritta a linea 22!
                    //     break
                    case '/users/users_list':
                        load_users_list();
                        break;
                    case '/tags':
                        load_tags();
                        break;
                    case '/questions/ask':
                        // load_questions();
                        ask_new_question();
                    default:
                        break;
                };
            });
        })
    });
}
function load_index() {
    api.get_all_posts().then((data) => {
        let posts = data.posts;
        let users = data.users;
        document.querySelector("main").innerHTML = ejs.views_index({"posts": posts, "users": users});
        document.querySelectorAll("main a").forEach(link => {
            // console.log("link", link);
            link.addEventListener("click", (e)=>{
                e.preventDefault();
                let url = new URL(e.currentTarget.href);
                let id = url.pathname.split("/")[2];
                load_questions(id);
            });
        });
    })
}

function load_users_list() {
    api.get_all_users().then(users => {    
        document.querySelector("main").innerHTML = ejs.views_users_list({"users": users});
        document.querySelectorAll("main a").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                let url = new URL(e.currentTarget);
                let id = url.pathname.split("/")[2];
                load_user_profile(id);                
            })
        })
    })
}

function load_user_profile(id) {
    api.get_user_by_id(id).then((data) => {
        const user = data.user;
        const account = data.account;
        const badge = data.badge;
        const questions = data.questions;
        const user_answers = data.user_answers;
        const layout = data.layout;
        document.querySelector("main").innerHTML = ejs.views_user_profile({user, account, badge, questions, user_answers, layout});

        document.querySelectorAll("main a").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                let url = new URL(e.currentTarget);
                let id = url.pathname.split("/")[2];
                
                load_questions(id);
            })
        })
    })
}

function load_tags() {
    api.get_all_tags().then(tags => {
        document.querySelector("main").innerHTML = ejs.views_tags({"tags": tags, 'logged': true});

        load_tags_listeners();
        
    });
}
function load_tags_listeners() {
    document.querySelectorAll("main a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            let url = new URL(e.currentTarget);
            let name = url.pathname.split("/")[2];
            console.log(name);
            switch (name) {
                case '':
                    load_tags();
                    break;
                case 'name':
                    api.get_sorted_tags().then(tags => {
                        document.querySelector("main").innerHTML = ejs.views_tags({"tags": tags, 'logged': true});
                        load_tags_listeners();
                    })
                    break;
                case 'popular':
                    api.get_popular_tags().then(tags => {
                        document.querySelector("main").innerHTML = ejs.views_tags({"tags": tags, 'logged': true});
                        load_tags_listeners();
                    });
                    break;
                default:
                    load_questions_by_tags(name);
                    break;
            }
        })
    })
}

function load_questions_by_tags(name) {
    api.get_questions_by_tags(name).then((data) => {
        const posts = data.posts;
        const layout = data.layout;
        document.querySelector("main").innerHTML = ejs.views_tags_name({posts, layout, 'logged': true});
        document.querySelectorAll("main a").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                let url = new URL(e.currentTarget);
                let id = url.pathname.split("/")[2];
                load_questions(id);
            })
        })
    })
}

function ask_new_question() {
    document.querySelector("main").innerHTML = ejs.views_newQuestion({layout: false});
    ClassicEditor
            .create( document.querySelector('#editor'))
            .catch( error => {
                console.error( error );
            });
    let form = document.querySelector("main .nq form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let form_data = {
            "t": document.querySelector("main .nq form input[name='t']").value,
            "q": document.querySelector("main .nq div.ck p").innerHTML,
            "tags": document.querySelector("main .nq form input[name='tags']").value,
        }
        api.post_question(form_data).then((id) => {
            // console.log("id question:", id)
            load_questions(id);
        });
    });
}

function load_questions(id) {
    api.get_question(id).then((data) => {
        let question = data.question;
        let answers = data.answers;
        let users = data.users;
        document.querySelector("main").innerHTML = ejs.views_questions({question, answers, users});
        ClassicEditor
            .create( document.querySelector('#editor'))
            .catch( error => {
                console.error( error );
            });
        let form = document.querySelector("main form.answer");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let form_data = {
                "answer": document.querySelector("main form.answer textarea[name='answer']").value,
            }
            api.post_answer(id, form_data).then((id) => {
                // console.log("id answer:", id)
                load_questions(id);
            });
        });

        let put_forms = document.querySelectorAll("main div.votes form");
        put_forms.forEach((form) => {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                // controllare se vote  e' up or down
                // console.log(form.id)
                let vote = form.getAttribute("class");
                console.log("vote:", vote);
                let id = form.action.split("/")[5];
                id = id.replace("?_method=PUT", "")
                console.log("vote:", vote);
                console.log("id:", id);
                if (vote == "upform") {
                    if(api.get_login_status()){
                        api.put_vote_up(id).then((id) => {
                            console.log("id answer CIAOOO:", id);
                            load_questions(id);
                        });
                    }
                } else {
                    if(api.get_login_status()){
                        api.put_vote_down(id).then((id) => {
                            console.log("id answer:", id);
                            load_questions(id);
                        });
                    }
                }
            });
        })

        let user_boxes = document.querySelectorAll(".user-details a");
        user_boxes.forEach((user) => {
            user.addEventListener("click", (e) => {
                e.preventDefault();
                let url = new URL(e.currentTarget);
                let id = url.pathname.split("/")[2];
                load_user_profile(id);
            })
        })

        let tags_box = document.querySelectorAll("main div[class=question-tags] a");
        tags_box.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                let tag_name = link.innerHTML;
                load_questions_by_tags(tag_name);
            });
        })
    })
}
// not utilized yet
// just for debugging
function load_question() {
    document.querySelector("main").innerHTML = ejs.views_question({layout: false, 'logged': true});
}


function init() {
    load_header();
    load_index();
    load_nav();
}