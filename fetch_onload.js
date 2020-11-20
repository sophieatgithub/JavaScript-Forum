window.onload = function request () {
    fetch("http://localhost:3004/comments")
        .then(response => response.json())
        .then(data => printComments(data));
}