
// ASK A QUESTION - LOCAL STORAGE SAVE

let questionTitleBox = document.querySelector(".t");
let questionBodyBox = document.querySelector(".q");
let questionTagsBox = document.querySelector(".tags");

questionTitleBox.addEventListener("keyup", (event) => {
    const value = event.target.value;
    console.log(value);
    window.localStorage.setItem('title', value);
    console.log("title saved to local storage");
});

questionBodyBox.addEventListener("keyup", (event) => {
    const value = event.target.value;
    console.log(value);
    window.localStorage.setItem('body', value);
    console.log("body saved to local storage");
});

questionTagsBox.addEventListener("keyup", (event) => {
    const value = event.target.value;
    console.log(value);
    window.localStorage.setItem('tags', value);
    console.log("tags saved to local storage");
});

let storedTitle = window.localStorage.getItem('title');
let storedBody = window.localStorage.getItem('body');
let storedTags = window.localStorage.getItem('tags');

if (storedTitle) {
    questionTitleBox.value = storedTitle;
}

if (storedBody) {
    questionBodyBox.value = storedBody;
}

if (storedTags) {
    questionTagsBox.value = storedTags;
}

// clear the local storage when the user has submitted the question
let submitQuestion = document.querySelector(".submit");

submitQuestion.addEventListener("click", () => {
    window.localStorage.clear();
});

