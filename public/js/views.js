//EJS Compiled Views - This file was automatically generated on Mon Dec 19 2022 15:06:02 GMT+0100 (Central European Standard Time)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
     }
 };
 ejs.views_answers = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <div class=\"main-content\">\n            <div class=\"votes\">\n                <!-- upvote button image -->\n                <img src=\"../public/images/upvote.png\" width=\"30\" height=\"30\" alt=\"upvote button\">\n                <p>0</p> <!-- Will be dynamically generated -->\n                <!-- downvote button image -->\n                <img src=\"../public/images/downvote.png\" width=\"30\" height=\"30\" alt=\"downvote button\">\n            </div>\n            <div class=\"answer-body\">\n                <p>This is the answer's body. It shall be dynamically loaded in the following days.</p>\n                <p>Here, if any, the code in question will be placed</p>\n            </div>\n            <div class=\"modify-content-buttons\">\n                <button class=\"edit\">Edit</button>\n                <button class=\"delete\">Delete</button>\n            </div>\n\n            <div class=\"user-answered\">\n                <p>Answered by <a href=\"#\">user1</a></p>\n                <!-- add also user profile picture  -->\n            </div>\n\n            <div class=\"answer-comments\">\n                <p>Comments:</p>\n                <p>Comment 1</p>\n                <p>Comment 2</p>\n                <p>Comment 3</p>\n            </div>\n\n            <div class=\"add-comment\">\n                <p>Add a comment:</p>\n                <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\"></textarea>\n                <button class=\"add-comment\">Add comment</button>\n            </div>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <div class=\"main-content\">\n            <div class=\"votes\">\n                <!-- upvote button image -->\n                <img src=\"../public/images/upvote.png\" width=\"30\" height=\"30\" alt=\"upvote button\">\n                <p>0</p> <!-- Will be dynamically generated -->\n                <!-- downvote button image -->\n                <img src=\"../public/images/downvote.png\" width=\"30\" height=\"30\" alt=\"downvote button\">\n            </div>\n            <div class=\"answer-body\">\n                <p>This is the answer's body. It shall be dynamically loaded in the following days.</p>\n                <p>Here, if any, the code in question will be placed</p>\n            </div>\n            <div class=\"modify-content-buttons\">\n                <button class=\"edit\">Edit</button>\n                <button class=\"delete\">Delete</button>\n            </div>\n\n            <div class=\"user-answered\">\n                <p>Answered by <a href=\"#\">user1</a></p>\n                <!-- add also user profile picture  -->\n            </div>\n\n            <div class=\"answer-comments\">\n                <p>Comments:</p>\n                <p>Comment 1</p>\n                <p>Comment 2</p>\n                <p>Comment 3</p>\n            </div>\n\n            <div class=\"add-comment\">\n                <p>Add a comment:</p>\n                <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\"></textarea>\n                <button class=\"add-comment\">Add comment</button>\n            </div>\n        </div>\n")
    ; __line = 37
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_check_email = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Password Reset page -->\n\n\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fa fa-envelope\"></i> Please check your email</h1>\n            <%- include('./partials/messages.ejs'); -%>\n        </div>\n        <div class=\"text-center\">\n            <a href=\"/\" class=\"btn btn-primary\">Return To Homepage</a>\n        </div>\n    </div>\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Password Reset page -->\n\n\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fa fa-envelope\"></i> Please check your email</h1>\n            ")
    ; __line = 8
    ; __append( include('./partials/messages.ejs') )
    ; __append("        </div>\n        <div class=\"text-center\">\n            <a href=\"/\" class=\"btn btn-primary\">Return To Homepage</a>\n        </div>\n    </div>\n</div>\n\n")
    ; __line = 16
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_confirm = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Confirm new Password page -->\n<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Confirm New Password</h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/confirm\" method=\"POST\">\n                <!-- create 2 form entries -->\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Create Password\" value=\"<%= typeof password != 'undefined' ? password : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                           placeholder=\"Confirm Password\"\n                           value=\"<%= typeof password2 != 'undefined' ? password2 : '' %>\" />\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Confirm new Password page -->\n")
    ; __line = 2
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Confirm New Password</h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/confirm\" method=\"POST\">\n                <!-- create 2 form entries -->\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Create Password\" value=\"")
    ; __line = 13
    ; __append(escapeFn( typeof password != 'undefined' ? password : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                           placeholder=\"Confirm Password\"\n                           value=\"")
    ; __line = 19
    ; __append(escapeFn( typeof password2 != 'undefined' ? password2 : '' ))
    ; __append("\" />\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n")
    ; __line = 29
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_dashboard = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<h1 class=\"mt-4\">You have been succesfully logged in as <%= name %> </h1>\n<p class=\"lead mb-3\">Welcome  <%= name %></p>\n<a href=\"/users/logout\" class=\"btn btn-secondary\">Logout</a>\n<a href=\"/\">Proceed to Questions page</a>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<h1 class=\"mt-4\">You have been succesfully logged in as ")
    ; __append(escapeFn( name ))
    ; __append(" </h1>\n<p class=\"lead mb-3\">Welcome  ")
    ; __line = 2
    ; __append(escapeFn( name ))
    ; __append("</p>\n<a href=\"/users/logout\" class=\"btn btn-secondary\">Logout</a>\n<a href=\"/\">Proceed to Questions page</a>")
    ; __line = 4
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_forgot_password = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Password Reset page -->\n<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Reset Password</h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/reset\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Password Reset page -->\n")
    ; __line = 2
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Reset Password</h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/reset\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n")
    ; __line = 19
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_home = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n\n<%- include ('includes/head') %>\n\n<body>\n\n    <section>\n        <img class=\"welcome\" src=\"../images/Stack%20Underflow.png\">\n    </section>\n\n</body>\n\n<script src=\"./js/search.js\">\n\n</script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n\n")
    ; __line = 3
    ; __append( include ('includes/head') )
    ; __append("\n\n<body>\n\n    <section>\n        <img class=\"welcome\" src=\"../images/Stack%20Underflow.png\">\n    </section>\n\n</body>\n\n<script src=\"./js/search.js\">\n\n</script>\n</html>")
    ; __line = 16
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = ""
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_head = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <title>Stack Underflow</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"https://cdn.socket.io/4.4.1/socket.io.min.js\"></script>\n    <script>const socket = io(\"ws://localhost:8000\");</script>\n    <script src='/js/events.js'></script>\n    <script src=\"https://code.jquery.com/jquery-3.6.1.js\"></script>\n    <script src=\"/js/iziToast.js\" type=\"text/javascript\"></script>\n\n    <script src=\"./js/markdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/showdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/search.js\" type=\"text/javascript\"></script>\n    \n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js\"></script>\n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/super-build/ckeditor.js\"></script>\n    <script>\n        ClassicEditor\n            .create( document.querySelector('#editor'))\n            .catch( error => {\n                console.error( error );\n            } );\n    </script>\n\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <title>Stack Underflow</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"https://cdn.socket.io/4.4.1/socket.io.min.js\"></script>\n    <script>const socket = io(\"ws://localhost:8000\");</script>\n    <script src='/js/events.js'></script>\n    <script src=\"https://code.jquery.com/jquery-3.6.1.js\"></script>\n    <script src=\"/js/iziToast.js\" type=\"text/javascript\"></script>\n\n    <script src=\"./js/markdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/showdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/search.js\" type=\"text/javascript\"></script>\n    \n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js\"></script>\n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/super-build/ckeditor.js\"></script>\n    <script>\n        ClassicEditor\n            .create( document.querySelector('#editor'))\n            .catch( error => {\n                console.error( error );\n            } );\n    </script>\n\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">")
    ; __line = 36
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_header = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <img class=\"header-logo\" src=\"../images/logo.png\" alt=\"logo\">\n    <input class=\"searchbar\" id=\"searchInput\" type=\"text\" placeholder=\"Search\">\n    <% if (logged) { %>\n        <a class=\"header-logout\" href=\"/users/logout\"> Logout </a>\n    <% } else { %>\n        <a class=\"header-logout\" href=\"/users\"> Login </a>\n    <% } %>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <img class=\"header-logo\" src=\"../images/logo.png\" alt=\"logo\">\n    <input class=\"searchbar\" id=\"searchInput\" type=\"text\" placeholder=\"Search\">\n    ")
    ; __line = 3
    ;  if (logged) { 
    ; __append("\n        <a class=\"header-logout\" href=\"/users/logout\"> Logout </a>\n    ")
    ; __line = 5
    ;  } else { 
    ; __append("\n        <a class=\"header-logout\" href=\"/users\"> Login </a>\n    ")
    ; __line = 7
    ;  } 
    ; __append("\n")
    ; __line = 8
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_nav = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <a href=\"/\"> Home </a>\n    <a href=\"/users/users_list\"> Users </a>    \n    <a href=\"/tags\"> Tags </a>\n    <br>\n    <br>\n    <a href=\"/questions/ask\" class=\"newAsk\"> Ask </a>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <a href=\"/\"> Home </a>\n    <a href=\"/users/users_list\"> Users </a>    \n    <a href=\"/tags\"> Tags </a>\n    <br>\n    <br>\n    <a href=\"/questions/ask\" class=\"newAsk\"> Ask </a>\n")
    ; __line = 7
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"trendingQ\">Browse questions</h1>\n\n        <div class=\"maincontentdiv\">\n\n            <% posts.forEach(post => { %>\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                        <div class=\"d\">\n                            <div class=\"dtitle\">\n                                <p class=\"styleT\"><span class=\"styleT\"> <%= post.title %> </span></p>\n                                <br>\n                                <p class=\"ptt\"><span><%- post.bodyMarkdown %></span></p>\n                            </div>\n                            <div class=\"dscore\">\n                                <p class=\"stylediv\"><span> score: <%= post.score %> </span></p>\n                            </div>\n                            <div class=\"dcount\">\n                                <p class=\"stylediv\"><span> answers: <%= post.answerCount %> </span></p>\n                            </div>\n                            <div class=\"ddate\">\n                                <p class=\"stylediv\"><span><%= new Date(post.creationDate).toUTCString().split('G')[0] %></span></p>\n                            </div>\n                            <div class=\"dtag\">\n                                <% post.tags.split(\"|\").forEach(tag =>{ %>\n\n                                    <% if (tag != ''){%> \n                                    <div class=\"styletag\">\n                                        <span><%- tag %></span>\n                                    </div>   \n                                    <%}%> \n                                <% }) %>\n                            </div>\n                            <div class=\"duser\">\n                                <p><span>\n                                    <% if(post.ownerUserId ==0){%>\n                                        Anonymous\n                                    <% } else { %>\n                                        <%- users.find(e => e.id === post.ownerUserId).displayName %>\n                                    <%}%>\n                                </span></p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"trendingQ\">Browse questions</h1>\n\n        <div class=\"maincontentdiv\">\n\n            ")
    ; __line = 6
    ;  posts.forEach(post => { 
    ; __append("\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 8
    ; __append( post.id )
    ; __append("\">\n                        <div class=\"d\">\n                            <div class=\"dtitle\">\n                                <p class=\"styleT\"><span class=\"styleT\"> ")
    ; __line = 11
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                                <br>\n                                <p class=\"ptt\"><span>")
    ; __line = 13
    ; __append( post.bodyMarkdown )
    ; __append("</span></p>\n                            </div>\n                            <div class=\"dscore\">\n                                <p class=\"stylediv\"><span> score: ")
    ; __line = 16
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                            </div>\n                            <div class=\"dcount\">\n                                <p class=\"stylediv\"><span> answers: ")
    ; __line = 19
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                            </div>\n                            <div class=\"ddate\">\n                                <p class=\"stylediv\"><span>")
    ; __line = 22
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append("</span></p>\n                            </div>\n                            <div class=\"dtag\">\n                                ")
    ; __line = 25
    ;  post.tags.split("|").forEach(tag =>{ 
    ; __append("\n\n                                    ")
    ; __line = 27
    ;  if (tag != ''){
    ; __append(" \n                                    <div class=\"styletag\">\n                                        <span>")
    ; __line = 29
    ; __append( tag )
    ; __append("</span>\n                                    </div>   \n                                    ")
    ; __line = 31
    ; }
    ; __append(" \n                                ")
    ; __line = 32
    ;  }) 
    ; __append("\n                            </div>\n                            <div class=\"duser\">\n                                <p><span>\n                                    ")
    ; __line = 36
    ;  if(post.ownerUserId ==0){
    ; __append("\n                                        Anonymous\n                                    ")
    ; __line = 38
    ;  } else { 
    ; __append("\n                                        ")
    ; __line = 39
    ; __append( users.find(e => e.id === post.ownerUserId).displayName )
    ; __append("\n                                    ")
    ; __line = 40
    ; }
    ; __append("\n                                </span></p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            ")
    ; __line = 46
    ;  }); 
    ; __append("\n        </div>\n")
    ; __line = 48
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_layout = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\"\n          integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://bootswatch.com/4/journal/bootstrap.min.css\" />\n\n    <!-- <title>Authentication</title> -->\n\n</head>\n<body>\n<div class=\"container\"><%- body %></div>\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n        integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"\n        integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"\n        integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n        crossorigin=\"anonymous\"></script>\n</body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\"\n          integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://bootswatch.com/4/journal/bootstrap.min.css\" />\n\n    <!-- <title>Authentication</title> -->\n\n</head>\n<body>\n<div class=\"container\">")
    ; __line = 14
    ; __append( body )
    ; __append("</div>\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n        integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"\n        integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"\n        integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n        crossorigin=\"anonymous\"></script>\n</body>\n</html>")
    ; __line = 26
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_login = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\"><i class=\"fas fa-sign-in-alt\"></i> Login</h1>\n            <%- include('./partials/messages.ejs'); -%>\n\n            <form action=\"/users/login\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Enter Password\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n            </form>\n            <p style=\"color: black;\" class=\"lead mt-4\">\n                No Account? <a href=\"/users/register\">Register</a>\n            </p>\n            <p style=\"color: black;\" class=\"lead mt-45\">\n                Forgotten Password? <a href=\"/users/reset\">Reset</a>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\"><i class=\"fas fa-sign-in-alt\"></i> Login</h1>\n            ")
    ; __line = 6
    ; __append( include('./partials/messages.ejs') )
    ; __append("\n            <form action=\"/users/login\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Enter Password\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n            </form>\n            <p style=\"color: black;\" class=\"lead mt-4\">\n                No Account? <a href=\"/users/register\">Register</a>\n            </p>\n            <p style=\"color: black;\" class=\"lead mt-45\">\n                Forgotten Password? <a href=\"/users/reset\">Reset</a>\n        </div>\n    </div>\n</div>")
    ; __line = 27
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_newQuestion = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"grid-container\">\n\n    <section class=\"nq\">\n        <div class=\"your-answer\">\n            <div class=\"add-another-answer\">\n                <h1 class=\"questionTitle\"> New Question </h1>\n            </div>\n\n            \n            <form action=\"/questions/ask\" method=\"post\">\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\">Question title:</label> -->\n                    <input class=\"t\" id=\"text\" type=\"text\" name = \"t\" placeholder=\"Question Title\" required/>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"textarea\">Enter a question:</label> -->\n                    <textarea class=\"q\" id=\"editor\" name = \"q\" cols=\"30\" rows=\"20\" placeholder=\"Write your question here\"></textarea>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\" class=\"tag\">Select the tag:</label> -->\n                    <input class=\"tags\" id=\"text\" type=\"text\" name=\"tags\" placeholder=\"tags\">\n                </div>\n\n                <div class=\"qt\">\n                    <input type=\"submit\" class=\"submit\">\n                </div>\n            </form>\n            </div>\n    </section>\n</div>\n\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"grid-container\">\n\n    <section class=\"nq\">\n        <div class=\"your-answer\">\n            <div class=\"add-another-answer\">\n                <h1 class=\"questionTitle\"> New Question </h1>\n            </div>\n\n            \n            <form action=\"/questions/ask\" method=\"post\">\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\">Question title:</label> -->\n                    <input class=\"t\" id=\"text\" type=\"text\" name = \"t\" placeholder=\"Question Title\" required/>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"textarea\">Enter a question:</label> -->\n                    <textarea class=\"q\" id=\"editor\" name = \"q\" cols=\"30\" rows=\"20\" placeholder=\"Write your question here\"></textarea>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\" class=\"tag\">Select the tag:</label> -->\n                    <input class=\"tags\" id=\"text\" type=\"text\" name=\"tags\" placeholder=\"tags\">\n                </div>\n\n                <div class=\"qt\">\n                    <input type=\"submit\" class=\"submit\">\n                </div>\n            </form>\n            </div>\n    </section>\n</div>\n\n\n")
    ; __line = 37
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_partials_messages = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<% if(typeof errors != 'undefined'){ %> <% errors.forEach(function(error) { %>\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n        <%= error.msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% }); %> <% } %>\n    \n    \n    <!-- success message from flash -->\n    <% if(success_msg != ''){ %>\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <%= success_msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>\n    <!-- error msg from flash -->\n    <% if(error_msg != ''){ %>\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        <%= error_msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>\n    \n    <% if(error != ''){ %>\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        <%= error %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ;  if(typeof errors != 'undefined'){ 
    ; __append(" ")
    ;  errors.forEach(function(error) { 
    ; __append("\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 3
    ; __append(escapeFn( error.msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 8
    ;  }); 
    ; __append(" ")
    ;  } 
    ; __append("\n    \n    \n    <!-- success message from flash -->\n    ")
    ; __line = 12
    ;  if(success_msg != ''){ 
    ; __append("\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 14
    ; __append(escapeFn( success_msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 19
    ;  } 
    ; __append("\n    <!-- error msg from flash -->\n    ")
    ; __line = 21
    ;  if(error_msg != ''){ 
    ; __append("\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 23
    ; __append(escapeFn( error_msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 28
    ;  } 
    ; __append("\n    \n    ")
    ; __line = 30
    ;  if(error != ''){ 
    ; __append("\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 32
    ; __append(escapeFn( error ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 37
    ;  } 
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_profile = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = ""
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_question = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"questionTitle\">Question title</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"question-content\">\n\n                <div class=\"question-title\">\n                    <h3>Question Title</h3>\n                </div>\n\n                <div class=\"visits\">\n                    Viewed by X people\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-question\">\n                    <p>Here we will be placing the actual question</p>\n                </div>\n\n                <div class=\"question-tags\">\n                    <p>Tags: <a href=\"index.html\">Tag1</a>, <a href=\"index.html\">Tag2</a>, <a\n                                href=\"index.html\">Tag3</a></p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-asked\">\n                        <p>Asked by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-asked\">\n                        <p>Asked on: X</p>\n                    </div>\n\n                </div>\n\n                <div class=\"number-of-answers\">\n                    X answers\n                </div>\n            </div>\n\n            <div class=\"answer-content\">\n\n                <div class=\"answer-title\">\n                    <h3>Answer Title</h3>\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-answer\">\n                    <p>Here we will be placing the actual answer</p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-answered\">\n                        <p>Answered by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-answered\">\n                        <p>Answered on: X</p>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"your-answer\">\n                <!-- The answer to the questions will be decided as follows:\n                 If there already exists some answer, then a button (add another answer) shall be displayed in the\n                 bottom of the page, otherwise, a textarea with markdown content shall be displayed\n              -->\n\n                <!-- version 1: button -->\n                <div class=\"add-another-answer\">\n                    <a href=\"index.html\">Add another answer</a>\n                </div>\n\n                <!-- version 2: textarea -->\n                <form class=\"answer\">\n                    <!-- This will be a text area in which the users shall be able to answer to questions in markdown format -->\n                    <label for=\"answer\">Possible Answers?</label>\n                    <textarea id=\"answer\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                    <input type=\"submit\" class=\"submit-answer\" value=\"Submit\">\n                </form>\n            </div>\n        </div>\n        <script src=\"./js/markdown.js\">\n        </script>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"questionTitle\">Question title</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"question-content\">\n\n                <div class=\"question-title\">\n                    <h3>Question Title</h3>\n                </div>\n\n                <div class=\"visits\">\n                    Viewed by X people\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-question\">\n                    <p>Here we will be placing the actual question</p>\n                </div>\n\n                <div class=\"question-tags\">\n                    <p>Tags: <a href=\"index.html\">Tag1</a>, <a href=\"index.html\">Tag2</a>, <a\n                                href=\"index.html\">Tag3</a></p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-asked\">\n                        <p>Asked by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-asked\">\n                        <p>Asked on: X</p>\n                    </div>\n\n                </div>\n\n                <div class=\"number-of-answers\">\n                    X answers\n                </div>\n            </div>\n\n            <div class=\"answer-content\">\n\n                <div class=\"answer-title\">\n                    <h3>Answer Title</h3>\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-answer\">\n                    <p>Here we will be placing the actual answer</p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-answered\">\n                        <p>Answered by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-answered\">\n                        <p>Answered on: X</p>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"your-answer\">\n                <!-- The answer to the questions will be decided as follows:\n                 If there already exists some answer, then a button (add another answer) shall be displayed in the\n                 bottom of the page, otherwise, a textarea with markdown content shall be displayed\n              -->\n\n                <!-- version 1: button -->\n                <div class=\"add-another-answer\">\n                    <a href=\"index.html\">Add another answer</a>\n                </div>\n\n                <!-- version 2: textarea -->\n                <form class=\"answer\">\n                    <!-- This will be a text area in which the users shall be able to answer to questions in markdown format -->\n                    <label for=\"answer\">Possible Answers?</label>\n                    <textarea id=\"answer\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                    <input type=\"submit\" class=\"submit-answer\" value=\"Submit\">\n                </form>\n            </div>\n        </div>\n        <script src=\"./js/markdown.js\">\n        </script>\n")
    ; __line = 117
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_questions = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "                        <div class=\"main-content\">\n\n                            <h3 class=\"question-title\">\n                                <%- question.title %>\n                            </h3>\n\n                            <div class=\"question-content\">\n\n\n                                <div class=\"votes\">\n                                    <form action=\"/questions/up/<%-question.id%>?_method=PUT\"\n                                        method=\"post\" class=\"upform\">\n                                        <input type=\"image\" class=\"up\" name=\"submit\" src=\"../images/upvote.png\"\n                                            width=\"30\" height=\"30\" alt=\"upvote button\">\n                                    </form>\n\n                                    <p class=\"pvotes\"><%-question.score%></p>\n\n                                    <form action=\"/questions/down/<%-question.id%>?_method=PUT\" method=\"post\" class=\"downform\">\n                                        <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                            height=\"30\" alt=\"downvote button\">\n                                    </form>\n                                </div>\n\n                                <div class=\"actual-question\">\n                                    <%- question.body %>\n                                </div>\n\n                                <div class=\"question-tags\">\n                                    <h4 class=\"tags\">Tags:</h4>\n                                    <% question.tags.split('|').forEach((t)=> {%>\n                                        <%if (t !='' ){%>\n                                            <div class=\"tt\">\n                                                <p><a href=\"/tags/<%-t%>\"><%- t %></a></p>\n                                            </div>\n                                            <%}%>\n                                                <%})%>\n                                </div>\n\n                                <div class=\"user-details\">\n                                    <p>\n                                        Asked by:\n                                        <%if(question.ownerUserId==0){%>\n                                            Anonymous\n                                            <%} else {%>\n                                                <a href=\"/users/<%-question.ownerUserId%>\"><%-users.find(e=> e.id ===\n                                                        question.ownerUserId).displayName%></a>\n                                                <%}%>\n                                    </p>\n                                    <!-- add also user profile picture  -->\n\n                                    <p>\n                                        Asked on: <%- new Date(question.creationDate).toUTCString().split('G')[0] %>\n                                    </p>\n\n                                </div>\n\n\n                                <div class=\"number-of-answers\">\n                                    <p>\n                                        Number of answers: <%- question.answerCount %>\n                                    </p>\n                                </div>\n\n                            </div>\n\n\n                            <% answers.forEach((n)=> {%>\n                                <div class=\"question-content\">\n                                    <div class=\"votes\">\n                                        <form action=\"/questions/up/<%-n.id%>?_method=PUT\" class=\"upform\" method=\"post\"> \n                                            <input type=\"image\" class=\"up\" class=\"\" name=\"submit\" src=\"../images/upvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"upvote button\">\n                                        </form>\n\n                                        <p class=\"pvotes\"><%-n.score%></p>\n\n                                        <form action=\"/questions/down/<%-n.id%>?_method=PUT\" class=\"downform\" method=\"post\">\n                                            <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"downvote button\">\n                                        </form>\n                                    </div>\n\n                                    <div class=\"actual-question\">\n                                        <%- n.body %>\n                                    </div>\n\n                                    <div></div>\n\n                                    <div class=\"user-details\">\n\n                                        <p>Answered by\n                                            <%if(n.ownerUserId==0){%>\n                                                Anonymous\n                                                <%} else {%>\n                                                    <a href=\"/users/<%-n.ownerUserId%>\"><%-users.find(e=> e.id ===\n                                                            n.ownerUserId).displayName%></a>\n                                                    <%}%><!-- add also user profile picture  -->\n                                                        <p>Answered on: <%- new\n                                                                Date(n.creationDate).toUTCString().split('G')[0] %></p>\n                                    </div>\n                                </div>\n                                <% }) %>\n\n                                    <!-- <div class=\"modify-content-buttons\">\n                        <a href=\"index.html\">Edit</a>\n                        <a href=\"index.html\">Delete</a>\n                    </div> -->\n\n                    <div class=\"your-answer\">\n                        <div class=\"add-another-answer\">\n                            <p>Your Answer</p>\n                        </div>\n\n                        <form class=\"answer\" action=\"/questions/answer/<%-question.id%>\" method = \"post\">\n                           \n                            <!-- <textarea id=\"editor\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea> -->\n                            <textarea id=\"editor\" class=\"textarea\" name=\"answer\" wrap=\"physical\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                            <!-- <div class=\"previewEditor\"></div> -->\n                            <!-- <div id=\"editor\"></div> -->\n                            \n                            <!-- <div id=\"editor\"></div> -->\n\n                            <!-- <input type=\"submit\" class=\"submit-answer\" value=\"Submit\"> -->\n                            <input type=\"submit\" class=\"btn btn-success\" value=\"Post your answer\">\n                            \n                            <!-- <button type=\"button\" class=\"btn btn-success\">Success</button> -->\n                        </form>\n                    </div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("                        <div class=\"main-content\">\n\n                            <h3 class=\"question-title\">\n                                ")
    ; __line = 4
    ; __append( question.title )
    ; __append("\n                            </h3>\n\n                            <div class=\"question-content\">\n\n\n                                <div class=\"votes\">\n                                    <form action=\"/questions/up/")
    ; __line = 11
    ; __append(question.id)
    ; __append("?_method=PUT\"\n                                        method=\"post\" class=\"upform\">\n                                        <input type=\"image\" class=\"up\" name=\"submit\" src=\"../images/upvote.png\"\n                                            width=\"30\" height=\"30\" alt=\"upvote button\">\n                                    </form>\n\n                                    <p class=\"pvotes\">")
    ; __line = 17
    ; __append(question.score)
    ; __append("</p>\n\n                                    <form action=\"/questions/down/")
    ; __line = 19
    ; __append(question.id)
    ; __append("?_method=PUT\" method=\"post\" class=\"downform\">\n                                        <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                            height=\"30\" alt=\"downvote button\">\n                                    </form>\n                                </div>\n\n                                <div class=\"actual-question\">\n                                    ")
    ; __line = 26
    ; __append( question.body )
    ; __append("\n                                </div>\n\n                                <div class=\"question-tags\">\n                                    <h4 class=\"tags\">Tags:</h4>\n                                    ")
    ; __line = 31
    ;  question.tags.split('|').forEach((t)=> {
    ; __append("\n                                        ")
    ; __line = 32
    ; if (t !='' ){
    ; __append("\n                                            <div class=\"tt\">\n                                                <p><a href=\"/tags/")
    ; __line = 34
    ; __append(t)
    ; __append("\">")
    ; __append( t )
    ; __append("</a></p>\n                                            </div>\n                                            ")
    ; __line = 36
    ; }
    ; __append("\n                                                ")
    ; __line = 37
    ; })
    ; __append("\n                                </div>\n\n                                <div class=\"user-details\">\n                                    <p>\n                                        Asked by:\n                                        ")
    ; __line = 43
    ; if(question.ownerUserId==0){
    ; __append("\n                                            Anonymous\n                                            ")
    ; __line = 45
    ; } else {
    ; __append("\n                                                <a href=\"/users/")
    ; __line = 46
    ; __append(question.ownerUserId)
    ; __append("\">")
    ; __append(users.find(e=> e.id ===
                                                        question.ownerUserId).displayName)
    ; __line = 47
    ; __append("</a>\n                                                ")
    ; __line = 48
    ; }
    ; __append("\n                                    </p>\n                                    <!-- add also user profile picture  -->\n\n                                    <p>\n                                        Asked on: ")
    ; __line = 53
    ; __append( new Date(question.creationDate).toUTCString().split('G')[0] )
    ; __append("\n                                    </p>\n\n                                </div>\n\n\n                                <div class=\"number-of-answers\">\n                                    <p>\n                                        Number of answers: ")
    ; __line = 61
    ; __append( question.answerCount )
    ; __append("\n                                    </p>\n                                </div>\n\n                            </div>\n\n\n                            ")
    ; __line = 68
    ;  answers.forEach((n)=> {
    ; __append("\n                                <div class=\"question-content\">\n                                    <div class=\"votes\">\n                                        <form action=\"/questions/up/")
    ; __line = 71
    ; __append(n.id)
    ; __append("?_method=PUT\" class=\"upform\" method=\"post\"> \n                                            <input type=\"image\" class=\"up\" class=\"\" name=\"submit\" src=\"../images/upvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"upvote button\">\n                                        </form>\n\n                                        <p class=\"pvotes\">")
    ; __line = 76
    ; __append(n.score)
    ; __append("</p>\n\n                                        <form action=\"/questions/down/")
    ; __line = 78
    ; __append(n.id)
    ; __append("?_method=PUT\" class=\"downform\" method=\"post\">\n                                            <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"downvote button\">\n                                        </form>\n                                    </div>\n\n                                    <div class=\"actual-question\">\n                                        ")
    ; __line = 85
    ; __append( n.body )
    ; __append("\n                                    </div>\n\n                                    <div></div>\n\n                                    <div class=\"user-details\">\n\n                                        <p>Answered by\n                                            ")
    ; __line = 93
    ; if(n.ownerUserId==0){
    ; __append("\n                                                Anonymous\n                                                ")
    ; __line = 95
    ; } else {
    ; __append("\n                                                    <a href=\"/users/")
    ; __line = 96
    ; __append(n.ownerUserId)
    ; __append("\">")
    ; __append(users.find(e=> e.id ===
                                                            n.ownerUserId).displayName)
    ; __line = 97
    ; __append("</a>\n                                                    ")
    ; __line = 98
    ; }
    ; __append("<!-- add also user profile picture  -->\n                                                        <p>Answered on: ")
    ; __line = 99
    ; __append( new
                                                                Date(n.creationDate).toUTCString().split('G')[0] )
    ; __line = 100
    ; __append("</p>\n                                    </div>\n                                </div>\n                                ")
    ; __line = 103
    ;  }) 
    ; __append("\n\n                                    <!-- <div class=\"modify-content-buttons\">\n                        <a href=\"index.html\">Edit</a>\n                        <a href=\"index.html\">Delete</a>\n                    </div> -->\n\n                    <div class=\"your-answer\">\n                        <div class=\"add-another-answer\">\n                            <p>Your Answer</p>\n                        </div>\n\n                        <form class=\"answer\" action=\"/questions/answer/")
    ; __line = 115
    ; __append(question.id)
    ; __append("\" method = \"post\">\n                           \n                            <!-- <textarea id=\"editor\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea> -->\n                            <textarea id=\"editor\" class=\"textarea\" name=\"answer\" wrap=\"physical\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                            <!-- <div class=\"previewEditor\"></div> -->\n                            <!-- <div id=\"editor\"></div> -->\n                            \n                            <!-- <div id=\"editor\"></div> -->\n\n                            <!-- <input type=\"submit\" class=\"submit-answer\" value=\"Submit\"> -->\n                            <input type=\"submit\" class=\"btn btn-success\" value=\"Post your answer\">\n                            \n                            <!-- <button type=\"button\" class=\"btn btn-success\">Success</button> -->\n                        </form>\n                    </div>\n\n")
    ; __line = 131
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_register = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\">\n                <i class=\"fas fa-user-plus\"></i> Register\n            </h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/register\" enctype=\"multipart/form-data\" method=\"POST\" >\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"name\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\"\n                        value=\"<%= typeof name != 'undefined' ? name : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\"\n                        value=\"<%= typeof email != 'undefined' ? email : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                        placeholder=\"Create Password\" value=\"<%= typeof password != 'undefined' ? password : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                        placeholder=\"Confirm Password\"\n                        value=\"<%= typeof password2 != 'undefined' ? password2 : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"image\">Profile Picture (optional)</label>\n                    <input type=\"file\" id=\"image\"\n                           name=\"image\" value=\"\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">\n                    Register\n                </button>\n            </form>\n            <p class=\"lead mt-4\">Have An Account? <a href=\"/users/login\">Login</a></p>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\">\n                <i class=\"fas fa-user-plus\"></i> Register\n            </h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/register\" enctype=\"multipart/form-data\" method=\"POST\" >\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"name\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\"\n                        value=\"")
    ; __line = 12
    ; __append(escapeFn( typeof name != 'undefined' ? name : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\"\n                        value=\"")
    ; __line = 17
    ; __append(escapeFn( typeof email != 'undefined' ? email : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                        placeholder=\"Create Password\" value=\"")
    ; __line = 22
    ; __append(escapeFn( typeof password != 'undefined' ? password : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                        placeholder=\"Confirm Password\"\n                        value=\"")
    ; __line = 28
    ; __append(escapeFn( typeof password2 != 'undefined' ? password2 : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"image\">Profile Picture (optional)</label>\n                    <input type=\"file\" id=\"image\"\n                           name=\"image\" value=\"\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">\n                    Register\n                </button>\n            </form>\n            <p class=\"lead mt-4\">Have An Account? <a href=\"/users/login\">Login</a></p>\n        </div>\n    </div>\n</div>")
    ; __line = 42
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_tags = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"tags_filters\">\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/popular\"> POPULAR </a></p>\n    </div>\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/\"> NEW </a></p>\n    </div>\n</div>\n<div class=\"tags_container\">\n    <% let row=t=> { %>\n        <a href=\"/tags/<%-t.name%>\">\n            <div class=\"tags_cell\">\n                <div class=\"tags_name\">\n                        <%-t.name%>\n                    \n                </div>\n                <div class=\"tags_count\">\n                    <p> posted: <%-t.count%> times </p>\n                </div>\n            </div>\n        </a>\n        <%} %>\n            <%- tags.map(row).join(\"\") %>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"tags_filters\">\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/popular\"> POPULAR </a></p>\n    </div>\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/\"> NEW </a></p>\n    </div>\n</div>\n<div class=\"tags_container\">\n    ")
    ; __line = 10
    ;  let row=t=> { 
    ; __append("\n        <a href=\"/tags/")
    ; __line = 11
    ; __append(t.name)
    ; __append("\">\n            <div class=\"tags_cell\">\n                <div class=\"tags_name\">\n                        ")
    ; __line = 14
    ; __append(t.name)
    ; __append("\n                    \n                </div>\n                <div class=\"tags_count\">\n                    <p> posted: ")
    ; __line = 18
    ; __append(t.count)
    ; __append(" times </p>\n                </div>\n            </div>\n        </a>\n        ")
    ; __line = 22
    ; } 
    ; __append("\n            ")
    ; __line = 23
    ; __append( tags.map(row).join("") )
    ; __append("\n</div>")
    ; __line = 24
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_tags_name = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"trendingQ\">Tags questions</h1>\n\n        <div class=\"main-content\">\n\n            <% posts.forEach(post => { %>\n\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                        <p><span class=\"styleT\"> <%= post.title %> </span></p>\n                        <br>\n                        <p><span> <%= post.answerCount %> </span></p>\n                        <br>\n                        <p><span> <%= post.creationDate.split('G')[0] %> </span></p>\n                        <br>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"trendingQ\">Tags questions</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 6
    ;  posts.forEach(post => { 
    ; __append("\n\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 9
    ; __append( post.id )
    ; __append("\">\n                        <p><span class=\"styleT\"> ")
    ; __line = 10
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 12
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 14
    ; __append(escapeFn( post.creationDate.split('G')[0] ))
    ; __append(" </span></p>\n                        <br>\n                    </a>\n                </div>\n            ")
    ; __line = 18
    ;  }); 
    ; __append("\n        </div>\n")
    ; __line = 20
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_user_profile = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 id=\"profile\" class=\"trendingQ\">User profile</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"d1\">\n                <br>\n                <p><span> <%= user.displayName %> </span></p>\n                <br>\n                <img src=\"<%= user.profileImageUrl %>\" alt=\"user profile img\">\n                <p><span>number of questions: <%= user.questionCount %> </span></p>\n                <p><span>number of answers: <%= user.answerCount %> </span></p>\n                <p><span>badges awards: gold = <%= user.goldBadges %> | silver =  <%= user.silverBadges %> | bronze = <%= user.bronzeBadges %></span></p>\n            </div>\n\n        </div>\n\n        <h1 id=\"questions\" class=\"trendingQ\">User questions</h1>\n\n        <div class=\"main-content\">\n\n            <% questions.forEach(post => { %>\n                <% if(post.ownerUserId == user.id){%>\n                    <div class=\"d1\">\n                        <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                            <p><span class=\"styleT\"> <%= post.title %> </span></p>\n                            <br>\n                            <p><span> score: <%= post.score %> </span></p>\n                            <br>\n                            <p><span> answers: <%= post.answerCount %> </span></p>\n                            <br>\n                            <p><span> asked on: <%= new Date(post.creationDate).toUTCString().split('G')[0] %> </span></p>\n\n                            <br>\n                        </a>\n                    </div>\n                <%}%>\n            <% }); %>\n        </div>\n\n        <h1 id=\"answers\" class=\"trendingQ\">User answers</h1>\n\n        <div class=\"main-content\">\n\n            <% user_answers.forEach(post => { %>\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.parentId %>\">\n                        <p><span class=\"styleT\"> <%= questions.find(e=>e.id == post.parentId).title %> </span></p>\n                        <br>\n                        <p><span> score: <%= post.score %> </span></p>\n                        <br>\n                        <p><span> <%= new Date(post.creationDate).toUTCString().split('G')[0] %> </span></p>\n\n                        <br>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n    </main>\n    <!-- <aside style=\"border-right: 20px; position: -webkit-sticky; color: white; border: 2px solid white; height: 20%; width: auto; display: flex; flex-direction: column;\">\n        <a style=\"color: white;\" href=\"#profile\">PROFILE</a>\n        <a style=\"color: white;\" href=\"#questions\">USER QUESTIONS</a>\n        <a style=\"color: white;\" href=\"#answers\">USER ANSWERS</a>\n    </aside> -->\n\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 id=\"profile\" class=\"trendingQ\">User profile</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"d1\">\n                <br>\n                <p><span> ")
    ; __line = 8
    ; __append(escapeFn( user.displayName ))
    ; __append(" </span></p>\n                <br>\n                <img src=\"")
    ; __line = 10
    ; __append(escapeFn( user.profileImageUrl ))
    ; __append("\" alt=\"user profile img\">\n                <p><span>number of questions: ")
    ; __line = 11
    ; __append(escapeFn( user.questionCount ))
    ; __append(" </span></p>\n                <p><span>number of answers: ")
    ; __line = 12
    ; __append(escapeFn( user.answerCount ))
    ; __append(" </span></p>\n                <p><span>badges awards: gold = ")
    ; __line = 13
    ; __append(escapeFn( user.goldBadges ))
    ; __append(" | silver =  ")
    ; __append(escapeFn( user.silverBadges ))
    ; __append(" | bronze = ")
    ; __append(escapeFn( user.bronzeBadges ))
    ; __append("</span></p>\n            </div>\n\n        </div>\n\n        <h1 id=\"questions\" class=\"trendingQ\">User questions</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 22
    ;  questions.forEach(post => { 
    ; __append("\n                ")
    ; __line = 23
    ;  if(post.ownerUserId == user.id){
    ; __append("\n                    <div class=\"d1\">\n                        <a class=\"linkQ\" href=\"/questions/")
    ; __line = 25
    ; __append( post.id )
    ; __append("\">\n                            <p><span class=\"styleT\"> ")
    ; __line = 26
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> score: ")
    ; __line = 28
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> answers: ")
    ; __line = 30
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> asked on: ")
    ; __line = 32
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append(" </span></p>\n\n                            <br>\n                        </a>\n                    </div>\n                ")
    ; __line = 37
    ; }
    ; __append("\n            ")
    ; __line = 38
    ;  }); 
    ; __append("\n        </div>\n\n        <h1 id=\"answers\" class=\"trendingQ\">User answers</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 45
    ;  user_answers.forEach(post => { 
    ; __append("\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 47
    ; __append( post.parentId )
    ; __append("\">\n                        <p><span class=\"styleT\"> ")
    ; __line = 48
    ; __append(escapeFn( questions.find(e=>e.id == post.parentId).title ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> score: ")
    ; __line = 50
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 52
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append(" </span></p>\n\n                        <br>\n                    </a>\n                </div>\n            ")
    ; __line = 57
    ;  }); 
    ; __append("\n        </div>\n    </main>\n    <!-- <aside style=\"border-right: 20px; position: -webkit-sticky; color: white; border: 2px solid white; height: 20%; width: auto; display: flex; flex-direction: column;\">\n        <a style=\"color: white;\" href=\"#profile\">PROFILE</a>\n        <a style=\"color: white;\" href=\"#questions\">USER QUESTIONS</a>\n        <a style=\"color: white;\" href=\"#answers\">USER ANSWERS</a>\n    </aside> -->\n\n</div>\n\n")
    ; __line = 68
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_users_list = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "        <h1 class=\"trendingQ\">List of users</h1>\n\n\n        <div class=\"user-content\">\n\n            <% users.forEach(user => { %>\n                <div class=\"tags_cell\">\n                        <a class=\"linkU\" href=\"/users/<%- user.id %>\">\n                            <div>\n                                <img class=\"img\" src=\"<%= user.profileImageUrl %>\" alt=\"user profile img\">\n                                <p class=\"styleT\" > <%= user.displayName %></p>\n                            </div>\n                            <div class = \"right\">\n                                <br>\n                                <p><span>number of questions: <%= user.questionCount %> </span></p>\n                                <p><span>number of answers: <%= user.answerCount %> </span></p>\n                                <p><span>reputation: <%= user.reputation %></span></p>\n                            </div>\n                        </a>\n                </div>\n            <% }); %>\n\n        </div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("        <h1 class=\"trendingQ\">List of users</h1>\n\n\n        <div class=\"user-content\">\n\n            ")
    ; __line = 6
    ;  users.forEach(user => { 
    ; __append("\n                <div class=\"tags_cell\">\n                        <a class=\"linkU\" href=\"/users/")
    ; __line = 8
    ; __append( user.id )
    ; __append("\">\n                            <div>\n                                <img class=\"img\" src=\"")
    ; __line = 10
    ; __append(escapeFn( user.profileImageUrl ))
    ; __append("\" alt=\"user profile img\">\n                                <p class=\"styleT\" > ")
    ; __line = 11
    ; __append(escapeFn( user.displayName ))
    ; __append("</p>\n                            </div>\n                            <div class = \"right\">\n                                <br>\n                                <p><span>number of questions: ")
    ; __line = 15
    ; __append(escapeFn( user.questionCount ))
    ; __append(" </span></p>\n                                <p><span>number of answers: ")
    ; __line = 16
    ; __append(escapeFn( user.answerCount ))
    ; __append(" </span></p>\n                                <p><span>reputation: ")
    ; __line = 17
    ; __append(escapeFn( user.reputation ))
    ; __append("</span></p>\n                            </div>\n                        </a>\n                </div>\n            ")
    ; __line = 21
    ;  }); 
    ; __append("\n\n        </div>")
    ; __line = 23
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_welcome = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body text-center\">\n            <h1><i class=\"fas fa-code\"></i> Stack Underflow</h1>\n            <p style=\"color: black;\">Authenticate yourself</p>\n            <a href=\"/users/register\" class=\"btn btn-primary btn-block mb-2\">Register</a>\n            <a href=\"/users/login\" class=\"btn btn-secondary btn-block\">Login</a>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body text-center\">\n            <h1><i class=\"fas fa-code\"></i> Stack Underflow</h1>\n            <p style=\"color: black;\">Authenticate yourself</p>\n            <a href=\"/users/register\" class=\"btn btn-primary btn-block mb-2\">Register</a>\n            <a href=\"/users/login\" class=\"btn btn-secondary btn-block\">Login</a>\n        </div>\n    </div>\n</div>")
    ; __line = 11
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_answers = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <div class=\"main-content\">\n            <div class=\"votes\">\n                <!-- upvote button image -->\n                <img src=\"../public/images/upvote.png\" width=\"30\" height=\"30\" alt=\"upvote button\">\n                <p>0</p> <!-- Will be dynamically generated -->\n                <!-- downvote button image -->\n                <img src=\"../public/images/downvote.png\" width=\"30\" height=\"30\" alt=\"downvote button\">\n            </div>\n            <div class=\"answer-body\">\n                <p>This is the answer's body. It shall be dynamically loaded in the following days.</p>\n                <p>Here, if any, the code in question will be placed</p>\n            </div>\n            <div class=\"modify-content-buttons\">\n                <button class=\"edit\">Edit</button>\n                <button class=\"delete\">Delete</button>\n            </div>\n\n            <div class=\"user-answered\">\n                <p>Answered by <a href=\"#\">user1</a></p>\n                <!-- add also user profile picture  -->\n            </div>\n\n            <div class=\"answer-comments\">\n                <p>Comments:</p>\n                <p>Comment 1</p>\n                <p>Comment 2</p>\n                <p>Comment 3</p>\n            </div>\n\n            <div class=\"add-comment\">\n                <p>Add a comment:</p>\n                <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\"></textarea>\n                <button class=\"add-comment\">Add comment</button>\n            </div>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <div class=\"main-content\">\n            <div class=\"votes\">\n                <!-- upvote button image -->\n                <img src=\"../public/images/upvote.png\" width=\"30\" height=\"30\" alt=\"upvote button\">\n                <p>0</p> <!-- Will be dynamically generated -->\n                <!-- downvote button image -->\n                <img src=\"../public/images/downvote.png\" width=\"30\" height=\"30\" alt=\"downvote button\">\n            </div>\n            <div class=\"answer-body\">\n                <p>This is the answer's body. It shall be dynamically loaded in the following days.</p>\n                <p>Here, if any, the code in question will be placed</p>\n            </div>\n            <div class=\"modify-content-buttons\">\n                <button class=\"edit\">Edit</button>\n                <button class=\"delete\">Delete</button>\n            </div>\n\n            <div class=\"user-answered\">\n                <p>Answered by <a href=\"#\">user1</a></p>\n                <!-- add also user profile picture  -->\n            </div>\n\n            <div class=\"answer-comments\">\n                <p>Comments:</p>\n                <p>Comment 1</p>\n                <p>Comment 2</p>\n                <p>Comment 3</p>\n            </div>\n\n            <div class=\"add-comment\">\n                <p>Add a comment:</p>\n                <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\"></textarea>\n                <button class=\"add-comment\">Add comment</button>\n            </div>\n        </div>\n")
    ; __line = 37
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_check_email = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Password Reset page -->\n\n\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fa fa-envelope\"></i> Please check your email</h1>\n            <%- include('./partials/messages.ejs'); -%>\n        </div>\n        <div class=\"text-center\">\n            <a href=\"/\" class=\"btn btn-primary\">Return To Homepage</a>\n        </div>\n    </div>\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Password Reset page -->\n\n\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fa fa-envelope\"></i> Please check your email</h1>\n            ")
    ; __line = 8
    ; __append( include('./partials/messages.ejs') )
    ; __append("        </div>\n        <div class=\"text-center\">\n            <a href=\"/\" class=\"btn btn-primary\">Return To Homepage</a>\n        </div>\n    </div>\n</div>\n\n")
    ; __line = 16
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_confirm = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Confirm new Password page -->\n<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Confirm New Password</h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/confirm\" method=\"POST\">\n                <!-- create 2 form entries -->\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Create Password\" value=\"<%= typeof password != 'undefined' ? password : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                           placeholder=\"Confirm Password\"\n                           value=\"<%= typeof password2 != 'undefined' ? password2 : '' %>\" />\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Confirm new Password page -->\n")
    ; __line = 2
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Confirm New Password</h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/confirm\" method=\"POST\">\n                <!-- create 2 form entries -->\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Create Password\" value=\"")
    ; __line = 13
    ; __append(escapeFn( typeof password != 'undefined' ? password : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                           placeholder=\"Confirm Password\"\n                           value=\"")
    ; __line = 19
    ; __append(escapeFn( typeof password2 != 'undefined' ? password2 : '' ))
    ; __append("\" />\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n")
    ; __line = 29
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_dashboard = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<h1 class=\"mt-4\">You have been succesfully logged in as <%= name %> </h1>\n<p class=\"lead mb-3\">Welcome  <%= name %></p>\n<a href=\"/users/logout\" class=\"btn btn-secondary\">Logout</a>\n<a href=\"/\">Proceed to Questions page</a>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<h1 class=\"mt-4\">You have been succesfully logged in as ")
    ; __append(escapeFn( name ))
    ; __append(" </h1>\n<p class=\"lead mb-3\">Welcome  ")
    ; __line = 2
    ; __append(escapeFn( name ))
    ; __append("</p>\n<a href=\"/users/logout\" class=\"btn btn-secondary\">Logout</a>\n<a href=\"/\">Proceed to Questions page</a>")
    ; __line = 4
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_forgot_password = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Password Reset page -->\n<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Reset Password</h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/reset\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Password Reset page -->\n")
    ; __line = 2
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Reset Password</h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/reset\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n")
    ; __line = 19
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_home = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n\n<%- include ('includes/head') %>\n\n<body>\n\n    <section>\n        <img class=\"welcome\" src=\"../images/Stack%20Underflow.png\">\n    </section>\n\n</body>\n\n<script src=\"./js/search.js\">\n\n</script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n\n")
    ; __line = 3
    ; __append( include ('includes/head') )
    ; __append("\n\n<body>\n\n    <section>\n        <img class=\"welcome\" src=\"../images/Stack%20Underflow.png\">\n    </section>\n\n</body>\n\n<script src=\"./js/search.js\">\n\n</script>\n</html>")
    ; __line = 16
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = ""
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_head = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <title>Stack Underflow</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"https://cdn.socket.io/4.4.1/socket.io.min.js\"></script>\n    <script>const socket = io(\"ws://localhost:8000\");</script>\n    <script src='/js/events.js'></script>\n    <script src=\"https://code.jquery.com/jquery-3.6.1.js\"></script>\n    <script src=\"/js/iziToast.js\" type=\"text/javascript\"></script>\n\n    <script src=\"./js/markdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/showdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/search.js\" type=\"text/javascript\"></script>\n    \n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js\"></script>\n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/super-build/ckeditor.js\"></script>\n    <script>\n        ClassicEditor\n            .create( document.querySelector('#editor'))\n            .catch( error => {\n                console.error( error );\n            } );\n    </script>\n\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <title>Stack Underflow</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"https://cdn.socket.io/4.4.1/socket.io.min.js\"></script>\n    <script>const socket = io(\"ws://localhost:8000\");</script>\n    <script src='/js/events.js'></script>\n    <script src=\"https://code.jquery.com/jquery-3.6.1.js\"></script>\n    <script src=\"/js/iziToast.js\" type=\"text/javascript\"></script>\n\n    <script src=\"./js/markdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/showdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/search.js\" type=\"text/javascript\"></script>\n    \n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js\"></script>\n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/super-build/ckeditor.js\"></script>\n    <script>\n        ClassicEditor\n            .create( document.querySelector('#editor'))\n            .catch( error => {\n                console.error( error );\n            } );\n    </script>\n\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">")
    ; __line = 36
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_header = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <img class=\"header-logo\" src=\"../images/logo.png\" alt=\"logo\">\n    <input class=\"searchbar\" id=\"searchInput\" type=\"text\" placeholder=\"Search\">\n    <% if (logged) { %>\n        <a class=\"header-logout\" href=\"/users/logout\"> Logout </a>\n    <% } else { %>\n        <a class=\"header-logout\" href=\"/users\"> Login </a>\n    <% } %>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <img class=\"header-logo\" src=\"../images/logo.png\" alt=\"logo\">\n    <input class=\"searchbar\" id=\"searchInput\" type=\"text\" placeholder=\"Search\">\n    ")
    ; __line = 3
    ;  if (logged) { 
    ; __append("\n        <a class=\"header-logout\" href=\"/users/logout\"> Logout </a>\n    ")
    ; __line = 5
    ;  } else { 
    ; __append("\n        <a class=\"header-logout\" href=\"/users\"> Login </a>\n    ")
    ; __line = 7
    ;  } 
    ; __append("\n")
    ; __line = 8
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_nav = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <a href=\"/\"> Home </a>\n    <a href=\"/users/users_list\"> Users </a>    \n    <a href=\"/tags\"> Tags </a>\n    <br>\n    <br>\n    <a href=\"/questions/ask\" class=\"newAsk\"> Ask </a>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <a href=\"/\"> Home </a>\n    <a href=\"/users/users_list\"> Users </a>    \n    <a href=\"/tags\"> Tags </a>\n    <br>\n    <br>\n    <a href=\"/questions/ask\" class=\"newAsk\"> Ask </a>\n")
    ; __line = 7
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"trendingQ\">Browse questions</h1>\n\n        <div class=\"maincontentdiv\">\n\n            <% posts.forEach(post => { %>\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                        <div class=\"d\">\n                            <div class=\"dtitle\">\n                                <p class=\"styleT\"><span class=\"styleT\"> <%= post.title %> </span></p>\n                                <br>\n                                <p class=\"ptt\"><span><%- post.bodyMarkdown %></span></p>\n                            </div>\n                            <div class=\"dscore\">\n                                <p class=\"stylediv\"><span> score: <%= post.score %> </span></p>\n                            </div>\n                            <div class=\"dcount\">\n                                <p class=\"stylediv\"><span> answers: <%= post.answerCount %> </span></p>\n                            </div>\n                            <div class=\"ddate\">\n                                <p class=\"stylediv\"><span><%= new Date(post.creationDate).toUTCString().split('G')[0] %></span></p>\n                            </div>\n                            <div class=\"dtag\">\n                                <% post.tags.split(\"|\").forEach(tag =>{ %>\n\n                                    <% if (tag != ''){%> \n                                    <div class=\"styletag\">\n                                        <span><%- tag %></span>\n                                    </div>   \n                                    <%}%> \n                                <% }) %>\n                            </div>\n                            <div class=\"duser\">\n                                <p><span>\n                                    <% if(post.ownerUserId ==0){%>\n                                        Anonymous\n                                    <% } else { %>\n                                        <%- users.find(e => e.id === post.ownerUserId).displayName %>\n                                    <%}%>\n                                </span></p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"trendingQ\">Browse questions</h1>\n\n        <div class=\"maincontentdiv\">\n\n            ")
    ; __line = 6
    ;  posts.forEach(post => { 
    ; __append("\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 8
    ; __append( post.id )
    ; __append("\">\n                        <div class=\"d\">\n                            <div class=\"dtitle\">\n                                <p class=\"styleT\"><span class=\"styleT\"> ")
    ; __line = 11
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                                <br>\n                                <p class=\"ptt\"><span>")
    ; __line = 13
    ; __append( post.bodyMarkdown )
    ; __append("</span></p>\n                            </div>\n                            <div class=\"dscore\">\n                                <p class=\"stylediv\"><span> score: ")
    ; __line = 16
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                            </div>\n                            <div class=\"dcount\">\n                                <p class=\"stylediv\"><span> answers: ")
    ; __line = 19
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                            </div>\n                            <div class=\"ddate\">\n                                <p class=\"stylediv\"><span>")
    ; __line = 22
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append("</span></p>\n                            </div>\n                            <div class=\"dtag\">\n                                ")
    ; __line = 25
    ;  post.tags.split("|").forEach(tag =>{ 
    ; __append("\n\n                                    ")
    ; __line = 27
    ;  if (tag != ''){
    ; __append(" \n                                    <div class=\"styletag\">\n                                        <span>")
    ; __line = 29
    ; __append( tag )
    ; __append("</span>\n                                    </div>   \n                                    ")
    ; __line = 31
    ; }
    ; __append(" \n                                ")
    ; __line = 32
    ;  }) 
    ; __append("\n                            </div>\n                            <div class=\"duser\">\n                                <p><span>\n                                    ")
    ; __line = 36
    ;  if(post.ownerUserId ==0){
    ; __append("\n                                        Anonymous\n                                    ")
    ; __line = 38
    ;  } else { 
    ; __append("\n                                        ")
    ; __line = 39
    ; __append( users.find(e => e.id === post.ownerUserId).displayName )
    ; __append("\n                                    ")
    ; __line = 40
    ; }
    ; __append("\n                                </span></p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            ")
    ; __line = 46
    ;  }); 
    ; __append("\n        </div>\n")
    ; __line = 48
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_layout = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\"\n          integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://bootswatch.com/4/journal/bootstrap.min.css\" />\n\n    <!-- <title>Authentication</title> -->\n\n</head>\n<body>\n<div class=\"container\"><%- body %></div>\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n        integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"\n        integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"\n        integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n        crossorigin=\"anonymous\"></script>\n</body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\"\n          integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://bootswatch.com/4/journal/bootstrap.min.css\" />\n\n    <!-- <title>Authentication</title> -->\n\n</head>\n<body>\n<div class=\"container\">")
    ; __line = 14
    ; __append( body )
    ; __append("</div>\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n        integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"\n        integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"\n        integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n        crossorigin=\"anonymous\"></script>\n</body>\n</html>")
    ; __line = 26
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_login = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\"><i class=\"fas fa-sign-in-alt\"></i> Login</h1>\n            <%- include('./partials/messages.ejs'); -%>\n\n            <form action=\"/users/login\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Enter Password\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n            </form>\n            <p style=\"color: black;\" class=\"lead mt-4\">\n                No Account? <a href=\"/users/register\">Register</a>\n            </p>\n            <p style=\"color: black;\" class=\"lead mt-45\">\n                Forgotten Password? <a href=\"/users/reset\">Reset</a>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\"><i class=\"fas fa-sign-in-alt\"></i> Login</h1>\n            ")
    ; __line = 6
    ; __append( include('./partials/messages.ejs') )
    ; __append("\n            <form action=\"/users/login\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Enter Password\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n            </form>\n            <p style=\"color: black;\" class=\"lead mt-4\">\n                No Account? <a href=\"/users/register\">Register</a>\n            </p>\n            <p style=\"color: black;\" class=\"lead mt-45\">\n                Forgotten Password? <a href=\"/users/reset\">Reset</a>\n        </div>\n    </div>\n</div>")
    ; __line = 27
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_newQuestion = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"grid-container\">\n\n    <section class=\"nq\">\n        <div class=\"your-answer\">\n            <div class=\"add-another-answer\">\n                <h1 class=\"questionTitle\"> New Question </h1>\n            </div>\n\n            \n            <form action=\"/questions/ask\" method=\"post\">\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\">Question title:</label> -->\n                    <input class=\"t\" id=\"text\" type=\"text\" name = \"t\" placeholder=\"Question Title\" required/>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"textarea\">Enter a question:</label> -->\n                    <textarea class=\"q\" id=\"editor\" name = \"q\" cols=\"30\" rows=\"20\" placeholder=\"Write your question here\"></textarea>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\" class=\"tag\">Select the tag:</label> -->\n                    <input class=\"tags\" id=\"text\" type=\"text\" name=\"tags\" placeholder=\"tags\">\n                </div>\n\n                <div class=\"qt\">\n                    <input type=\"submit\" class=\"submit\">\n                </div>\n            </form>\n            </div>\n    </section>\n</div>\n\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"grid-container\">\n\n    <section class=\"nq\">\n        <div class=\"your-answer\">\n            <div class=\"add-another-answer\">\n                <h1 class=\"questionTitle\"> New Question </h1>\n            </div>\n\n            \n            <form action=\"/questions/ask\" method=\"post\">\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\">Question title:</label> -->\n                    <input class=\"t\" id=\"text\" type=\"text\" name = \"t\" placeholder=\"Question Title\" required/>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"textarea\">Enter a question:</label> -->\n                    <textarea class=\"q\" id=\"editor\" name = \"q\" cols=\"30\" rows=\"20\" placeholder=\"Write your question here\"></textarea>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\" class=\"tag\">Select the tag:</label> -->\n                    <input class=\"tags\" id=\"text\" type=\"text\" name=\"tags\" placeholder=\"tags\">\n                </div>\n\n                <div class=\"qt\">\n                    <input type=\"submit\" class=\"submit\">\n                </div>\n            </form>\n            </div>\n    </section>\n</div>\n\n\n")
    ; __line = 37
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_partials_messages = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<% if(typeof errors != 'undefined'){ %> <% errors.forEach(function(error) { %>\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n        <%= error.msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% }); %> <% } %>\n    \n    \n    <!-- success message from flash -->\n    <% if(success_msg != ''){ %>\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <%= success_msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>\n    <!-- error msg from flash -->\n    <% if(error_msg != ''){ %>\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        <%= error_msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>\n    \n    <% if(error != ''){ %>\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        <%= error %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ;  if(typeof errors != 'undefined'){ 
    ; __append(" ")
    ;  errors.forEach(function(error) { 
    ; __append("\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 3
    ; __append(escapeFn( error.msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 8
    ;  }); 
    ; __append(" ")
    ;  } 
    ; __append("\n    \n    \n    <!-- success message from flash -->\n    ")
    ; __line = 12
    ;  if(success_msg != ''){ 
    ; __append("\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 14
    ; __append(escapeFn( success_msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 19
    ;  } 
    ; __append("\n    <!-- error msg from flash -->\n    ")
    ; __line = 21
    ;  if(error_msg != ''){ 
    ; __append("\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 23
    ; __append(escapeFn( error_msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 28
    ;  } 
    ; __append("\n    \n    ")
    ; __line = 30
    ;  if(error != ''){ 
    ; __append("\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 32
    ; __append(escapeFn( error ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 37
    ;  } 
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_profile = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = ""
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_question = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"questionTitle\">Question title</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"question-content\">\n\n                <div class=\"question-title\">\n                    <h3>Question Title</h3>\n                </div>\n\n                <div class=\"visits\">\n                    Viewed by X people\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-question\">\n                    <p>Here we will be placing the actual question</p>\n                </div>\n\n                <div class=\"question-tags\">\n                    <p>Tags: <a href=\"index.html\">Tag1</a>, <a href=\"index.html\">Tag2</a>, <a\n                                href=\"index.html\">Tag3</a></p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-asked\">\n                        <p>Asked by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-asked\">\n                        <p>Asked on: X</p>\n                    </div>\n\n                </div>\n\n                <div class=\"number-of-answers\">\n                    X answers\n                </div>\n            </div>\n\n            <div class=\"answer-content\">\n\n                <div class=\"answer-title\">\n                    <h3>Answer Title</h3>\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-answer\">\n                    <p>Here we will be placing the actual answer</p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-answered\">\n                        <p>Answered by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-answered\">\n                        <p>Answered on: X</p>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"your-answer\">\n                <!-- The answer to the questions will be decided as follows:\n                 If there already exists some answer, then a button (add another answer) shall be displayed in the\n                 bottom of the page, otherwise, a textarea with markdown content shall be displayed\n              -->\n\n                <!-- version 1: button -->\n                <div class=\"add-another-answer\">\n                    <a href=\"index.html\">Add another answer</a>\n                </div>\n\n                <!-- version 2: textarea -->\n                <form class=\"answer\">\n                    <!-- This will be a text area in which the users shall be able to answer to questions in markdown format -->\n                    <label for=\"answer\">Possible Answers?</label>\n                    <textarea id=\"answer\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                    <input type=\"submit\" class=\"submit-answer\" value=\"Submit\">\n                </form>\n            </div>\n        </div>\n        <script src=\"./js/markdown.js\">\n        </script>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"questionTitle\">Question title</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"question-content\">\n\n                <div class=\"question-title\">\n                    <h3>Question Title</h3>\n                </div>\n\n                <div class=\"visits\">\n                    Viewed by X people\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-question\">\n                    <p>Here we will be placing the actual question</p>\n                </div>\n\n                <div class=\"question-tags\">\n                    <p>Tags: <a href=\"index.html\">Tag1</a>, <a href=\"index.html\">Tag2</a>, <a\n                                href=\"index.html\">Tag3</a></p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-asked\">\n                        <p>Asked by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-asked\">\n                        <p>Asked on: X</p>\n                    </div>\n\n                </div>\n\n                <div class=\"number-of-answers\">\n                    X answers\n                </div>\n            </div>\n\n            <div class=\"answer-content\">\n\n                <div class=\"answer-title\">\n                    <h3>Answer Title</h3>\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-answer\">\n                    <p>Here we will be placing the actual answer</p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-answered\">\n                        <p>Answered by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-answered\">\n                        <p>Answered on: X</p>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"your-answer\">\n                <!-- The answer to the questions will be decided as follows:\n                 If there already exists some answer, then a button (add another answer) shall be displayed in the\n                 bottom of the page, otherwise, a textarea with markdown content shall be displayed\n              -->\n\n                <!-- version 1: button -->\n                <div class=\"add-another-answer\">\n                    <a href=\"index.html\">Add another answer</a>\n                </div>\n\n                <!-- version 2: textarea -->\n                <form class=\"answer\">\n                    <!-- This will be a text area in which the users shall be able to answer to questions in markdown format -->\n                    <label for=\"answer\">Possible Answers?</label>\n                    <textarea id=\"answer\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                    <input type=\"submit\" class=\"submit-answer\" value=\"Submit\">\n                </form>\n            </div>\n        </div>\n        <script src=\"./js/markdown.js\">\n        </script>\n")
    ; __line = 117
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_questions = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "                        <div class=\"main-content\">\n\n                            <h3 class=\"question-title\">\n                                <%- question.title %>\n                            </h3>\n\n                            <div class=\"question-content\">\n\n\n                                <div class=\"votes\">\n                                    <form action=\"/questions/up/<%-question.id%>?_method=PUT\"\n                                        method=\"post\" class=\"upform\">\n                                        <input type=\"image\" class=\"up\" name=\"submit\" src=\"../images/upvote.png\"\n                                            width=\"30\" height=\"30\" alt=\"upvote button\">\n                                    </form>\n\n                                    <p class=\"pvotes\"><%-question.score%></p>\n\n                                    <form action=\"/questions/down/<%-question.id%>?_method=PUT\" method=\"post\" class=\"downform\">\n                                        <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                            height=\"30\" alt=\"downvote button\">\n                                    </form>\n                                </div>\n\n                                <div class=\"actual-question\">\n                                    <%- question.body %>\n                                </div>\n\n                                <div class=\"question-tags\">\n                                    <h4 class=\"tags\">Tags:</h4>\n                                    <% question.tags.split('|').forEach((t)=> {%>\n                                        <%if (t !='' ){%>\n                                            <div class=\"tt\">\n                                                <p><a href=\"/tags/<%-t%>\"><%- t %></a></p>\n                                            </div>\n                                            <%}%>\n                                                <%})%>\n                                </div>\n\n                                <div class=\"user-details\">\n                                    <p>\n                                        Asked by:\n                                        <%if(question.ownerUserId==0){%>\n                                            Anonymous\n                                            <%} else {%>\n                                                <a href=\"/users/<%-question.ownerUserId%>\"><%-users.find(e=> e.id ===\n                                                        question.ownerUserId).displayName%></a>\n                                                <%}%>\n                                    </p>\n                                    <!-- add also user profile picture  -->\n\n                                    <p>\n                                        Asked on: <%- new Date(question.creationDate).toUTCString().split('G')[0] %>\n                                    </p>\n\n                                </div>\n\n\n                                <div class=\"number-of-answers\">\n                                    <p>\n                                        Number of answers: <%- question.answerCount %>\n                                    </p>\n                                </div>\n\n                            </div>\n\n\n                            <% answers.forEach((n)=> {%>\n                                <div class=\"question-content\">\n                                    <div class=\"votes\">\n                                        <form action=\"/questions/up/<%-n.id%>?_method=PUT\" class=\"upform\" method=\"post\"> \n                                            <input type=\"image\" class=\"up\" class=\"\" name=\"submit\" src=\"../images/upvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"upvote button\">\n                                        </form>\n\n                                        <p class=\"pvotes\"><%-n.score%></p>\n\n                                        <form action=\"/questions/down/<%-n.id%>?_method=PUT\" class=\"downform\" method=\"post\">\n                                            <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"downvote button\">\n                                        </form>\n                                    </div>\n\n                                    <div class=\"actual-question\">\n                                        <%- n.body %>\n                                    </div>\n\n                                    <div></div>\n\n                                    <div class=\"user-details\">\n\n                                        <p>Answered by\n                                            <%if(n.ownerUserId==0){%>\n                                                Anonymous\n                                                <%} else {%>\n                                                    <a href=\"/users/<%-n.ownerUserId%>\"><%-users.find(e=> e.id ===\n                                                            n.ownerUserId).displayName%></a>\n                                                    <%}%><!-- add also user profile picture  -->\n                                                        <p>Answered on: <%- new\n                                                                Date(n.creationDate).toUTCString().split('G')[0] %></p>\n                                    </div>\n                                </div>\n                                <% }) %>\n\n                                    <!-- <div class=\"modify-content-buttons\">\n                        <a href=\"index.html\">Edit</a>\n                        <a href=\"index.html\">Delete</a>\n                    </div> -->\n\n                    <div class=\"your-answer\">\n                        <div class=\"add-another-answer\">\n                            <p>Your Answer</p>\n                        </div>\n\n                        <form class=\"answer\" action=\"/questions/answer/<%-question.id%>\" method = \"post\">\n                           \n                            <!-- <textarea id=\"editor\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea> -->\n                            <textarea id=\"editor\" class=\"textarea\" name=\"answer\" wrap=\"physical\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                            <!-- <div class=\"previewEditor\"></div> -->\n                            <!-- <div id=\"editor\"></div> -->\n                            \n                            <!-- <div id=\"editor\"></div> -->\n\n                            <!-- <input type=\"submit\" class=\"submit-answer\" value=\"Submit\"> -->\n                            <input type=\"submit\" class=\"btn btn-success\" value=\"Post your answer\">\n                            \n                            <!-- <button type=\"button\" class=\"btn btn-success\">Success</button> -->\n                        </form>\n                    </div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("                        <div class=\"main-content\">\n\n                            <h3 class=\"question-title\">\n                                ")
    ; __line = 4
    ; __append( question.title )
    ; __append("\n                            </h3>\n\n                            <div class=\"question-content\">\n\n\n                                <div class=\"votes\">\n                                    <form action=\"/questions/up/")
    ; __line = 11
    ; __append(question.id)
    ; __append("?_method=PUT\"\n                                        method=\"post\" class=\"upform\">\n                                        <input type=\"image\" class=\"up\" name=\"submit\" src=\"../images/upvote.png\"\n                                            width=\"30\" height=\"30\" alt=\"upvote button\">\n                                    </form>\n\n                                    <p class=\"pvotes\">")
    ; __line = 17
    ; __append(question.score)
    ; __append("</p>\n\n                                    <form action=\"/questions/down/")
    ; __line = 19
    ; __append(question.id)
    ; __append("?_method=PUT\" method=\"post\" class=\"downform\">\n                                        <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                            height=\"30\" alt=\"downvote button\">\n                                    </form>\n                                </div>\n\n                                <div class=\"actual-question\">\n                                    ")
    ; __line = 26
    ; __append( question.body )
    ; __append("\n                                </div>\n\n                                <div class=\"question-tags\">\n                                    <h4 class=\"tags\">Tags:</h4>\n                                    ")
    ; __line = 31
    ;  question.tags.split('|').forEach((t)=> {
    ; __append("\n                                        ")
    ; __line = 32
    ; if (t !='' ){
    ; __append("\n                                            <div class=\"tt\">\n                                                <p><a href=\"/tags/")
    ; __line = 34
    ; __append(t)
    ; __append("\">")
    ; __append( t )
    ; __append("</a></p>\n                                            </div>\n                                            ")
    ; __line = 36
    ; }
    ; __append("\n                                                ")
    ; __line = 37
    ; })
    ; __append("\n                                </div>\n\n                                <div class=\"user-details\">\n                                    <p>\n                                        Asked by:\n                                        ")
    ; __line = 43
    ; if(question.ownerUserId==0){
    ; __append("\n                                            Anonymous\n                                            ")
    ; __line = 45
    ; } else {
    ; __append("\n                                                <a href=\"/users/")
    ; __line = 46
    ; __append(question.ownerUserId)
    ; __append("\">")
    ; __append(users.find(e=> e.id ===
                                                        question.ownerUserId).displayName)
    ; __line = 47
    ; __append("</a>\n                                                ")
    ; __line = 48
    ; }
    ; __append("\n                                    </p>\n                                    <!-- add also user profile picture  -->\n\n                                    <p>\n                                        Asked on: ")
    ; __line = 53
    ; __append( new Date(question.creationDate).toUTCString().split('G')[0] )
    ; __append("\n                                    </p>\n\n                                </div>\n\n\n                                <div class=\"number-of-answers\">\n                                    <p>\n                                        Number of answers: ")
    ; __line = 61
    ; __append( question.answerCount )
    ; __append("\n                                    </p>\n                                </div>\n\n                            </div>\n\n\n                            ")
    ; __line = 68
    ;  answers.forEach((n)=> {
    ; __append("\n                                <div class=\"question-content\">\n                                    <div class=\"votes\">\n                                        <form action=\"/questions/up/")
    ; __line = 71
    ; __append(n.id)
    ; __append("?_method=PUT\" class=\"upform\" method=\"post\"> \n                                            <input type=\"image\" class=\"up\" class=\"\" name=\"submit\" src=\"../images/upvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"upvote button\">\n                                        </form>\n\n                                        <p class=\"pvotes\">")
    ; __line = 76
    ; __append(n.score)
    ; __append("</p>\n\n                                        <form action=\"/questions/down/")
    ; __line = 78
    ; __append(n.id)
    ; __append("?_method=PUT\" class=\"downform\" method=\"post\">\n                                            <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"downvote button\">\n                                        </form>\n                                    </div>\n\n                                    <div class=\"actual-question\">\n                                        ")
    ; __line = 85
    ; __append( n.body )
    ; __append("\n                                    </div>\n\n                                    <div></div>\n\n                                    <div class=\"user-details\">\n\n                                        <p>Answered by\n                                            ")
    ; __line = 93
    ; if(n.ownerUserId==0){
    ; __append("\n                                                Anonymous\n                                                ")
    ; __line = 95
    ; } else {
    ; __append("\n                                                    <a href=\"/users/")
    ; __line = 96
    ; __append(n.ownerUserId)
    ; __append("\">")
    ; __append(users.find(e=> e.id ===
                                                            n.ownerUserId).displayName)
    ; __line = 97
    ; __append("</a>\n                                                    ")
    ; __line = 98
    ; }
    ; __append("<!-- add also user profile picture  -->\n                                                        <p>Answered on: ")
    ; __line = 99
    ; __append( new
                                                                Date(n.creationDate).toUTCString().split('G')[0] )
    ; __line = 100
    ; __append("</p>\n                                    </div>\n                                </div>\n                                ")
    ; __line = 103
    ;  }) 
    ; __append("\n\n                                    <!-- <div class=\"modify-content-buttons\">\n                        <a href=\"index.html\">Edit</a>\n                        <a href=\"index.html\">Delete</a>\n                    </div> -->\n\n                    <div class=\"your-answer\">\n                        <div class=\"add-another-answer\">\n                            <p>Your Answer</p>\n                        </div>\n\n                        <form class=\"answer\" action=\"/questions/answer/")
    ; __line = 115
    ; __append(question.id)
    ; __append("\" method = \"post\">\n                           \n                            <!-- <textarea id=\"editor\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea> -->\n                            <textarea id=\"editor\" class=\"textarea\" name=\"answer\" wrap=\"physical\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                            <!-- <div class=\"previewEditor\"></div> -->\n                            <!-- <div id=\"editor\"></div> -->\n                            \n                            <!-- <div id=\"editor\"></div> -->\n\n                            <!-- <input type=\"submit\" class=\"submit-answer\" value=\"Submit\"> -->\n                            <input type=\"submit\" class=\"btn btn-success\" value=\"Post your answer\">\n                            \n                            <!-- <button type=\"button\" class=\"btn btn-success\">Success</button> -->\n                        </form>\n                    </div>\n\n")
    ; __line = 131
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_register = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\">\n                <i class=\"fas fa-user-plus\"></i> Register\n            </h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/register\" enctype=\"multipart/form-data\" method=\"POST\" >\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"name\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\"\n                        value=\"<%= typeof name != 'undefined' ? name : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\"\n                        value=\"<%= typeof email != 'undefined' ? email : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                        placeholder=\"Create Password\" value=\"<%= typeof password != 'undefined' ? password : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                        placeholder=\"Confirm Password\"\n                        value=\"<%= typeof password2 != 'undefined' ? password2 : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"image\">Profile Picture (optional)</label>\n                    <input type=\"file\" id=\"image\"\n                           name=\"image\" value=\"\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">\n                    Register\n                </button>\n            </form>\n            <p class=\"lead mt-4\">Have An Account? <a href=\"/users/login\">Login</a></p>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\">\n                <i class=\"fas fa-user-plus\"></i> Register\n            </h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/register\" enctype=\"multipart/form-data\" method=\"POST\" >\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"name\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\"\n                        value=\"")
    ; __line = 12
    ; __append(escapeFn( typeof name != 'undefined' ? name : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\"\n                        value=\"")
    ; __line = 17
    ; __append(escapeFn( typeof email != 'undefined' ? email : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                        placeholder=\"Create Password\" value=\"")
    ; __line = 22
    ; __append(escapeFn( typeof password != 'undefined' ? password : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                        placeholder=\"Confirm Password\"\n                        value=\"")
    ; __line = 28
    ; __append(escapeFn( typeof password2 != 'undefined' ? password2 : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"image\">Profile Picture (optional)</label>\n                    <input type=\"file\" id=\"image\"\n                           name=\"image\" value=\"\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">\n                    Register\n                </button>\n            </form>\n            <p class=\"lead mt-4\">Have An Account? <a href=\"/users/login\">Login</a></p>\n        </div>\n    </div>\n</div>")
    ; __line = 42
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_tags = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"tags_filters\">\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/popular\"> POPULAR </a></p>\n    </div>\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/\"> NEW </a></p>\n    </div>\n</div>\n<div class=\"tags_container\">\n    <% let row=t=> { %>\n        <a href=\"/tags/<%-t.name%>\">\n            <div class=\"tags_cell\">\n                <div class=\"tags_name\">\n                        <%-t.name%>\n                    \n                </div>\n                <div class=\"tags_count\">\n                    <p> posted: <%-t.count%> times </p>\n                </div>\n            </div>\n        </a>\n        <%} %>\n            <%- tags.map(row).join(\"\") %>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"tags_filters\">\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/popular\"> POPULAR </a></p>\n    </div>\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/\"> NEW </a></p>\n    </div>\n</div>\n<div class=\"tags_container\">\n    ")
    ; __line = 10
    ;  let row=t=> { 
    ; __append("\n        <a href=\"/tags/")
    ; __line = 11
    ; __append(t.name)
    ; __append("\">\n            <div class=\"tags_cell\">\n                <div class=\"tags_name\">\n                        ")
    ; __line = 14
    ; __append(t.name)
    ; __append("\n                    \n                </div>\n                <div class=\"tags_count\">\n                    <p> posted: ")
    ; __line = 18
    ; __append(t.count)
    ; __append(" times </p>\n                </div>\n            </div>\n        </a>\n        ")
    ; __line = 22
    ; } 
    ; __append("\n            ")
    ; __line = 23
    ; __append( tags.map(row).join("") )
    ; __append("\n</div>")
    ; __line = 24
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_tags_name = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"trendingQ\">Tags questions</h1>\n\n        <div class=\"main-content\">\n\n            <% posts.forEach(post => { %>\n\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                        <p><span class=\"styleT\"> <%= post.title %> </span></p>\n                        <br>\n                        <p><span> <%= post.answerCount %> </span></p>\n                        <br>\n                        <p><span> <%= post.creationDate.split('G')[0] %> </span></p>\n                        <br>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"trendingQ\">Tags questions</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 6
    ;  posts.forEach(post => { 
    ; __append("\n\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 9
    ; __append( post.id )
    ; __append("\">\n                        <p><span class=\"styleT\"> ")
    ; __line = 10
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 12
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 14
    ; __append(escapeFn( post.creationDate.split('G')[0] ))
    ; __append(" </span></p>\n                        <br>\n                    </a>\n                </div>\n            ")
    ; __line = 18
    ;  }); 
    ; __append("\n        </div>\n")
    ; __line = 20
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_user_profile = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 id=\"profile\" class=\"trendingQ\">User profile</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"d1\">\n                <br>\n                <p><span> <%= user.displayName %> </span></p>\n                <br>\n                <img src=\"<%= user.profileImageUrl %>\" alt=\"user profile img\">\n                <p><span>number of questions: <%= user.questionCount %> </span></p>\n                <p><span>number of answers: <%= user.answerCount %> </span></p>\n                <p><span>badges awards: gold = <%= user.goldBadges %> | silver =  <%= user.silverBadges %> | bronze = <%= user.bronzeBadges %></span></p>\n            </div>\n\n        </div>\n\n        <h1 id=\"questions\" class=\"trendingQ\">User questions</h1>\n\n        <div class=\"main-content\">\n\n            <% questions.forEach(post => { %>\n                <% if(post.ownerUserId == user.id){%>\n                    <div class=\"d1\">\n                        <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                            <p><span class=\"styleT\"> <%= post.title %> </span></p>\n                            <br>\n                            <p><span> score: <%= post.score %> </span></p>\n                            <br>\n                            <p><span> answers: <%= post.answerCount %> </span></p>\n                            <br>\n                            <p><span> asked on: <%= new Date(post.creationDate).toUTCString().split('G')[0] %> </span></p>\n\n                            <br>\n                        </a>\n                    </div>\n                <%}%>\n            <% }); %>\n        </div>\n\n        <h1 id=\"answers\" class=\"trendingQ\">User answers</h1>\n\n        <div class=\"main-content\">\n\n            <% user_answers.forEach(post => { %>\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.parentId %>\">\n                        <p><span class=\"styleT\"> <%= questions.find(e=>e.id == post.parentId).title %> </span></p>\n                        <br>\n                        <p><span> score: <%= post.score %> </span></p>\n                        <br>\n                        <p><span> <%= new Date(post.creationDate).toUTCString().split('G')[0] %> </span></p>\n\n                        <br>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n    </main>\n    <!-- <aside style=\"border-right: 20px; position: -webkit-sticky; color: white; border: 2px solid white; height: 20%; width: auto; display: flex; flex-direction: column;\">\n        <a style=\"color: white;\" href=\"#profile\">PROFILE</a>\n        <a style=\"color: white;\" href=\"#questions\">USER QUESTIONS</a>\n        <a style=\"color: white;\" href=\"#answers\">USER ANSWERS</a>\n    </aside> -->\n\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 id=\"profile\" class=\"trendingQ\">User profile</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"d1\">\n                <br>\n                <p><span> ")
    ; __line = 8
    ; __append(escapeFn( user.displayName ))
    ; __append(" </span></p>\n                <br>\n                <img src=\"")
    ; __line = 10
    ; __append(escapeFn( user.profileImageUrl ))
    ; __append("\" alt=\"user profile img\">\n                <p><span>number of questions: ")
    ; __line = 11
    ; __append(escapeFn( user.questionCount ))
    ; __append(" </span></p>\n                <p><span>number of answers: ")
    ; __line = 12
    ; __append(escapeFn( user.answerCount ))
    ; __append(" </span></p>\n                <p><span>badges awards: gold = ")
    ; __line = 13
    ; __append(escapeFn( user.goldBadges ))
    ; __append(" | silver =  ")
    ; __append(escapeFn( user.silverBadges ))
    ; __append(" | bronze = ")
    ; __append(escapeFn( user.bronzeBadges ))
    ; __append("</span></p>\n            </div>\n\n        </div>\n\n        <h1 id=\"questions\" class=\"trendingQ\">User questions</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 22
    ;  questions.forEach(post => { 
    ; __append("\n                ")
    ; __line = 23
    ;  if(post.ownerUserId == user.id){
    ; __append("\n                    <div class=\"d1\">\n                        <a class=\"linkQ\" href=\"/questions/")
    ; __line = 25
    ; __append( post.id )
    ; __append("\">\n                            <p><span class=\"styleT\"> ")
    ; __line = 26
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> score: ")
    ; __line = 28
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> answers: ")
    ; __line = 30
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> asked on: ")
    ; __line = 32
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append(" </span></p>\n\n                            <br>\n                        </a>\n                    </div>\n                ")
    ; __line = 37
    ; }
    ; __append("\n            ")
    ; __line = 38
    ;  }); 
    ; __append("\n        </div>\n\n        <h1 id=\"answers\" class=\"trendingQ\">User answers</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 45
    ;  user_answers.forEach(post => { 
    ; __append("\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 47
    ; __append( post.parentId )
    ; __append("\">\n                        <p><span class=\"styleT\"> ")
    ; __line = 48
    ; __append(escapeFn( questions.find(e=>e.id == post.parentId).title ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> score: ")
    ; __line = 50
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 52
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append(" </span></p>\n\n                        <br>\n                    </a>\n                </div>\n            ")
    ; __line = 57
    ;  }); 
    ; __append("\n        </div>\n    </main>\n    <!-- <aside style=\"border-right: 20px; position: -webkit-sticky; color: white; border: 2px solid white; height: 20%; width: auto; display: flex; flex-direction: column;\">\n        <a style=\"color: white;\" href=\"#profile\">PROFILE</a>\n        <a style=\"color: white;\" href=\"#questions\">USER QUESTIONS</a>\n        <a style=\"color: white;\" href=\"#answers\">USER ANSWERS</a>\n    </aside> -->\n\n</div>\n\n")
    ; __line = 68
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_users_list = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "        <h1 class=\"trendingQ\">List of users</h1>\n\n\n        <div class=\"user-content\">\n\n            <% users.forEach(user => { %>\n                <div class=\"tags_cell\">\n                        <a class=\"linkU\" href=\"/users/<%- user.id %>\">\n                            <div>\n                                <img class=\"img\" src=\"<%= user.profileImageUrl %>\" alt=\"user profile img\">\n                                <p class=\"styleT\" > <%= user.displayName %></p>\n                            </div>\n                            <div class = \"right\">\n                                <br>\n                                <p><span>number of questions: <%= user.questionCount %> </span></p>\n                                <p><span>number of answers: <%= user.answerCount %> </span></p>\n                                <p><span>reputation: <%= user.reputation %></span></p>\n                            </div>\n                        </a>\n                </div>\n            <% }); %>\n\n        </div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("        <h1 class=\"trendingQ\">List of users</h1>\n\n\n        <div class=\"user-content\">\n\n            ")
    ; __line = 6
    ;  users.forEach(user => { 
    ; __append("\n                <div class=\"tags_cell\">\n                        <a class=\"linkU\" href=\"/users/")
    ; __line = 8
    ; __append( user.id )
    ; __append("\">\n                            <div>\n                                <img class=\"img\" src=\"")
    ; __line = 10
    ; __append(escapeFn( user.profileImageUrl ))
    ; __append("\" alt=\"user profile img\">\n                                <p class=\"styleT\" > ")
    ; __line = 11
    ; __append(escapeFn( user.displayName ))
    ; __append("</p>\n                            </div>\n                            <div class = \"right\">\n                                <br>\n                                <p><span>number of questions: ")
    ; __line = 15
    ; __append(escapeFn( user.questionCount ))
    ; __append(" </span></p>\n                                <p><span>number of answers: ")
    ; __line = 16
    ; __append(escapeFn( user.answerCount ))
    ; __append(" </span></p>\n                                <p><span>reputation: ")
    ; __line = 17
    ; __append(escapeFn( user.reputation ))
    ; __append("</span></p>\n                            </div>\n                        </a>\n                </div>\n            ")
    ; __line = 21
    ;  }); 
    ; __append("\n\n        </div>")
    ; __line = 23
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_welcome = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body text-center\">\n            <h1><i class=\"fas fa-code\"></i> Stack Underflow</h1>\n            <p style=\"color: black;\">Authenticate yourself</p>\n            <a href=\"/users/register\" class=\"btn btn-primary btn-block mb-2\">Register</a>\n            <a href=\"/users/login\" class=\"btn btn-secondary btn-block\">Login</a>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body text-center\">\n            <h1><i class=\"fas fa-code\"></i> Stack Underflow</h1>\n            <p style=\"color: black;\">Authenticate yourself</p>\n            <a href=\"/users/register\" class=\"btn btn-primary btn-block mb-2\">Register</a>\n            <a href=\"/users/login\" class=\"btn btn-secondary btn-block\">Login</a>\n        </div>\n    </div>\n</div>")
    ; __line = 11
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_answers = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <div class=\"main-content\">\n            <div class=\"votes\">\n                <!-- upvote button image -->\n                <img src=\"../public/images/upvote.png\" width=\"30\" height=\"30\" alt=\"upvote button\">\n                <p>0</p> <!-- Will be dynamically generated -->\n                <!-- downvote button image -->\n                <img src=\"../public/images/downvote.png\" width=\"30\" height=\"30\" alt=\"downvote button\">\n            </div>\n            <div class=\"answer-body\">\n                <p>This is the answer's body. It shall be dynamically loaded in the following days.</p>\n                <p>Here, if any, the code in question will be placed</p>\n            </div>\n            <div class=\"modify-content-buttons\">\n                <button class=\"edit\">Edit</button>\n                <button class=\"delete\">Delete</button>\n            </div>\n\n            <div class=\"user-answered\">\n                <p>Answered by <a href=\"#\">user1</a></p>\n                <!-- add also user profile picture  -->\n            </div>\n\n            <div class=\"answer-comments\">\n                <p>Comments:</p>\n                <p>Comment 1</p>\n                <p>Comment 2</p>\n                <p>Comment 3</p>\n            </div>\n\n            <div class=\"add-comment\">\n                <p>Add a comment:</p>\n                <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\"></textarea>\n                <button class=\"add-comment\">Add comment</button>\n            </div>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <div class=\"main-content\">\n            <div class=\"votes\">\n                <!-- upvote button image -->\n                <img src=\"../public/images/upvote.png\" width=\"30\" height=\"30\" alt=\"upvote button\">\n                <p>0</p> <!-- Will be dynamically generated -->\n                <!-- downvote button image -->\n                <img src=\"../public/images/downvote.png\" width=\"30\" height=\"30\" alt=\"downvote button\">\n            </div>\n            <div class=\"answer-body\">\n                <p>This is the answer's body. It shall be dynamically loaded in the following days.</p>\n                <p>Here, if any, the code in question will be placed</p>\n            </div>\n            <div class=\"modify-content-buttons\">\n                <button class=\"edit\">Edit</button>\n                <button class=\"delete\">Delete</button>\n            </div>\n\n            <div class=\"user-answered\">\n                <p>Answered by <a href=\"#\">user1</a></p>\n                <!-- add also user profile picture  -->\n            </div>\n\n            <div class=\"answer-comments\">\n                <p>Comments:</p>\n                <p>Comment 1</p>\n                <p>Comment 2</p>\n                <p>Comment 3</p>\n            </div>\n\n            <div class=\"add-comment\">\n                <p>Add a comment:</p>\n                <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\"></textarea>\n                <button class=\"add-comment\">Add comment</button>\n            </div>\n        </div>\n")
    ; __line = 37
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_check_email = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Password Reset page -->\n\n\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fa fa-envelope\"></i> Please check your email</h1>\n            <%- include('./partials/messages.ejs'); -%>\n        </div>\n        <div class=\"text-center\">\n            <a href=\"/\" class=\"btn btn-primary\">Return To Homepage</a>\n        </div>\n    </div>\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Password Reset page -->\n\n\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fa fa-envelope\"></i> Please check your email</h1>\n            ")
    ; __line = 8
    ; __append( include('./partials/messages.ejs') )
    ; __append("        </div>\n        <div class=\"text-center\">\n            <a href=\"/\" class=\"btn btn-primary\">Return To Homepage</a>\n        </div>\n    </div>\n</div>\n\n")
    ; __line = 16
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_confirm = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Confirm new Password page -->\n<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Confirm New Password</h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/confirm\" method=\"POST\">\n                <!-- create 2 form entries -->\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Create Password\" value=\"<%= typeof password != 'undefined' ? password : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                           placeholder=\"Confirm Password\"\n                           value=\"<%= typeof password2 != 'undefined' ? password2 : '' %>\" />\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Confirm new Password page -->\n")
    ; __line = 2
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Confirm New Password</h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/confirm\" method=\"POST\">\n                <!-- create 2 form entries -->\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Create Password\" value=\"")
    ; __line = 13
    ; __append(escapeFn( typeof password != 'undefined' ? password : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                           placeholder=\"Confirm Password\"\n                           value=\"")
    ; __line = 19
    ; __append(escapeFn( typeof password2 != 'undefined' ? password2 : '' ))
    ; __append("\" />\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n")
    ; __line = 29
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_dashboard = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<h1 class=\"mt-4\">You have been succesfully logged in as <%= name %> </h1>\n<p class=\"lead mb-3\">Welcome  <%= name %></p>\n<a href=\"/users/logout\" class=\"btn btn-secondary\">Logout</a>\n<a href=\"/\">Proceed to Questions page</a>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<h1 class=\"mt-4\">You have been succesfully logged in as ")
    ; __append(escapeFn( name ))
    ; __append(" </h1>\n<p class=\"lead mb-3\">Welcome  ")
    ; __line = 2
    ; __append(escapeFn( name ))
    ; __append("</p>\n<a href=\"/users/logout\" class=\"btn btn-secondary\">Logout</a>\n<a href=\"/\">Proceed to Questions page</a>")
    ; __line = 4
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_forgot_password = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!-- Password Reset page -->\n<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Reset Password</h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/reset\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- Password Reset page -->\n")
    ; __line = 2
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-7 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-5\"><i class=\"fas fa-sign-in-alt\"></i> Reset Password</h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/reset\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Reset</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n")
    ; __line = 19
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_home = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n\n<%- include ('includes/head') %>\n\n<body>\n\n    <section>\n        <img class=\"welcome\" src=\"../images/Stack%20Underflow.png\">\n    </section>\n\n</body>\n\n<script src=\"./js/search.js\">\n\n</script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n\n")
    ; __line = 3
    ; __append( include ('includes/head') )
    ; __append("\n\n<body>\n\n    <section>\n        <img class=\"welcome\" src=\"../images/Stack%20Underflow.png\">\n    </section>\n\n</body>\n\n<script src=\"./js/search.js\">\n\n</script>\n</html>")
    ; __line = 16
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = ""
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_head = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <title>Stack Underflow</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"https://cdn.socket.io/4.4.1/socket.io.min.js\"></script>\n    <script>const socket = io(\"ws://localhost:8000\");</script>\n    <script src='/js/events.js'></script>\n    <script src=\"https://code.jquery.com/jquery-3.6.1.js\"></script>\n    <script src=\"/js/iziToast.js\" type=\"text/javascript\"></script>\n\n    <script src=\"./js/markdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/showdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/search.js\" type=\"text/javascript\"></script>\n    \n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js\"></script>\n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/super-build/ckeditor.js\"></script>\n    <script>\n        ClassicEditor\n            .create( document.querySelector('#editor'))\n            .catch( error => {\n                console.error( error );\n            } );\n    </script>\n\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <title>Stack Underflow</title>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"https://cdn.socket.io/4.4.1/socket.io.min.js\"></script>\n    <script>const socket = io(\"ws://localhost:8000\");</script>\n    <script src='/js/events.js'></script>\n    <script src=\"https://code.jquery.com/jquery-3.6.1.js\"></script>\n    <script src=\"/js/iziToast.js\" type=\"text/javascript\"></script>\n\n    <script src=\"./js/markdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/showdown.js\" type=\"text/javascript\"></script>\n    <script src=\"./js/search.js\" type=\"text/javascript\"></script>\n    \n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js\"></script>\n    <script src=\"https://cdn.ckeditor.com/ckeditor5/35.4.0/super-build/ckeditor.js\"></script>\n    <script>\n        ClassicEditor\n            .create( document.querySelector('#editor'))\n            .catch( error => {\n                console.error( error );\n            } );\n    </script>\n\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">\n    <link rel=\"icon\" href=\"/images/logo.png\">\n    <link rel=\"stylesheet\" href=\"/styles/iziToast.css\">\n    <link rel=\"stylesheet\" href=\"../styles/style.css\">\n    <link rel=\"stylesheet\" href=\"../styles/darkstyle.css\">\n    <link rel=\"stylesheet\" href=\"../styles/answers.css\">\n    <link rel=\"stylesheet\" href=\"../styles/questions.css\">")
    ; __line = 36
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_header = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <img class=\"header-logo\" src=\"../images/logo.png\" alt=\"logo\">\n    <input class=\"searchbar\" id=\"searchInput\" type=\"text\" placeholder=\"Search\">\n    <% if (logged) { %>\n        <a class=\"header-logout\" href=\"/users/logout\"> Logout </a>\n    <% } else { %>\n        <a class=\"header-logout\" href=\"/users\"> Login </a>\n    <% } %>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <img class=\"header-logo\" src=\"../images/logo.png\" alt=\"logo\">\n    <input class=\"searchbar\" id=\"searchInput\" type=\"text\" placeholder=\"Search\">\n    ")
    ; __line = 3
    ;  if (logged) { 
    ; __append("\n        <a class=\"header-logout\" href=\"/users/logout\"> Logout </a>\n    ")
    ; __line = 5
    ;  } else { 
    ; __append("\n        <a class=\"header-logout\" href=\"/users\"> Login </a>\n    ")
    ; __line = 7
    ;  } 
    ; __append("\n")
    ; __line = 8
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_nav = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "    <a href=\"/\"> Home </a>\n    <a href=\"/users/users_list\"> Users </a>    \n    <a href=\"/tags\"> Tags </a>\n    <br>\n    <br>\n    <a href=\"/questions/ask\" class=\"newAsk\"> Ask </a>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("    <a href=\"/\"> Home </a>\n    <a href=\"/users/users_list\"> Users </a>    \n    <a href=\"/tags\"> Tags </a>\n    <br>\n    <br>\n    <a href=\"/questions/ask\" class=\"newAsk\"> Ask </a>\n")
    ; __line = 7
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"trendingQ\">Browse questions</h1>\n\n        <div class=\"maincontentdiv\">\n\n            <% posts.forEach(post => { %>\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                        <div class=\"d\">\n                            <div class=\"dtitle\">\n                                <p class=\"styleT\"><span class=\"styleT\"> <%= post.title %> </span></p>\n                                <br>\n                                <p class=\"ptt\"><span><%- post.bodyMarkdown %></span></p>\n                            </div>\n                            <div class=\"dscore\">\n                                <p class=\"stylediv\"><span> score: <%= post.score %> </span></p>\n                            </div>\n                            <div class=\"dcount\">\n                                <p class=\"stylediv\"><span> answers: <%= post.answerCount %> </span></p>\n                            </div>\n                            <div class=\"ddate\">\n                                <p class=\"stylediv\"><span><%= new Date(post.creationDate).toUTCString().split('G')[0] %></span></p>\n                            </div>\n                            <div class=\"dtag\">\n                                <% post.tags.split(\"|\").forEach(tag =>{ %>\n\n                                    <% if (tag != ''){%> \n                                    <div class=\"styletag\">\n                                        <span><%- tag %></span>\n                                    </div>   \n                                    <%}%> \n                                <% }) %>\n                            </div>\n                            <div class=\"duser\">\n                                <p><span>\n                                    <% if(post.ownerUserId ==0){%>\n                                        Anonymous\n                                    <% } else { %>\n                                        <%- users.find(e => e.id === post.ownerUserId).displayName %>\n                                    <%}%>\n                                </span></p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"trendingQ\">Browse questions</h1>\n\n        <div class=\"maincontentdiv\">\n\n            ")
    ; __line = 6
    ;  posts.forEach(post => { 
    ; __append("\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 8
    ; __append( post.id )
    ; __append("\">\n                        <div class=\"d\">\n                            <div class=\"dtitle\">\n                                <p class=\"styleT\"><span class=\"styleT\"> ")
    ; __line = 11
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                                <br>\n                                <p class=\"ptt\"><span>")
    ; __line = 13
    ; __append( post.bodyMarkdown )
    ; __append("</span></p>\n                            </div>\n                            <div class=\"dscore\">\n                                <p class=\"stylediv\"><span> score: ")
    ; __line = 16
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                            </div>\n                            <div class=\"dcount\">\n                                <p class=\"stylediv\"><span> answers: ")
    ; __line = 19
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                            </div>\n                            <div class=\"ddate\">\n                                <p class=\"stylediv\"><span>")
    ; __line = 22
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append("</span></p>\n                            </div>\n                            <div class=\"dtag\">\n                                ")
    ; __line = 25
    ;  post.tags.split("|").forEach(tag =>{ 
    ; __append("\n\n                                    ")
    ; __line = 27
    ;  if (tag != ''){
    ; __append(" \n                                    <div class=\"styletag\">\n                                        <span>")
    ; __line = 29
    ; __append( tag )
    ; __append("</span>\n                                    </div>   \n                                    ")
    ; __line = 31
    ; }
    ; __append(" \n                                ")
    ; __line = 32
    ;  }) 
    ; __append("\n                            </div>\n                            <div class=\"duser\">\n                                <p><span>\n                                    ")
    ; __line = 36
    ;  if(post.ownerUserId ==0){
    ; __append("\n                                        Anonymous\n                                    ")
    ; __line = 38
    ;  } else { 
    ; __append("\n                                        ")
    ; __line = 39
    ; __append( users.find(e => e.id === post.ownerUserId).displayName )
    ; __append("\n                                    ")
    ; __line = 40
    ; }
    ; __append("\n                                </span></p>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            ")
    ; __line = 46
    ;  }); 
    ; __append("\n        </div>\n")
    ; __line = 48
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_layout = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\"\n          integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://bootswatch.com/4/journal/bootstrap.min.css\" />\n\n    <!-- <title>Authentication</title> -->\n\n</head>\n<body>\n<div class=\"container\"><%- body %></div>\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n        integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"\n        integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"\n        integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n        crossorigin=\"anonymous\"></script>\n</body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\"\n          integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://bootswatch.com/4/journal/bootstrap.min.css\" />\n\n    <!-- <title>Authentication</title> -->\n\n</head>\n<body>\n<div class=\"container\">")
    ; __line = 14
    ; __append( body )
    ; __append("</div>\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n        integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"\n        integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"\n        integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n        crossorigin=\"anonymous\"></script>\n</body>\n</html>")
    ; __line = 26
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_login = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\"><i class=\"fas fa-sign-in-alt\"></i> Login</h1>\n            <%- include('./partials/messages.ejs'); -%>\n\n            <form action=\"/users/login\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Enter Password\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n            </form>\n            <p style=\"color: black;\" class=\"lead mt-4\">\n                No Account? <a href=\"/users/register\">Register</a>\n            </p>\n            <p style=\"color: black;\" class=\"lead mt-45\">\n                Forgotten Password? <a href=\"/users/reset\">Reset</a>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\"><i class=\"fas fa-sign-in-alt\"></i> Login</h1>\n            ")
    ; __line = 6
    ; __append( include('./partials/messages.ejs') )
    ; __append("\n            <form action=\"/users/login\" method=\"POST\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                           placeholder=\"Enter Password\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n            </form>\n            <p style=\"color: black;\" class=\"lead mt-4\">\n                No Account? <a href=\"/users/register\">Register</a>\n            </p>\n            <p style=\"color: black;\" class=\"lead mt-45\">\n                Forgotten Password? <a href=\"/users/reset\">Reset</a>\n        </div>\n    </div>\n</div>")
    ; __line = 27
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_newQuestion = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"grid-container\">\n\n    <section class=\"nq\">\n        <div class=\"your-answer\">\n            <div class=\"add-another-answer\">\n                <h1 class=\"questionTitle\"> New Question </h1>\n            </div>\n\n            \n            <form action=\"/questions/ask\" method=\"post\">\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\">Question title:</label> -->\n                    <input class=\"t\" id=\"text\" type=\"text\" name = \"t\" placeholder=\"Question Title\" required/>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"textarea\">Enter a question:</label> -->\n                    <textarea class=\"q\" id=\"editor\" name = \"q\" cols=\"30\" rows=\"20\" placeholder=\"Write your question here\"></textarea>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\" class=\"tag\">Select the tag:</label> -->\n                    <input class=\"tags\" id=\"text\" type=\"text\" name=\"tags\" placeholder=\"tags\">\n                </div>\n\n                <div class=\"qt\">\n                    <input type=\"submit\" class=\"submit\">\n                </div>\n            </form>\n            </div>\n    </section>\n</div>\n\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"grid-container\">\n\n    <section class=\"nq\">\n        <div class=\"your-answer\">\n            <div class=\"add-another-answer\">\n                <h1 class=\"questionTitle\"> New Question </h1>\n            </div>\n\n            \n            <form action=\"/questions/ask\" method=\"post\">\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\">Question title:</label> -->\n                    <input class=\"t\" id=\"text\" type=\"text\" name = \"t\" placeholder=\"Question Title\" required/>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"textarea\">Enter a question:</label> -->\n                    <textarea class=\"q\" id=\"editor\" name = \"q\" cols=\"30\" rows=\"20\" placeholder=\"Write your question here\"></textarea>\n                </div>\n\n                <div class=\"qt\">\n                    <!-- <label class=\"ph\" for=\"text\" class=\"tag\">Select the tag:</label> -->\n                    <input class=\"tags\" id=\"text\" type=\"text\" name=\"tags\" placeholder=\"tags\">\n                </div>\n\n                <div class=\"qt\">\n                    <input type=\"submit\" class=\"submit\">\n                </div>\n            </form>\n            </div>\n    </section>\n</div>\n\n\n")
    ; __line = 37
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_partials_messages = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<% if(typeof errors != 'undefined'){ %> <% errors.forEach(function(error) { %>\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n        <%= error.msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% }); %> <% } %>\n    \n    \n    <!-- success message from flash -->\n    <% if(success_msg != ''){ %>\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <%= success_msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>\n    <!-- error msg from flash -->\n    <% if(error_msg != ''){ %>\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        <%= error_msg %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>\n    \n    <% if(error != ''){ %>\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        <%= error %>\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <% } %>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ;  if(typeof errors != 'undefined'){ 
    ; __append(" ")
    ;  errors.forEach(function(error) { 
    ; __append("\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 3
    ; __append(escapeFn( error.msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 8
    ;  }); 
    ; __append(" ")
    ;  } 
    ; __append("\n    \n    \n    <!-- success message from flash -->\n    ")
    ; __line = 12
    ;  if(success_msg != ''){ 
    ; __append("\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 14
    ; __append(escapeFn( success_msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 19
    ;  } 
    ; __append("\n    <!-- error msg from flash -->\n    ")
    ; __line = 21
    ;  if(error_msg != ''){ 
    ; __append("\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 23
    ; __append(escapeFn( error_msg ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 28
    ;  } 
    ; __append("\n    \n    ")
    ; __line = 30
    ;  if(error != ''){ 
    ; __append("\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        ")
    ; __line = 32
    ; __append(escapeFn( error ))
    ; __append("\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    ")
    ; __line = 37
    ;  } 
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_profile = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = ""
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_question = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"questionTitle\">Question title</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"question-content\">\n\n                <div class=\"question-title\">\n                    <h3>Question Title</h3>\n                </div>\n\n                <div class=\"visits\">\n                    Viewed by X people\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-question\">\n                    <p>Here we will be placing the actual question</p>\n                </div>\n\n                <div class=\"question-tags\">\n                    <p>Tags: <a href=\"index.html\">Tag1</a>, <a href=\"index.html\">Tag2</a>, <a\n                                href=\"index.html\">Tag3</a></p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-asked\">\n                        <p>Asked by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-asked\">\n                        <p>Asked on: X</p>\n                    </div>\n\n                </div>\n\n                <div class=\"number-of-answers\">\n                    X answers\n                </div>\n            </div>\n\n            <div class=\"answer-content\">\n\n                <div class=\"answer-title\">\n                    <h3>Answer Title</h3>\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-answer\">\n                    <p>Here we will be placing the actual answer</p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-answered\">\n                        <p>Answered by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-answered\">\n                        <p>Answered on: X</p>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"your-answer\">\n                <!-- The answer to the questions will be decided as follows:\n                 If there already exists some answer, then a button (add another answer) shall be displayed in the\n                 bottom of the page, otherwise, a textarea with markdown content shall be displayed\n              -->\n\n                <!-- version 1: button -->\n                <div class=\"add-another-answer\">\n                    <a href=\"index.html\">Add another answer</a>\n                </div>\n\n                <!-- version 2: textarea -->\n                <form class=\"answer\">\n                    <!-- This will be a text area in which the users shall be able to answer to questions in markdown format -->\n                    <label for=\"answer\">Possible Answers?</label>\n                    <textarea id=\"answer\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                    <input type=\"submit\" class=\"submit-answer\" value=\"Submit\">\n                </form>\n            </div>\n        </div>\n        <script src=\"./js/markdown.js\">\n        </script>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"questionTitle\">Question title</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"question-content\">\n\n                <div class=\"question-title\">\n                    <h3>Question Title</h3>\n                </div>\n\n                <div class=\"visits\">\n                    Viewed by X people\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-question\">\n                    <p>Here we will be placing the actual question</p>\n                </div>\n\n                <div class=\"question-tags\">\n                    <p>Tags: <a href=\"index.html\">Tag1</a>, <a href=\"index.html\">Tag2</a>, <a\n                                href=\"index.html\">Tag3</a></p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-asked\">\n                        <p>Asked by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-asked\">\n                        <p>Asked on: X</p>\n                    </div>\n\n                </div>\n\n                <div class=\"number-of-answers\">\n                    X answers\n                </div>\n            </div>\n\n            <div class=\"answer-content\">\n\n                <div class=\"answer-title\">\n                    <h3>Answer Title</h3>\n                </div>\n\n                <div class=\"votes\">\n                    <a href=\"./index.html\"><img src=\"./images/upvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"upvote button\"></a>\n                    <p class=\"pvotes\">0</p>\n                    <a href=\"./index.html\"><img src=\"./images/downvote.png\" width=\"30\" height=\"30\"\n                                                alt=\"downvote button\"></a>\n                </div>\n\n                <div class=\"actual-answer\">\n                    <p>Here we will be placing the actual answer</p>\n                </div>\n\n                <div class=\"modify-content-buttons\">\n                    <a href=\"index.html\">Edit</a>\n                    <a href=\"index.html\">Delete</a>\n                </div>\n\n                <div class=\"user-details\">\n\n                    <div class=\"user-answered\">\n                        <p>Answered by <a href=\"#\">user1</a></p>\n                        <!-- add also user profile picture  -->\n                    </div>\n\n                    <div class=\"date-answered\">\n                        <p>Answered on: X</p>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"your-answer\">\n                <!-- The answer to the questions will be decided as follows:\n                 If there already exists some answer, then a button (add another answer) shall be displayed in the\n                 bottom of the page, otherwise, a textarea with markdown content shall be displayed\n              -->\n\n                <!-- version 1: button -->\n                <div class=\"add-another-answer\">\n                    <a href=\"index.html\">Add another answer</a>\n                </div>\n\n                <!-- version 2: textarea -->\n                <form class=\"answer\">\n                    <!-- This will be a text area in which the users shall be able to answer to questions in markdown format -->\n                    <label for=\"answer\">Possible Answers?</label>\n                    <textarea id=\"answer\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                    <input type=\"submit\" class=\"submit-answer\" value=\"Submit\">\n                </form>\n            </div>\n        </div>\n        <script src=\"./js/markdown.js\">\n        </script>\n")
    ; __line = 117
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_questions = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "                        <div class=\"main-content\">\n\n                            <h3 class=\"question-title\">\n                                <%- question.title %>\n                            </h3>\n\n                            <div class=\"question-content\">\n\n\n                                <div class=\"votes\">\n                                    <form action=\"/questions/up/<%-question.id%>?_method=PUT\"\n                                        method=\"post\" class=\"upform\">\n                                        <input type=\"image\" class=\"up\" name=\"submit\" src=\"../images/upvote.png\"\n                                            width=\"30\" height=\"30\" alt=\"upvote button\">\n                                    </form>\n\n                                    <p class=\"pvotes\"><%-question.score%></p>\n\n                                    <form action=\"/questions/down/<%-question.id%>?_method=PUT\" method=\"post\" class=\"downform\">\n                                        <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                            height=\"30\" alt=\"downvote button\">\n                                    </form>\n                                </div>\n\n                                <div class=\"actual-question\">\n                                    <%- question.body %>\n                                </div>\n\n                                <div class=\"question-tags\">\n                                    <h4 class=\"tags\">Tags:</h4>\n                                    <% question.tags.split('|').forEach((t)=> {%>\n                                        <%if (t !='' ){%>\n                                            <div class=\"tt\">\n                                                <p><a href=\"/tags/<%-t%>\"><%- t %></a></p>\n                                            </div>\n                                            <%}%>\n                                                <%})%>\n                                </div>\n\n                                <div class=\"user-details\">\n                                    <p>\n                                        Asked by:\n                                        <%if(question.ownerUserId==0){%>\n                                            Anonymous\n                                            <%} else {%>\n                                                <a href=\"/users/<%-question.ownerUserId%>\"><%-users.find(e=> e.id ===\n                                                        question.ownerUserId).displayName%></a>\n                                                <%}%>\n                                    </p>\n                                    <!-- add also user profile picture  -->\n\n                                    <p>\n                                        Asked on: <%- new Date(question.creationDate).toUTCString().split('G')[0] %>\n                                    </p>\n\n                                </div>\n\n\n                                <div class=\"number-of-answers\">\n                                    <p>\n                                        Number of answers: <%- question.answerCount %>\n                                    </p>\n                                </div>\n\n                            </div>\n\n\n                            <% answers.forEach((n)=> {%>\n                                <div class=\"question-content\">\n                                    <div class=\"votes\">\n                                        <form action=\"/questions/up/<%-n.id%>?_method=PUT\" class=\"upform\" method=\"post\"> \n                                            <input type=\"image\" class=\"up\" class=\"\" name=\"submit\" src=\"../images/upvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"upvote button\">\n                                        </form>\n\n                                        <p class=\"pvotes\"><%-n.score%></p>\n\n                                        <form action=\"/questions/down/<%-n.id%>?_method=PUT\" class=\"downform\" method=\"post\">\n                                            <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"downvote button\">\n                                        </form>\n                                    </div>\n\n                                    <div class=\"actual-question\">\n                                        <%- n.body %>\n                                    </div>\n\n                                    <div></div>\n\n                                    <div class=\"user-details\">\n\n                                        <p>Answered by\n                                            <%if(n.ownerUserId==0){%>\n                                                Anonymous\n                                                <%} else {%>\n                                                    <a href=\"/users/<%-n.ownerUserId%>\"><%-users.find(e=> e.id ===\n                                                            n.ownerUserId).displayName%></a>\n                                                    <%}%><!-- add also user profile picture  -->\n                                                        <p>Answered on: <%- new\n                                                                Date(n.creationDate).toUTCString().split('G')[0] %></p>\n                                    </div>\n                                </div>\n                                <% }) %>\n\n                                    <!-- <div class=\"modify-content-buttons\">\n                        <a href=\"index.html\">Edit</a>\n                        <a href=\"index.html\">Delete</a>\n                    </div> -->\n\n                    <div class=\"your-answer\">\n                        <div class=\"add-another-answer\">\n                            <p>Your Answer</p>\n                        </div>\n\n                        <form class=\"answer\" action=\"/questions/answer/<%-question.id%>\" method = \"post\">\n                           \n                            <!-- <textarea id=\"editor\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea> -->\n                            <textarea id=\"editor\" class=\"textarea\" name=\"answer\" wrap=\"physical\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                            <!-- <div class=\"previewEditor\"></div> -->\n                            <!-- <div id=\"editor\"></div> -->\n                            \n                            <!-- <div id=\"editor\"></div> -->\n\n                            <!-- <input type=\"submit\" class=\"submit-answer\" value=\"Submit\"> -->\n                            <input type=\"submit\" class=\"btn btn-success\" value=\"Post your answer\">\n                            \n                            <!-- <button type=\"button\" class=\"btn btn-success\">Success</button> -->\n                        </form>\n                    </div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("                        <div class=\"main-content\">\n\n                            <h3 class=\"question-title\">\n                                ")
    ; __line = 4
    ; __append( question.title )
    ; __append("\n                            </h3>\n\n                            <div class=\"question-content\">\n\n\n                                <div class=\"votes\">\n                                    <form action=\"/questions/up/")
    ; __line = 11
    ; __append(question.id)
    ; __append("?_method=PUT\"\n                                        method=\"post\" class=\"upform\">\n                                        <input type=\"image\" class=\"up\" name=\"submit\" src=\"../images/upvote.png\"\n                                            width=\"30\" height=\"30\" alt=\"upvote button\">\n                                    </form>\n\n                                    <p class=\"pvotes\">")
    ; __line = 17
    ; __append(question.score)
    ; __append("</p>\n\n                                    <form action=\"/questions/down/")
    ; __line = 19
    ; __append(question.id)
    ; __append("?_method=PUT\" method=\"post\" class=\"downform\">\n                                        <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                            height=\"30\" alt=\"downvote button\">\n                                    </form>\n                                </div>\n\n                                <div class=\"actual-question\">\n                                    ")
    ; __line = 26
    ; __append( question.body )
    ; __append("\n                                </div>\n\n                                <div class=\"question-tags\">\n                                    <h4 class=\"tags\">Tags:</h4>\n                                    ")
    ; __line = 31
    ;  question.tags.split('|').forEach((t)=> {
    ; __append("\n                                        ")
    ; __line = 32
    ; if (t !='' ){
    ; __append("\n                                            <div class=\"tt\">\n                                                <p><a href=\"/tags/")
    ; __line = 34
    ; __append(t)
    ; __append("\">")
    ; __append( t )
    ; __append("</a></p>\n                                            </div>\n                                            ")
    ; __line = 36
    ; }
    ; __append("\n                                                ")
    ; __line = 37
    ; })
    ; __append("\n                                </div>\n\n                                <div class=\"user-details\">\n                                    <p>\n                                        Asked by:\n                                        ")
    ; __line = 43
    ; if(question.ownerUserId==0){
    ; __append("\n                                            Anonymous\n                                            ")
    ; __line = 45
    ; } else {
    ; __append("\n                                                <a href=\"/users/")
    ; __line = 46
    ; __append(question.ownerUserId)
    ; __append("\">")
    ; __append(users.find(e=> e.id ===
                                                        question.ownerUserId).displayName)
    ; __line = 47
    ; __append("</a>\n                                                ")
    ; __line = 48
    ; }
    ; __append("\n                                    </p>\n                                    <!-- add also user profile picture  -->\n\n                                    <p>\n                                        Asked on: ")
    ; __line = 53
    ; __append( new Date(question.creationDate).toUTCString().split('G')[0] )
    ; __append("\n                                    </p>\n\n                                </div>\n\n\n                                <div class=\"number-of-answers\">\n                                    <p>\n                                        Number of answers: ")
    ; __line = 61
    ; __append( question.answerCount )
    ; __append("\n                                    </p>\n                                </div>\n\n                            </div>\n\n\n                            ")
    ; __line = 68
    ;  answers.forEach((n)=> {
    ; __append("\n                                <div class=\"question-content\">\n                                    <div class=\"votes\">\n                                        <form action=\"/questions/up/")
    ; __line = 71
    ; __append(n.id)
    ; __append("?_method=PUT\" class=\"upform\" method=\"post\"> \n                                            <input type=\"image\" class=\"up\" class=\"\" name=\"submit\" src=\"../images/upvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"upvote button\">\n                                        </form>\n\n                                        <p class=\"pvotes\">")
    ; __line = 76
    ; __append(n.score)
    ; __append("</p>\n\n                                        <form action=\"/questions/down/")
    ; __line = 78
    ; __append(n.id)
    ; __append("?_method=PUT\" class=\"downform\" method=\"post\">\n                                            <input type=\"image\" class=\"down\" name=\"submit\" src=\"../images/downvote.png\" width=\"30\"\n                                                height=\"30\" alt=\"downvote button\">\n                                        </form>\n                                    </div>\n\n                                    <div class=\"actual-question\">\n                                        ")
    ; __line = 85
    ; __append( n.body )
    ; __append("\n                                    </div>\n\n                                    <div></div>\n\n                                    <div class=\"user-details\">\n\n                                        <p>Answered by\n                                            ")
    ; __line = 93
    ; if(n.ownerUserId==0){
    ; __append("\n                                                Anonymous\n                                                ")
    ; __line = 95
    ; } else {
    ; __append("\n                                                    <a href=\"/users/")
    ; __line = 96
    ; __append(n.ownerUserId)
    ; __append("\">")
    ; __append(users.find(e=> e.id ===
                                                            n.ownerUserId).displayName)
    ; __line = 97
    ; __append("</a>\n                                                    ")
    ; __line = 98
    ; }
    ; __append("<!-- add also user profile picture  -->\n                                                        <p>Answered on: ")
    ; __line = 99
    ; __append( new
                                                                Date(n.creationDate).toUTCString().split('G')[0] )
    ; __line = 100
    ; __append("</p>\n                                    </div>\n                                </div>\n                                ")
    ; __line = 103
    ;  }) 
    ; __append("\n\n                                    <!-- <div class=\"modify-content-buttons\">\n                        <a href=\"index.html\">Edit</a>\n                        <a href=\"index.html\">Delete</a>\n                    </div> -->\n\n                    <div class=\"your-answer\">\n                        <div class=\"add-another-answer\">\n                            <p>Your Answer</p>\n                        </div>\n\n                        <form class=\"answer\" action=\"/questions/answer/")
    ; __line = 115
    ; __append(question.id)
    ; __append("\" method = \"post\">\n                           \n                            <!-- <textarea id=\"editor\" class=\"textarea\" name=\"answer\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea> -->\n                            <textarea id=\"editor\" class=\"textarea\" name=\"answer\" wrap=\"physical\" cols=\"10\" rows=\"15\" placeholder=\"Write your answer here\"></textarea>\n                            <!-- <div class=\"previewEditor\"></div> -->\n                            <!-- <div id=\"editor\"></div> -->\n                            \n                            <!-- <div id=\"editor\"></div> -->\n\n                            <!-- <input type=\"submit\" class=\"submit-answer\" value=\"Submit\"> -->\n                            <input type=\"submit\" class=\"btn btn-success\" value=\"Post your answer\">\n                            \n                            <!-- <button type=\"button\" class=\"btn btn-success\">Success</button> -->\n                        </form>\n                    </div>\n\n")
    ; __line = 131
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_register = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\">\n                <i class=\"fas fa-user-plus\"></i> Register\n            </h1>\n            <%- include('./partials/messages.ejs'); -%>\n            <form action=\"/users/register\" enctype=\"multipart/form-data\" method=\"POST\" >\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"name\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\"\n                        value=\"<%= typeof name != 'undefined' ? name : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\"\n                        value=\"<%= typeof email != 'undefined' ? email : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                        placeholder=\"Create Password\" value=\"<%= typeof password != 'undefined' ? password : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                        placeholder=\"Confirm Password\"\n                        value=\"<%= typeof password2 != 'undefined' ? password2 : '' %>\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"image\">Profile Picture (optional)</label>\n                    <input type=\"file\" id=\"image\"\n                           name=\"image\" value=\"\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">\n                    Register\n                </button>\n            </form>\n            <p class=\"lead mt-4\">Have An Account? <a href=\"/users/login\">Login</a></p>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body\">\n            <h1 class=\"text-center mb-3\">\n                <i class=\"fas fa-user-plus\"></i> Register\n            </h1>\n            ")
    ; __line = 7
    ; __append( include('./partials/messages.ejs') )
    ; __append("            <form action=\"/users/register\" enctype=\"multipart/form-data\" method=\"POST\" >\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"name\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\"\n                        value=\"")
    ; __line = 12
    ; __append(escapeFn( typeof name != 'undefined' ? name : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Email\"\n                        value=\"")
    ; __line = 17
    ; __append(escapeFn( typeof email != 'undefined' ? email : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                        placeholder=\"Create Password\" value=\"")
    ; __line = 22
    ; __append(escapeFn( typeof password != 'undefined' ? password : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password2\">Confirm Password</label>\n                    <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\"\n                        placeholder=\"Confirm Password\"\n                        value=\"")
    ; __line = 28
    ; __append(escapeFn( typeof password2 != 'undefined' ? password2 : '' ))
    ; __append("\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"image\">Profile Picture (optional)</label>\n                    <input type=\"file\" id=\"image\"\n                           name=\"image\" value=\"\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">\n                    Register\n                </button>\n            </form>\n            <p class=\"lead mt-4\">Have An Account? <a href=\"/users/login\">Login</a></p>\n        </div>\n    </div>\n</div>")
    ; __line = 42
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_tags = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"tags_filters\">\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/popular\"> POPULAR </a></p>\n    </div>\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/\"> NEW </a></p>\n    </div>\n</div>\n<div class=\"tags_container\">\n    <% let row=t=> { %>\n        <a href=\"/tags/<%-t.name%>\">\n            <div class=\"tags_cell\">\n                <div class=\"tags_name\">\n                        <%-t.name%>\n                    \n                </div>\n                <div class=\"tags_count\">\n                    <p> posted: <%-t.count%> times </p>\n                </div>\n            </div>\n        </a>\n        <%} %>\n            <%- tags.map(row).join(\"\") %>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"tags_filters\">\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/popular\"> POPULAR </a></p>\n    </div>\n    <div class=\"tags_filter\">\n        <p><a href=\"/tags/\"> NEW </a></p>\n    </div>\n</div>\n<div class=\"tags_container\">\n    ")
    ; __line = 10
    ;  let row=t=> { 
    ; __append("\n        <a href=\"/tags/")
    ; __line = 11
    ; __append(t.name)
    ; __append("\">\n            <div class=\"tags_cell\">\n                <div class=\"tags_name\">\n                        ")
    ; __line = 14
    ; __append(t.name)
    ; __append("\n                    \n                </div>\n                <div class=\"tags_count\">\n                    <p> posted: ")
    ; __line = 18
    ; __append(t.count)
    ; __append(" times </p>\n                </div>\n            </div>\n        </a>\n        ")
    ; __line = 22
    ; } 
    ; __append("\n            ")
    ; __line = 23
    ; __append( tags.map(row).join("") )
    ; __append("\n</div>")
    ; __line = 24
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_tags_name = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 class=\"trendingQ\">Tags questions</h1>\n\n        <div class=\"main-content\">\n\n            <% posts.forEach(post => { %>\n\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                        <p><span class=\"styleT\"> <%= post.title %> </span></p>\n                        <br>\n                        <p><span> <%= post.answerCount %> </span></p>\n                        <br>\n                        <p><span> <%= post.creationDate.split('G')[0] %> </span></p>\n                        <br>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 class=\"trendingQ\">Tags questions</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 6
    ;  posts.forEach(post => { 
    ; __append("\n\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 9
    ; __append( post.id )
    ; __append("\">\n                        <p><span class=\"styleT\"> ")
    ; __line = 10
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 12
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 14
    ; __append(escapeFn( post.creationDate.split('G')[0] ))
    ; __append(" </span></p>\n                        <br>\n                    </a>\n                </div>\n            ")
    ; __line = 18
    ;  }); 
    ; __append("\n        </div>\n")
    ; __line = 20
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_user_profile = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n        <h1 id=\"profile\" class=\"trendingQ\">User profile</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"d1\">\n                <br>\n                <p><span> <%= user.displayName %> </span></p>\n                <br>\n                <img src=\"<%= user.profileImageUrl %>\" alt=\"user profile img\">\n                <p><span>number of questions: <%= user.questionCount %> </span></p>\n                <p><span>number of answers: <%= user.answerCount %> </span></p>\n                <p><span>badges awards: gold = <%= user.goldBadges %> | silver =  <%= user.silverBadges %> | bronze = <%= user.bronzeBadges %></span></p>\n            </div>\n\n        </div>\n\n        <h1 id=\"questions\" class=\"trendingQ\">User questions</h1>\n\n        <div class=\"main-content\">\n\n            <% questions.forEach(post => { %>\n                <% if(post.ownerUserId == user.id){%>\n                    <div class=\"d1\">\n                        <a class=\"linkQ\" href=\"/questions/<%- post.id %>\">\n                            <p><span class=\"styleT\"> <%= post.title %> </span></p>\n                            <br>\n                            <p><span> score: <%= post.score %> </span></p>\n                            <br>\n                            <p><span> answers: <%= post.answerCount %> </span></p>\n                            <br>\n                            <p><span> asked on: <%= new Date(post.creationDate).toUTCString().split('G')[0] %> </span></p>\n\n                            <br>\n                        </a>\n                    </div>\n                <%}%>\n            <% }); %>\n        </div>\n\n        <h1 id=\"answers\" class=\"trendingQ\">User answers</h1>\n\n        <div class=\"main-content\">\n\n            <% user_answers.forEach(post => { %>\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/<%- post.parentId %>\">\n                        <p><span class=\"styleT\"> <%= questions.find(e=>e.id == post.parentId).title %> </span></p>\n                        <br>\n                        <p><span> score: <%= post.score %> </span></p>\n                        <br>\n                        <p><span> <%= new Date(post.creationDate).toUTCString().split('G')[0] %> </span></p>\n\n                        <br>\n                    </a>\n                </div>\n            <% }); %>\n        </div>\n    </main>\n    <!-- <aside style=\"border-right: 20px; position: -webkit-sticky; color: white; border: 2px solid white; height: 20%; width: auto; display: flex; flex-direction: column;\">\n        <a style=\"color: white;\" href=\"#profile\">PROFILE</a>\n        <a style=\"color: white;\" href=\"#questions\">USER QUESTIONS</a>\n        <a style=\"color: white;\" href=\"#answers\">USER ANSWERS</a>\n    </aside> -->\n\n</div>\n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n        <h1 id=\"profile\" class=\"trendingQ\">User profile</h1>\n\n        <div class=\"main-content\">\n\n            <div class=\"d1\">\n                <br>\n                <p><span> ")
    ; __line = 8
    ; __append(escapeFn( user.displayName ))
    ; __append(" </span></p>\n                <br>\n                <img src=\"")
    ; __line = 10
    ; __append(escapeFn( user.profileImageUrl ))
    ; __append("\" alt=\"user profile img\">\n                <p><span>number of questions: ")
    ; __line = 11
    ; __append(escapeFn( user.questionCount ))
    ; __append(" </span></p>\n                <p><span>number of answers: ")
    ; __line = 12
    ; __append(escapeFn( user.answerCount ))
    ; __append(" </span></p>\n                <p><span>badges awards: gold = ")
    ; __line = 13
    ; __append(escapeFn( user.goldBadges ))
    ; __append(" | silver =  ")
    ; __append(escapeFn( user.silverBadges ))
    ; __append(" | bronze = ")
    ; __append(escapeFn( user.bronzeBadges ))
    ; __append("</span></p>\n            </div>\n\n        </div>\n\n        <h1 id=\"questions\" class=\"trendingQ\">User questions</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 22
    ;  questions.forEach(post => { 
    ; __append("\n                ")
    ; __line = 23
    ;  if(post.ownerUserId == user.id){
    ; __append("\n                    <div class=\"d1\">\n                        <a class=\"linkQ\" href=\"/questions/")
    ; __line = 25
    ; __append( post.id )
    ; __append("\">\n                            <p><span class=\"styleT\"> ")
    ; __line = 26
    ; __append(escapeFn( post.title ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> score: ")
    ; __line = 28
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> answers: ")
    ; __line = 30
    ; __append(escapeFn( post.answerCount ))
    ; __append(" </span></p>\n                            <br>\n                            <p><span> asked on: ")
    ; __line = 32
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append(" </span></p>\n\n                            <br>\n                        </a>\n                    </div>\n                ")
    ; __line = 37
    ; }
    ; __append("\n            ")
    ; __line = 38
    ;  }); 
    ; __append("\n        </div>\n\n        <h1 id=\"answers\" class=\"trendingQ\">User answers</h1>\n\n        <div class=\"main-content\">\n\n            ")
    ; __line = 45
    ;  user_answers.forEach(post => { 
    ; __append("\n                <div class=\"d1\">\n                    <a class=\"linkQ\" href=\"/questions/")
    ; __line = 47
    ; __append( post.parentId )
    ; __append("\">\n                        <p><span class=\"styleT\"> ")
    ; __line = 48
    ; __append(escapeFn( questions.find(e=>e.id == post.parentId).title ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> score: ")
    ; __line = 50
    ; __append(escapeFn( post.score ))
    ; __append(" </span></p>\n                        <br>\n                        <p><span> ")
    ; __line = 52
    ; __append(escapeFn( new Date(post.creationDate).toUTCString().split('G')[0] ))
    ; __append(" </span></p>\n\n                        <br>\n                    </a>\n                </div>\n            ")
    ; __line = 57
    ;  }); 
    ; __append("\n        </div>\n    </main>\n    <!-- <aside style=\"border-right: 20px; position: -webkit-sticky; color: white; border: 2px solid white; height: 20%; width: auto; display: flex; flex-direction: column;\">\n        <a style=\"color: white;\" href=\"#profile\">PROFILE</a>\n        <a style=\"color: white;\" href=\"#questions\">USER QUESTIONS</a>\n        <a style=\"color: white;\" href=\"#answers\">USER ANSWERS</a>\n    </aside> -->\n\n</div>\n\n")
    ; __line = 68
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_users_list = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "        <h1 class=\"trendingQ\">List of users</h1>\n\n\n        <div class=\"user-content\">\n\n            <% users.forEach(user => { %>\n                <div class=\"tags_cell\">\n                        <a class=\"linkU\" href=\"/users/<%- user.id %>\">\n                            <div>\n                                <img class=\"img\" src=\"<%= user.profileImageUrl %>\" alt=\"user profile img\">\n                                <p class=\"styleT\" > <%= user.displayName %></p>\n                            </div>\n                            <div class = \"right\">\n                                <br>\n                                <p><span>number of questions: <%= user.questionCount %> </span></p>\n                                <p><span>number of answers: <%= user.answerCount %> </span></p>\n                                <p><span>reputation: <%= user.reputation %></span></p>\n                            </div>\n                        </a>\n                </div>\n            <% }); %>\n\n        </div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("        <h1 class=\"trendingQ\">List of users</h1>\n\n\n        <div class=\"user-content\">\n\n            ")
    ; __line = 6
    ;  users.forEach(user => { 
    ; __append("\n                <div class=\"tags_cell\">\n                        <a class=\"linkU\" href=\"/users/")
    ; __line = 8
    ; __append( user.id )
    ; __append("\">\n                            <div>\n                                <img class=\"img\" src=\"")
    ; __line = 10
    ; __append(escapeFn( user.profileImageUrl ))
    ; __append("\" alt=\"user profile img\">\n                                <p class=\"styleT\" > ")
    ; __line = 11
    ; __append(escapeFn( user.displayName ))
    ; __append("</p>\n                            </div>\n                            <div class = \"right\">\n                                <br>\n                                <p><span>number of questions: ")
    ; __line = 15
    ; __append(escapeFn( user.questionCount ))
    ; __append(" </span></p>\n                                <p><span>number of answers: ")
    ; __line = 16
    ; __append(escapeFn( user.answerCount ))
    ; __append(" </span></p>\n                                <p><span>reputation: ")
    ; __line = 17
    ; __append(escapeFn( user.reputation ))
    ; __append("</span></p>\n                            </div>\n                        </a>\n                </div>\n            ")
    ; __line = 21
    ;  }); 
    ; __append("\n\n        </div>")
    ; __line = 23
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_welcome = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<%- include ('includes/head') %>\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body text-center\">\n            <h1><i class=\"fas fa-code\"></i> Stack Underflow</h1>\n            <p style=\"color: black;\">Authenticate yourself</p>\n            <a href=\"/users/register\" class=\"btn btn-primary btn-block mb-2\">Register</a>\n            <a href=\"/users/login\" class=\"btn btn-secondary btn-block\">Login</a>\n        </div>\n    </div>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append( include ('includes/head') )
    ; __append("\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card card-body text-center\">\n            <h1><i class=\"fas fa-code\"></i> Stack Underflow</h1>\n            <p style=\"color: black;\">Authenticate yourself</p>\n            <a href=\"/users/register\" class=\"btn btn-primary btn-block mb-2\">Register</a>\n            <a href=\"/users/login\" class=\"btn btn-secondary btn-block\">Login</a>\n        </div>\n    </div>\n</div>")
    ; __line = 11
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}