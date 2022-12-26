// from assignment 7, SA3
api = function() {

    // Function to determine the outcome of a fetch request.
    // Will return a promise that resolves with a JSON object if the status code is 200 or 201.
    // Will return undefined if the status code is 204. Will throw the status code otherwise.
    function validateResponse(res) {
        if (res.status == 200 || res.status == 201) {
            return res.json();
        } if (res.status == 204) {
            return;
        } else {
            throw res.status;
        }
    }
    // Helper function to send out an HTTP request with the given method, url, optional body and headers. 
    // It assumes that the request and response body are encoded using JSON strings.
    async function _fetchJSON(method, url, body, headers) {

        function addHeaders(headers) {
            let newHeaders = {...headers};
            newHeaders['Accept'] = 'application/json';

            if (method == 'POST' || method == 'PUT' || method == 'PATCH')
              newHeaders['Content-Type'] = 'application/json';

            return newHeaders;
          }

        if (method === 'POST' || method == 'PUT' || method == 'PATCH') {
            body = JSON.stringify(body);
        }

        // Asynchronously call fetch with the given url and options and assign
        //  the response object when the promise resolves
        const res = await fetch(url, { method, headers: addHeaders(headers), body });
        return validateResponse(res);
    }

    // Helper function to send out an HTTP request with the given method, url, optional body and headers.
    // It assumes that the response body is encoded using JSON strings, it will directly pass the body parameter to fetch. 
    // Recommended to use to POST or PUT form data objects.
    async function _fetchFORM(method, url, body, headers) {

        function addHeaders(headers) {
            let newHeaders = {...headers};
            newHeaders['Accept'] = 'application/json';
            return newHeaders;
          }

        // waits for the promise returned by fetch to resolve to the response object
        const res = await fetch(url, { method, headers: addHeaders(headers), body });
        return validateResponse(res);

    }

    function get_all_posts() {
        return _fetchJSON("GET", "/posts");
    }

    function get_all_users() {
        return _fetchJSON("GET", "/users/users_list");
    }

    function get_all_tags() {
        return _fetchJSON("GET", "/tags");
    }

    function get_question(id) {
        return _fetchJSON("GET", "/questions/" + id);
    }

    function post_question(form_data) {
        return _fetchJSON("POST", "/questions/ask", form_data);
    }

    function post_answer(id, form_data) {
        return _fetchJSON("POST", "/questions/answer/" + id, form_data);
    }

    function get_user_by_id(id) {
        return _fetchJSON("GET", "/users/" + id);
    }

    function get_questions_by_tags(name) {
        return _fetchJSON("GET", "/tags/" + name);
    }

    function get_login_status() {
        return _fetchJSON("GET", "/login_status");
    }

    function put_vote_up(id) {
        return _fetchJSON("PUT", "/questions/up/" + id);
    }
    
    function put_vote_down(id) {
        return _fetchJSON("PUT", "/questions/down/" + id);
    }

    function get_sorted_tags() {
        return _fetchJSON("GET", "/tags/name");
    }

    function get_popular_tags() {
        return _fetchJSON("GET", "/tags/popular");
    }
    
    // Define the public methods of the api object
    return {
        get_all_posts,
        get_all_users,
        get_all_tags,
        get_question,
        post_question,
        post_answer,
        get_user_by_id,
        get_questions_by_tags,
        get_login_status,
        put_vote_up,
        put_vote_down,
        get_sorted_tags,
        get_popular_tags
    }

}(); // () invokes the function directly to create the api object